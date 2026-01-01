Diese Seite bei [https://elssner.github.io/MQTT-Fernbedienung/mqtt/](https://elssner.github.io/MQTT-Fernbedienung/mqtt/) öffnen.

* fischertechnik ROBO Pro Coding Projekt: [MQTT_Gabelstapler](https://git.fischertechnik-cloud.com/calliope/MQTT_Gabelstapler)

MQTT erfordert eine WLAN Verbindung mit IP Adressen zwischen Sender und Empfänger. Der TXT 4.0 Controller auf dem Modell ist WLAN Access Point und mit Python wird im Linux eine eigene mosquitto Instanz an Port 1884 gestartet.
Mit diesem MQTT Broker verbindet sich lokal das ROBO Pro Coding Projekt als MQTT Subscriber. Als Daten existiert nur ein einziger String, der in der dauerhaft Schleife ständig abgefragt wird, ob er sich geändert hat.
Der TXT 4.0 Controller auf dem Modell ist nur Subscriber und sendet keine Daten.

### Fernbedienung Sender

Als MQTT Publisher ist ein zweiter TXT 4.0 Controller geeignet:
* fischertechnik ROBO Pro Coding Projekt: [MQTT_Fernbedienung_Joystick](https://git.fischertechnik-cloud.com/calliope/MQTT_Fernbedienung_Joystick)

Calliope kann mit [Cytron WLAN Modul](../doc) ebenfalls als MQTT Publisher den Daten String an den TXT 4.0 Controller senden. Für die Steuerung von Omniwheels in alle Richtungen bietet sich der auf dem Calliope integrierte Gestensensor an.
Nur durch Neigen des Calliope kann das Modell schon ferngesteuert werden. Allerdings ist Kurven fahren schwierig, wenn alle Motoren mit der gleichen Geschwindigkeit synchronisiert sind (und sich nur in verschiedene Richtungen oder gar nicht drehen).

Ein I²C Joystick lässt sich auch einfach an Calliope stecken. Zum Fahren und Lenken ohne Servo bietet sich die Raupensteuerung an. Dazu werden die Räder vorn und hinten synchronisiert (wie bei einer Kette). 
Bei der Joystick Steuerung werden also nur zwei Geschwindigkeiten für links und rechts übertragen.



## MQTT Protokoll
> CSV: mit Semikolon getrennte Strings\
> "1;bt_fw;512"\
> "2;m;-512;512"\
> "3;j;0;255"\
> "4;1"

> AT+MQTTPUB=0,"topic","3;j;128;128",1,0

* Länge >= 2 und [1] = "stop"\
  *Encodermotoren und I²C Qwiic Motoren stoppen* 
  * [0] Zähler
  * [1] = "stop"
* Länge >= 3 und [1] = "q"\
  *Motoren über I²C steuern* [SparkFun Qwiic Motor Driver](https://www.sparkfun.com/products/15451)
  * [0] Zähler
  * [1] = "q"
  * [2] = Qwiic Motor A: (0 .. 128 .. 255) 128 ist STOP
  * optional [3] = Qwiic Motor B: (0 .. 128 .. 255)
  * optional [4] = Qwiic Motor C: (0 .. 128 .. 255)
  * optional [5] = Qwiic Motor D: (0 .. 128 .. 255)
* Länge >= 3 und [1] = "r"\
  *Licht mit I²C Relais schalten* [SparkFun Qwiic Single Relay](https://www.sparkfun.com/products/15093)
  * [0] Zähler
  * [1] = "r"
  * [2} = "1" schaltet Relais an, alles andere schaltet aus
* Länge = 4 und [1] = "m"\
  *direkte Motor Werte vom Sender (Motoren vorn und hinten sind synchronisiert)*
  * [0] Zähler
  * [1] = "m"
  * [2] = motor_links (-512 .. 0 .. +512)
  * [3] = motor_rechts (-512 .. 0 .. +512)
* Länge = 4 und [1] = "j"\
  *direkte Joystick Werte vom Sender (Raupensteuerung beim Empfänger)*
  * [0] Zähler
  * [1] = "j"
  * [2] = j_fahren (0 .. 128 .. 255)
  * [3] = j_lenken (0 .. 128 .. 255)
* Länge = 3\
  *Omniwheels mit Calliope Gestensensor steuern*\
  *oder mit Buttons auf TXT 4.0 Touch Display*
  * [0] Zähler
  * [1] button_id ("bt_..") = 11 Buttons bzw. Gesten\
    *Omniwheels 8 Richtungen gerade, 2 drehen auf der Stelle, Stop*
    * "bt_0", "bt_stop" (stoppe 4 Motoren sync)
    * ↑ ↓ "bt_fw", "bt_bw" (vorwärts, rückwaärts)
    * ← → "bt_left", "bt_right" (gerade nach links, rechts)
    * ↖ ↗ ↙ ↘ "bt_fw_left", "bt_fw_right", "bt_bw_left", "bt_bw_right"
    * ↶ ↷ "bt_turn_left", "bt_turn_right" (auf der Stelle drehen)
    * sonst (stoppe 4 Motoren sync)
  * [2] speed (0 .. +512)
* sonst\
  *alle Motoren stoppen und "payload {} ungültig" anzeigen*

> [0] Zähler zählt nur bei geänderten Daten weiter.\
> MQTT Daten werden dauerhaft (100 ms) gesendet und nur wenn [0] Zähler sich ändert, werden diese ausgewertet.

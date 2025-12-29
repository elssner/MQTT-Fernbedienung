Diese Seite bei [https://elssner.github.io/MQTT-Fernbedienung/mqtt/](https://elssner.github.io/MQTT-Fernbedienung/mqtt/) öffnen

## MQTT Protokoll
> CSV: mit Semikolon getrennte Strings\
> "1;bt_fw;512"\
> "2;m;-512;512"\
> "3;j;0;255"\
> "4;1"

> AT+MQTTPUB=0,"topic","3;j;128;128",1,0

* Länge >= 3 und [1] = "q"\
  *Motoren über I²C steuern* [SparkFun Qwiic Motor Driver](https://www.sparkfun.com/products/15451)
  * [0] Zähler
  * [1] = "q"
  * [2] = Qwiic Motor 0: (0 .. 128 .. 255)
  * optional [3] = Qwiic Motor 1: (0 .. 128 .. 255)
  * optional [4] = Qwiic Motor 2: (0 .. 128 .. 255)
  * optional [5] = Qwiic Motor 3: (0 .. 128 .. 255)
* Länge = 3 und [1] beginnt mit "bt_"\
  *Buttons auf TXT 4.0 Touch Display oder Calliope neigen*
  * [0] Zähler
  * [1] button_id ("bt_..") = 11 Buttons bzw. Gesten\
    *Omniwheels 8 Richtungen gerade, 2 drehen auf der Stelle, Stop*
    * "bt_0", "bt_stop" (stoppe 4 Motoren sync)
    * "bt_fw", "bt_bw" (vorwärts, rückwaärts)
    * "bt_left", "bt_right" (gerade nach links, rechts)
    * "bt_fw_left", "bt_fw_right", "bt_bw_left", "bt_bw_right"
    * "bt_turn_left", "bt_turn_right" (auf der Stelle drehen)
    * sonst (stoppe 4 Motoren sync)
  * [2] speed (0 .. +512)
* Länge = 4 und [1] = "m"\
  *direkte Motor Werte vom Sender*
  * [0] Zähler
  * [1] = "m"
  * [2] = motor_links (-512 .. 0 .. +512)
  * [3] = motor_rechts (-512 .. 0 .. +512)
* Länge = 4 und [1] = "j"\
  *direkte Joystick Werte vom Sender*
  * [0] Zähler
  * [1] = "j"
  * [2] = j_fahren (0 .. 128 .. 255)
  * [3] = j_lenken (0 .. 128 .. 255)
* Länge = 2 (Relais schalten)
  * [0] Zähler
  * [1] "0" oder "1"

> [0] Zähler zählt bei geänderten Daten weiter.\
> MQTT Daten werden dauerhaft (100 ms) gesendet und nur wenn [0] Zähler sich ändert, werden diese ausgewertet.

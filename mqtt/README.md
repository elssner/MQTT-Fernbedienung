Diese Seite bei [https://elssner.github.io/MQTT-Fernbedienung/mqtt/](https://elssner.github.io/MQTT-Fernbedienung/mqtt/) öffnen

## MQTT Protokoll
> CSV: mit Semikolon getrennte Strings\
> "1;bt_fw;512"\
> "2;m,-512;512"\
> "3;j;0;255"
> "4;1"

* Länge = 3 (Buttons auf TXT 4.0 Touch Display oder Calliope neigen)
  * [0] Zähler
  * [1] button_id ("bt_..") = 11 Buttons
    * "bt_0", "bt_stop" (stoppe 4 Motoren sync)
    * "bt_fw", "bt_bw" (vorwärts, rückwaärts)
    * "bt_left", "bt_right" (gerade nach links, rechts)
    * "bt_fw_left", "bt_fw_right", "bt_bw_left", "bt_bw_right"
    * "bt_turn_left", "bt_turn_right" (auf der Stelle drehen)
    * sonst (stoppe 4 Motoren sync)
  * [2] speed (0 .. +512)
* Länge = 4 und [1] = "m" (direkte Motor Werte vom Sender)
  * [0] Zähler
  * [1] = "m"
  * [2] = motor_links (-512 .. 0 .. +512)
  * [3] = motor_rechts (-512 .. 0 .. +512)
* Länge = 4 und [1] = "j" (direkte Joystick Werte vom Sender)
  * [0] Zähler
  * [1] = "j"
  * [2] = j_fahren (0 .. 128 .. 255)
  * [3] = j_lenken (0 .. 128 .. 255)
* Länge = 2 (Relais schalten)
  * [0] Zähler
  * [1] "0" oder "1"



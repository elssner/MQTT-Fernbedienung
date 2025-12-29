Diese Seite bei [https://elssner.github.io/MQTT-Fernbedienung/mqtt/](https://elssner.github.io/MQTT-Fernbedienung/mqtt/) öffnen

## MQTT Protokoll
> CSV: mit Semikolon getrennte Strings

* Länge = 3
  * [0] Zähler
  * [1] button_id ("bt_..")
    * "bt_0", "bt_stop" (stoppe 4 Motoren sync)
  * [2] speed (0 .. +512)
* Länge = 4 und [1] = "m"
  * [0] Zähler
  * [1] = "m"
  * [2] = motor_links (-512 .. 0 .. +512)
  * [3] = motor_rechts (-512 .. 0 .. +512)
* Länge = 4 und [1] = "j"
  * [0] Zähler
  * [1] = "j"
  * [2] = j_fahren (0 .. 128 .. 255)
  * [3] = j_lenken (0 .. 128 .. 255)
* Länge = 2
  * [0] Zähler
  * [1] "0" oder "1"



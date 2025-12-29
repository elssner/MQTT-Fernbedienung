Diese Seite bei [https://elssner.github.io/MQTT-Fernbedienung/mqtt/](https://elssner.github.io/MQTT-Fernbedienung/mqtt/) öffnen

## MQTT Protokoll
> CSV: mit Semikolon getrennte Strings

* Länge = 3
  * [0] Zähler
  * [1] button_id
  * [2] speed
* Länge = 4 und [1] = "m"
  * [0] Zähler
  * [1] = "m"
  * [2] = motor_links
  * [3] = motor_rechts

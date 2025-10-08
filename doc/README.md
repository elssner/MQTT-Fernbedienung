
> Diese Seite bei [https://elssner.github.io/MQTT-Fernbedienung/](https://elssner.github.io/MQTT-Fernbedienung/) öffnen

## [Grove WiFi 8266 - IoT for micro:bit and beyond](https://www.cytron.io/p-grove-wifi-8266-iot-for-microbit-and-beyond)

![](GRV-WIFI-8266_Layout.jpg)

### Features

* Based on ESP-12F (ESP8266 MCU) WiFi module
* Serial UART Interface (Baud rate: 115200bps)
* ESP-AT (AT command) firmware v2.2.0
* Grove 4-pin connector (Rx, Tx, Vcc ,Gnd)
* Onboard Reset & Boot switch
* Built-in power LED
* All the pins of the ESP-12F are extended out with clear labels
* 3V - 6V supply input voltage
* 32Mbit built-in SPI Flash
* 802.11 b/g/n protocol (2.4GHz)
* MakeCode extension provided
* CircuitPython libraries provided

### Resources

* [Grove WiFi 8266 datasheet](https://docs.google.com/document/d/1ub3WuRrp1F8QijoHCDjOez6SC1mtG5pQglhiPdeB12k/edit) <!-- ?usp=sharing -->
* [Getting started tutorial (micro:bit)](https://www.cytron.io/tutorial/get-started-with-grove-wifi-8266-on-the-microbit/)
* [MakeCode extension for micro:bit](https://github.com/CytronTechnologies/pxt-esp8266)
* [CircuitPython libraries for Raspberry Pi Pico & RP2040](https://github.com/CytronTechnologies/MAKER-PI-PICO/tree/main/Example%20Code/CircuitPython/IoT)
* [Cytron custom compiled ESP-AT firmware](https://github.com/CytronTechnologies/esp-at-binaries)
* [How to update ESP-AT firmware](https://github.com/CytronTechnologies/esp-at-binaries#how-to-update-the-firmware)
* [Grove WiFi 8266 CAD files](https://drive.google.com/drive/folders/1kfOuKsVLOXPVkPTSarWBtlN2XdDNWKZJ) <!-- ?usp=sharing -->
* [Espressif ESP-AT commands user guide](https://docs.espressif.com/projects/esp-at/en/release-v2.2.0.0_esp8266/)

### weitere Links

* [SparkFun WiFi Module - ESP8266 (4MB Flash)](https://www.sparkfun.com/wifi-module-esp8266-4mb-flash.html)
* [WRL-17146](https://cdn.sparkfun.com/assets/f/e/5/6/f/ESP8266ModuleV2.pdf)
* [ESP8266 NURDspace](https://nurdspace.nl/ESP8266)
* [ESP8266 Instructables Tutorial](https://www.instructables.com/Using-the-ESP8266-module/)

#### AT Commands

* [Basic AT Commands](https://docs.espressif.com/projects/esp-at/en/release-v2.2.0.0_esp8266/AT_Command_Set/Basic_AT_Commands.html)
```
AT+RST: Restart a Module.
ATE0: Echo off
ATE1: Echo on
AT+GMR: Check Version Information.
AT+CMD?: List all AT commands and types supported in current firmware
```

* [Wi-Fi AT Commands](https://docs.espressif.com/projects/esp-at/en/release-v2.2.0.0_esp8266/AT_Command_Set/Wi-Fi_AT_Commands.html)
* [Wi-Fi AT Examples](https://docs.espressif.com/projects/esp-at/en/release-v2.2.0.0_esp8266/AT_Command_Examples/TCP-IP_AT_Examples.html)
```
AT+CWMODE=1: Station mode
AT+CWJAP="SSID","password": Connect to an AP
AT+CWJAP?: Query the AP to which the ESP Station is already connected.
```

* [MQTT AT Commands](https://docs.espressif.com/projects/esp-at/en/release-v2.2.0.0_esp8266/AT_Command_Set/MQTT_AT_Commands.html)
* [MQTT AT Examples](https://docs.espressif.com/projects/esp-at/en/release-v2.2.0.0_esp8266/AT_Command_Examples/MQTT_AT_Examples.html)
```
AT+MQTTUSERCFG=0,1,"client_id","username","password",0,0,"": Set MQTT user configuration
AT+MQTTCONN=0,"192.168.31.113",1883,0: Connect to MQTT Brokers
AT+MQTTCONN?: Query the MQTT broker that ESP devices are connected to.
AT+MQTTPUB=0,"topic","data",1,0: Publish MQTT Messages in string
AT+MQTTSUB=0,"topic",1
AT+MQTTCLEAN=0: Close the MQTT connection and release the resource.
```

## MakeCode

* [ericbusboom/Microbit-Wifi-MQTT](https://github.com/ericbusboom/Microbit-Wifi-MQTT)
* [ESP8266_IoT package](https://github.com/elecfreaks/pxt-esp8266iot)
* [KittenBot WiFi Module (of PowerBrick) based on ESP8266 for microbit](https://github.com/Kittenbot/pxt-kittenwifi)


## [RobotShop](https://eu.robotshop.com/de/products/grove-wifi-8266-iot-microbit-beyond)

### Beschreibung

* Grove WiFi 8266 IoT für micro:bit & Beyond
* Entwickelt für micro:bit (Nicht enthalten)
* Kommt vorinstalliert mit der neuen Espressif ESP-AT Firmware v2.2.0
* Onboard-Reset und Boot-Schalter
* Eingebaute Power-LED
* Versorgungseingangsspannung: 3 - 6 V

Das Grove WiFi 8266 IoT für micro:bit & Beyond wurde entwickelt, um es Ihrem micro:bit (und auch anderen Controllern) zu ermöglichen, Daten über das Internet über das Wi-Fi-Netzwerk zu senden/zu empfangen. Es basiert auf dem ESP-12F-Modul des Ai-Thinker und wird mit der neuen Espressif ESP-AT-Firmware v2.2.0 vorinstalliert.

[Grove WiFi 8266 IoT für micro:bit & Beyond - Datenblatt](https://cdn.robotshop.com/media/c/cyt/rb-cyt-321/pdf/grove-wifi-8266-iot-microbit--beyond-datasheet.pdf)


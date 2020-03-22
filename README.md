## Server Hardware

This is an example about how to create a server using **nodejs** through a Raspberry or Computer, and connected to an Arduino as a slave.

This project have two configurations:

- With a embeded computer using I2C.
- With a computer using FIRMATA protocol with Arduino.

## Embeded computer ##
This solution use a configuration with a Embeded computer using a linux operating system, and the I2C protocol. For this setup, a Raspberry pi is implemented as an example.

- [Download Raspbian Image (Lite Version)](https://www.raspberrypi.org/downloads/raspbian/).
- [BalenaEtcher](https://www.balena.io/).


### Configure wifi ###
(This step is optional, but not required if you use ethernet connection).

Using boot folder:
https://styxit.com/2017/03/14/headless-raspberry-setup.html

Follow this guide for internal configuration:
https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md

### Raspberry pi configurations ###
Inside terminal, use the following commands:
```
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
$ sudo apt install build-essential
$ sudo apt install nodejs
```


### References ###
https://oxygen.protofy.xyz/?fbclid=IwAR0D7q6lnGN5a0y0BUq7o6lQQd52dMpKpabMsKNzyUiXBwRLimnSg43lCMo
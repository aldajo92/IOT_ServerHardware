## Server Hardware

This is an example about how to create a server using **nodejs** through a Raspberry or Computer, and connected to an Arduino as a slave.

This project have two configurations:

- With a embeded computer using Serial.

## Embeded computer ##
This solution use a configuration with a Embeded computer using a linux operating system, and the Serial protocol. For this setup, a Raspberry pi is implemented as an example.

- [Download Raspbian Image (Lite Version)](https://www.raspberrypi.org/downloads/raspbian/).
- [BalenaEtcher](https://www.balena.io/).


### Configure wifi ###
(This step is optional, but not required if you use ethernet connection).

Using boot folder:
https://styxit.com/2017/03/14/headless-raspberry-setup.html

Follow this guide for internal configuration:
https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md

### Raspberry pi configurations ###
Inside terminal, add the following commands:
```
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
$ sudo apt install build-essential
$ sudo apt install nodejs
$ sudo apt git
```

### Usage ###
Follow [index.js](server/index.js) as the main example. Use [SerialPort.js](server/SerialPort.js) for your own implementation.

An arduino code [serial_mock.ino](/arduino/serial_mock/serial_mock.ino) is provided for mock data and test your code.

### How to run ###
```
$ git clone https://github.com/aldajo92/server_hardware.git
$ cd server_hardware/server
$ npm npm run run-dev
```

### References ###
- [Serial Port For Javascript](https://serialport.io/docs/guide-about)
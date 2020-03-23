var SerialPort = require('serialport')
var events = require('events')

const Readline = require('@serialport/parser-readline')
var eventEmitter = new events.EventEmitter()
var serialPort;

function initSerialPort(params, callbackOpen, callbackError) {
    var { portName, baudRate } = params
    serialPort = new SerialPort(portName, { baudRate }, callbackError)

    serialPort.on('open', callbackOpen)

    serialPort
        .pipe(new Readline({ delimiter: '\n\r' }))
        .on('data', (data) => {
            eventEmitter.emit('serialport-data', data.toString())
        })
}

function closeSerialPort() {
    serialPort.close()
}

function addCallback(callback) {
    eventEmitter.on('serialport-data', callback)
}

module.exports = {
    initSerialPort,
    closeSerialPort,
    addCallback
}
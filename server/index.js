var sp = require('./SerialPort')

const portName = "/dev/cu.usbmodem14401"
const baudRate = 9600

const portParams = { portName, baudRate }

sp.initSerialPort(portParams, () => { console.log("open!") }, errorport)
sp.addCallback((data) => {
    console.log(data);
})

setTimeout(() => {
    sp.closeSerialPort();
}, 5000);

var errorport = (err) => {
    if (err) {
        console.log('Error: ', err.message)
        process.exit()
    }
}
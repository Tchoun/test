datalogger.includeTimestamp(FlashLogTimeStampFormat.Minutes)
datalogger.mirrorToSerial(true)
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P1,
    true,
    false,
    true
    )
    datalogger.log(datalogger.createCV("Temperature", dht11_dht22.readData(dataType.temperature)))
    basic.pause(30000)
})

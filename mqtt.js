var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://server');

client.on('connect', () => {
    console.log('connected');
    client.subscribe('/temperature/dummy/#');
});

client.on('message', (topic, message) => {
    try {
        let data = JSON.parse(message);
        console.log(new Date(), topic, data);
    } catch(e) {
        console.log(new Date(), topic, message.toString());
    }
});


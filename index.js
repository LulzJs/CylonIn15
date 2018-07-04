var Cylon = require('cylon');

Cylon.robot({
  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/ttyACM0' }
  },

  devices: {
    led: { driver: 'led', pin: 12 }
  },

  work: function(my) {
    var socket = require('socket.io-client')('http://localhost:3000');
    socket.on('chat message', function(msg){
      if(msg.text == "on")
        my.led.turnOn();
      if(msg.text == "off")
        my.led.turnOff();
    });
  }
}).start();

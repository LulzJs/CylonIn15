var Cylon = require('cylon');

Cylon.robot({
  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/ttyACM0' }
  },

  devices: {
    led: { driver: 'led', pin: 12 }
  },

  work: function(my) {
    every((1).second(), my.led.toggle);
  }
}).start();

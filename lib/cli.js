'use strict';
var argv  = process.argv;
var chest = require('./main');

if(argv[2] !== void 0) {
  switch (argv[2]) {
  case 'usage':
    if (argv.length === 3) {
      chest.usage();
      break;
    }
  case 'put':
    if (argv.length > 3) {
      argv.splice(0, 3);
      chest.put(argv);
      break;
    }
  case 'take':
    if (argv.length > 3) {
      argv.splice(0, 3);
      chest.take(argv);
      break;
    }
  case 'open':
    if (argv.length === 3) {
      chest.open();
      break;
    }
  case 'list':
    if (argv.length === 3) {
      chest.list();
      break;
    }
  case 'install':
    if (argv.length === 3) {
      chest.install();
      break;
    }
  case 'boost':
    if (argv.length === 3) {
      chest.open();
      chest.install();
      break;
    }
  case 'close':
    if (argv.length === 3) {
      chest.close();
      break;
    }
  default:
    var message = 'Unrecognized command line argument: ';
    message += argv[2];
    message += ' ( see: \'chest usage\' )';
    console.log(message);
    break;
  }
} else {
  console.log('@see \'chest usage\'\n');
}

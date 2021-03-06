var fs       = require('fs'),
    exec = require('child_process').exec,
    async   = require('async'),
    config   = require('../config'),
    commands = {
      'bower.json': 'bower install',
      'component.json': 'component install',
      'package.json': 'npm install'
    };

module.exports = function () {
  var paths = config.paths;

  if (!fs.existsSync(paths.chest)) {
    console.error('Chest not found');
    return;
  }
  var files = fs.readdirSync(paths.chest);
  if (files.length === 0) {
    console.log('Chest is blank');
  }
  async.forEach(files, function (file, done) {
    if (commands[file] === void 0) {
      done();
      return;
    }
    exec(commands[file], function(err, stdout, stderr) {
      if (!err) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr)
      } else {
        console.log(err);
        console.log(err.code);
        console.log(err.signal);
      }
      done();
      return;
    });
  }, function (err) {
    if (err !== void 0) {
      console.error(err);
    }
  });
};

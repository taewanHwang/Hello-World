process.on('exit', function () {
  process.nextTick(function () {
   console.log('This will not run');
  });
  console.log('About to exit.');
});

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
});

setTimeout(function () {
  console.log('This will still run.');
}, 500);

// Intentionally cause an exception, but don't catch it.
//nonexistentFunc();
console.log('This will not run.');

// Start reading from stdin so we don't exit.
process.stdin.resume();

process.on('SIGINT', function () {
  console.log('Got SIGINT.  Press Control-D to exit.');
});

console.log('Starting directory: ' + process.cwd());
try {
  process.chdir('/tmp');
  console.log('New directory: ' + process.cwd());
}
catch (err) {
  console.log('chdir: ' + err);
}

console.log('Current directory: ' + process.cwd());
//console.log('Current directory: ' + process.env);

//process.exit(1);

if (process.getgid) {
  console.log('Current gid: ' + process.getgid());
}
console.log(process.versions);

var util = require('util');

console.log(util.inspect(util, true, null));
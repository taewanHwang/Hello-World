var circle = require('./circle.js');
console.log( 'The area of a circle of radius 4 is '
           + circle.area(4));
var a = require('./delayed');
a.on('ready', function() {
  console.log('module a is ready');
});

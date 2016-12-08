let Watch = require('./Watch');
let Tablet = require('./Tablet');
let extend = require('./extend');

function SmartWatch() {
  this.bodyPart = null;
}
extend(SmartWatch, Watch);
extend(SmartWatch, Tablet);

module.exports = SmartWatch;
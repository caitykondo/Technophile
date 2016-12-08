let Phone = require('./Phone');
let Tablet = require('./Tablet');
let GameConsole = require('./GameConsole');
let WebBrowser = require('./WebBrowser');
let extend = require('./extend');

function SmartPhone(phoneNumber) {
  this.phoneNumber = phoneNumber;
  this.systemName = 'Smart Phone';
}
extend(SmartPhone, Phone);
extend(SmartPhone, Tablet);
extend(SmartPhone, GameConsole);
extend(SmartPhone, WebBrowser);

module.exports = SmartPhone;
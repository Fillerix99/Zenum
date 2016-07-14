//Requires and Vars
const notifier = require('node-notifier');
//
module.exports = {
    notify: function(text) {
      notifier.notify({
      'title': 'Zenum Wallet',
      'message': text
});
    }
};

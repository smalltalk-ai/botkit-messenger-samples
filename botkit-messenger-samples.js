'use strict';

var MessengerSamples = function(controller, bot, config) {
  config = config || {};
  var
    theThis = this,
    prefix = config.prefix || 'sample',
    hearPattern = '^' + prefix + ':',
    regex = new RegExp(hearPattern, 'i'),
    help = [
      'account linking',
      'audio',
      'button',
      'file',
      'generic',
      'gif',
      'image',
      'image:large',
      'image:tall',
      'list',
      'list:compact',
      'quick reply',
      'read receipt',
      'receipt',
      'typing on',
      'typing off',
      'video'
    ]
  ;

  controller.hears(hearPattern, 'message_received', function(bot, message) {
    var
      request = message.text.replace(regex, ''),
      reply = request
    ;
    console.log(message);
    switch (request) {
      case 'help':
        reply = help.map(function(item) {
          return prefix + ':' + item;
        }).join('\n');
        break;
      case 'image':

        break;
      case 'image:large':

        break;
      case 'image:tall':

        break;
      case 'quick reply':
        reply = theThis.quickReply();
        break;
      default:
        // handle JSON samples
        if (reply.toLowerCase().startsWith('json:')) {
          try {
            var
              jsonString = reply.replace(/^json:/i, ''),
              json = JSON.parse(jsonString)
            ;
            reply = json;
          }
          catch(ex) {
            // payload is not JSON, so leave as string
          }
        }
    }
    bot.reply(message, reply);
  });
};

MessengerSamples.prototype.quickReply = require('./samples/quick_reply.js');

module.exports = MessengerSamples;

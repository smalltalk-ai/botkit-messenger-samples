'use strict';

var MessengerSamples = function(controller, bot, config) {
  config = config || {};
  var
    prefix = config.prefix || 'sample',
    hearPattern = '^' + prefix + ':',
    regex = new RegExp(hearPattern, 'i'),
    requests = [
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
      request = message.text.replace(regex, '')
    ;
    console.log(message);
    switch (request) {
      case 'help':
        var reply = requests.map(function(item) {
          return prefix + ':' + item;
        }).join('\n');
        return bot.reply(message, reply);
      case 'image':

        break;
      case 'image:large':

        break;
      case 'image:tall':

        break;
      default:

    }
    bot.reply(message, request);
  });
};

module.exports = MessengerSamples;

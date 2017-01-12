'use strict';
const
  path = require('path'),
  express = require('express')
;

var MessengerSamples = function(controller, bot, config) {
  if (!controller.webserver) {
    console.error('botkit-messenger-samples: controller.webserver is not set');
    process.exit(1);
  }
  config = config || {};
  if (!config.serverUrl) {
    console.log('botkit-messenger-samples: config.serverUrl not set, ' +
      'so messages with assets will not work properly');
    config.serverUrl = 'http://' + controller.config.hostname +
      (controller.config.port && controller.config.port !== '80' ?
        ':' + controller.config.port :
        ''
      )
    ;
  }
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
  theThis.SERVER_URL = config.serverUrl + '/messenger-samples';

  // setup static folder for sample assets
  controller.webserver.use('/messenger-samples', express.static(path.join(__dirname, 'assets')));

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
      case 'account linking':
      case 'audio':
      case 'button':
      case 'file':
      case 'generic':
      case 'gif':
      case 'image':
        reply = theThis.image();
        break;
      case 'image:large':
      case 'image:tall':
      case 'list':
      case 'list:compact':
        break;
      case 'quick reply':
        reply = theThis.quickReply();
        break;
      case 'read receipt':
      case 'receipt':
      case 'typing on':
        reply = theThis.typingOn();
        break;
      case 'typing off':
        reply = theThis.typingOff();
        break;
      case 'video':
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
MessengerSamples.prototype.typingOn = require('./samples/typing_on.js');
MessengerSamples.prototype.typingOff = require('./samples/typing_off.js');
MessengerSamples.prototype.image = require('./samples/image_message.js');

module.exports = MessengerSamples;

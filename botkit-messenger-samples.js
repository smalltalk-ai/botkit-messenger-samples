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
      //'account linking',
      'audio',
      'button',
      'file',
      'generic',
      'gif',
      'image',
      'image:tall',
      'image:wide',
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

    switch (request) {
      case 'help':
        reply = help.map(function(item) {
          return prefix + ':' + item;
        }).join('\n');
        break;
      case 'account linking':
      case 'audio':
        reply = theThis.audio();
        break;
      case 'button':
        reply = theThis.button();
        break;
      case 'file':
        reply = theThis.file();
        break;
      case 'generic':
        reply = theThis.genericTemplate();
        break;
      case 'gif':
        reply = theThis.gif();
        break;
      case 'image':
        reply = theThis.image();
        break;
      case 'image:tall':
        reply = theThis.imageTall();
        break;
      case 'image:wide':
        reply = theThis.imageWide();
        break;
      case 'list':
        reply = theThis.list();
        break;
      case 'list:compact':
        reply = theThis.list('compact');
        break;
      case 'quick reply':
        reply = theThis.quickReply();
        break;
      case 'read receipt':
        reply = theThis.readReceipt();
        break;
      case 'receipt':
        reply = theThis.receipt();
        break;
      case 'typing on':
        reply = theThis.typingOn();
        break;
      case 'typing off':
        reply = theThis.typingOff();
        break;
      case 'video':
        reply = theThis.video();
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

MessengerSamples.prototype.audio = require('./samples/audio_message.js');
MessengerSamples.prototype.button = require('./samples/button_message.js');
MessengerSamples.prototype.file = require('./samples/file_message.js');
MessengerSamples.prototype.genericTemplate = require('./samples/generic_message.js');
MessengerSamples.prototype.gif = require('./samples/gif_message.js');
MessengerSamples.prototype.image = require('./samples/image_message.js');
MessengerSamples.prototype.imageTall = require('./samples/image_tall_message.js');
MessengerSamples.prototype.imageWide = require('./samples/image_wide_message.js');
MessengerSamples.prototype.list = require('./samples/list_message.js');
MessengerSamples.prototype.quickReply = require('./samples/quick_reply.js');
MessengerSamples.prototype.readReceipt = require('./samples/read_receipt.js');
MessengerSamples.prototype.receipt = require('./samples/receipt_message.js');
MessengerSamples.prototype.typingOn = require('./samples/typing_on.js');
MessengerSamples.prototype.typingOff = require('./samples/typing_off.js');
MessengerSamples.prototype.video = require('./samples/video_message.js');

module.exports = MessengerSamples;

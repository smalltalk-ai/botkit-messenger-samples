'use strict';
const path = require('path');
const { forEachSeries } = require('p-iteration');
const express = require('express');

const MessengerSamples = function(controller, bot, config) {
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
  const
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
    ],
    assetsPath = '/messenger-samples-assets',
    cb = config.replyCb
  ;
  theThis.SERVER_URL = config.serverUrl + assetsPath;

  // setup static folder for sample assets
  controller.webserver.use(assetsPath, express.static(path.join(__dirname, 'assets')));

  controller.hears(hearPattern, 'message, message_received', async(bot, message) => {
    const request = message.text.replace(regex, '');
    let replies = request;

    switch (request) {
    case 'help':
      replies = help.map(function(item) {
        return prefix + ':' + item;
      }).join('\n');
      break;
    case 'account linking':
    case 'audio':
      replies = theThis.audio();
      break;
    case 'button':
      replies = theThis.button();
      break;
    case 'file':
      replies = theThis.file();
      break;
    case 'generic':
      replies = theThis.genericTemplate();
      break;
    case 'gif':
      replies = theThis.gif();
      break;
    case 'image':
      replies = theThis.image();
      break;
    case 'image:tall':
      replies = theThis.imageTall();
      break;
    case 'image:wide':
      replies = theThis.imageWide();
      break;
    case 'list':
      replies = theThis.list();
      break;
    case 'list:compact':
      replies = theThis.list('compact');
      break;
    case 'quick reply':
      replies = theThis.quickReply();
      break;
    case 'read receipt':
      replies = theThis.readReceipt();
      break;
    case 'receipt':
      replies = theThis.receipt();
      break;
    case 'typing on':
      replies = theThis.typingOn();
      break;
    case 'typing off':
      replies = theThis.typingOff();
      break;
    case 'video':
      replies = theThis.video();
      break;
    default:
      // handle JSON samples
      if (replies.toLowerCase().startsWith('json:')) {
        try {
          const
            jsonString = replies.replace(/^json:/i, ''),
            json = JSON.parse(jsonString)
          ;
          replies = json;
        }
        catch(ex) {
          // payload is not JSON, so leave as string
        }
      }
    }
    // check if json is one message or an array
    if (!Array.isArray(replies)) {
      replies = [].concat(replies);
    }
    // send reply; only include cb is last message
    await forEachSeries(replies, async (reply, idx) => {
      await bot.reply(message, reply, idx !== replies.length - 1 ? null : cb);
    });
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

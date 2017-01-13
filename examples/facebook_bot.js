'use strict';
// see: https://github.com/howdyai/botkit/blob/master/readme-facebook.md

var Botkit = require('botkit');
var MessengerSamples = require('botkit-messenger-samples');
var controller = Botkit.facebookbot({
  access_token: process.env.access_token,
  verify_token: process.env.verify_token,
});

var bot = controller.spawn({
});

// if you are already using Express, you can use your own server instance...
// see "Use BotKit with an Express web server"
controller.setupWebserver(process.env.port,function(err,webserver) {
  controller.createWebhookEndpoints(controller.webserver, bot, function() {
    console.log('This bot is online!!!');
  });

  // after the controller.webserver is set (in setupWebserver)
  // setup to receive "sample:" messages from Facebook Messenger
  // and send back replies
  // "send: sample:help" for a list of supported samples
  var messengerSamples = new MessengerSamples(controller, bot{
    serverUrl: 'https://_your_server_' // use localtunnel or ngrok for testing
    //, prefix: 'example' // default: sample
  });
});

// this is triggered when a user clicks the send-to-messenger plugin
controller.on('facebook_optin', function(bot, message) {
  bot.reply(message, 'Welcome to my app!');
});

// user said hello
controller.hears(['hello'], 'message_received', function(bot, message) {
  bot.reply(message, 'Hey there.');
});

controller.hears(['cookies'], 'message_received', function(bot, message) {
  bot.startConversation(message, function(err, convo) {
    convo.say('Did someone say cookies!?!!');
    convo.ask('What is your favorite type of cookie?', function(response, convo) {
      convo.say('Golly, I love ' + response.text + ' too!!!');
      convo.next();
    });
  });
});

# botkit-messenger-samples

Module to receive sample messages of most types from a Facebook Messenger chatbot.

For usage sample code see `examples/sample_bot.js`

## Steps for using lib

Install library from npm
```sh
npm install --save botkit-messenger-samples
```

Import Library
```js
const MessengerSamples = require('botkit-messenger-samples');
```

Init the Library

```js
controller.setupWebserver(process.env.port,function(err, webserver) {
  var messengerSamples = new MessengerSamples(controller, bot, {
    // serverUrl (e.g., https://my.domain.com)
    // needed to server up sample images
    serverUrl: process.env.serverUrl
    //,
  });
});
```

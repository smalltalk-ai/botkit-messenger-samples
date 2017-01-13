# botkit-messenger-samples

[![npm](https://img.shields.io/npm/v/botkit-messenger-samples.svg)](https://www.npmjs.com/package/botkit-messenger-samples)

Module to receive sample messages of most types from a Facebook Messenger chatbot.

Takes the idea of sample message types from the Facebook [Messenger Platform Sample](https://github.com/fbsamples/messenger-platform-samples#readme) project and moves it into a module for [Botkit](https://github.com/howdyai/botkit#readme).

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

## Available Commands in Messenger

| Command                                                         | Results                                                                                                                                                                               |
|-----------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `sample:help`                                                   | text list of available commands                                                                                                                                                       |
| `sample:audio`                                                  | an [Audio Attachment]( https://developers.facebook.com/docs/messenger-platform/send-api-reference/audio-attachment) embedded in a player                                              |
| `sample:button`                                                 | a [Button Template](https://developers.facebook.com/docs/messenger-platform/send-api-reference/button-template)                                                                       |
| `sample:file`                                                   | a text [File Attachment](https://developers.facebook.com/docs/messenger-platform/send-api-reference/file-attachment)                                                                  |
| `sample:generic`                                                | a [Generic Template](https://developers.facebook.com/docs/messenger-platform/send-api-reference/generic-template)                                                                     |
| `sample:gif`                                                    | an animated GIF [Image Attachment](https://developers.facebook.com/docs/messenger-platform/send-api-reference/image-attachment)                                                       |
| `sample:image`                                                  | an [Image Attachment](https://developers.facebook.com/docs/messenger-platform/send-api-reference/image-attachment)                                                                    |
| `sample:image:tall`                                             | a very tall [Image Attachment](https://developers.facebook.com/docs/messenger-platform/send-api-reference/image-attachment)                                                           |
| `sample:image:wide`                                             | a very wide [Image Attachment](https://developers.facebook.com/docs/messenger-platform/send-api-reference/image-attachment)                                                           |
| `sample:list`                                                   | a [List Template](https://developers.facebook.com/docs/messenger-platform/send-api-reference/list-template) `top_element_style:large` <br>*note*: on web, it is rendered as `compact` |
| `sample:list:compact`                                           | a [List Template](https://developers.facebook.com/docs/messenger-platform/send-api-reference/list-template) `top_element_style:compact`                                               |
| `sample:quick reply`                                            | a text message with [Quick Replies](https://developers.facebook.com/docs/messenger-platform/send-api-reference/quick-replies)                                                         |
| `sample:read receipt`                                           | the `mark_seen` [Sender Action](https://developers.facebook.com/docs/messenger-platform/send-api-reference/sender-actions#sender_action)                                              |
| `sample:receipt`                                                | a [Receipt Template](https://developers.facebook.com/docs/messenger-platform/send-api-reference/receipt-template)                                                                     |
| `sample:typing on`                                              | the `typing_on` [Sender Action](https://developers.facebook.com/docs/messenger-platform/send-api-reference/sender-actions#sender_action)                                              |
| `sample:typing off`                                             | the `typing_off` [Sender Action](https://developers.facebook.com/docs/messenger-platform/send-api-reference/sender-actions#sender_action)                                             |
| `sample:video`                                                  | a [Video Attachment](https://developers.facebook.com/docs/messenger-platform/send-api-reference/video-attachment) embedded in a player                                                |
| <pre>`sample:json:{`<br>`  "text": "Hello World!"`<br>`}`</pre> | any message type; after the `sample:json:` add any valid message, see [Send API Reference](https://developers.facebook.com/docs/messenger-platform/send-api-reference)                |

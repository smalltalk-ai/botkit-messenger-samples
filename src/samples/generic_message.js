/* jshint node: true */
'use strict';

/*
 * Get sample Generic Template message in Facebook format.
 *
 */
module.exports = function() {
  return {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'generic',
        elements: [
          {
            title: 'rift',
            subtitle: 'Next-generation virtual reality',
            item_url: 'https://www.oculus.com/en-us/rift/',
            image_url: `${this.SERVER_URL}/rift.png`,
            buttons: [
              {
                type: 'web_url',
                url: 'https://www.oculus.com/en-us/rift/',
                title: 'Open Web URL'
              },
              {
                type: 'postback',
                title: 'Call Postback',
                payload: 'Payload for first bubble'
              }
            ]
          },
          {
            title: 'touch',
            subtitle: 'Your Hands, Now in VR',
            item_url: 'https://www.oculus.com/en-us/touch/',
            image_url: `${this.SERVER_URL}/touch.png`,
            buttons: [
              {
                type: 'web_url',
                url: 'https://www.oculus.com/en-us/touch/',
                title: 'Open Web URL'
              },
              {
                type: 'postback',
                title: 'Call Postback',
                payload: 'Payload for second bubble'
              }
            ]
          }
        ]
      }
    }
  };
};

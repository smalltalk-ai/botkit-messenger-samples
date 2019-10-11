/* jshint node: true */
'use strict';

/*
 * Get sample Buttom Template message in Facebook format.
 */
module.exports = function() {
  return {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text: 'This is test text',
        buttons:[{
          type: 'web_url',
          url: 'https://www.oculus.com/en-us/rift/',
          title: 'Open Web URL'
        }, {
          type: 'postback',
          title: 'Trigger Postback',
          payload: 'DEVELOPED_DEFINED_PAYLOAD'
        }, {
          type: 'phone_number',
          title: 'Call Phone Number',
          payload: '+16505551234'
        }]
      }
    }
  };
};

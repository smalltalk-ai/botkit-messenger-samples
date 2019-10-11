/* jshint node: true */
'use strict';

/*
 * Get sample List Template message in Facebook format.
 *
 */
module.exports = function(size) {
  const
    isCompact = size === 'compact',
    allElements = [
      {
        title: 'Classic T-Shirt Collection',
        image_url: `${this.SERVER_URL}/tshirts.png`,
        subtitle: 'See all our colors',
        default_action: {
          type: 'web_url',
          url: 'https://peterssendreceiveapp.ngrok.io/shop_collection'
        },
        buttons: [
          {
            title: 'View',
            type: 'web_url',
            url: 'https://peterssendreceiveapp.ngrok.io/collection'
          }
        ]
      },
      {
        title: 'Classic White T-Shirt',
        image_url: `${this.SERVER_URL}/tshirt-white.png`,
        subtitle: '100% Cotton, 200% Comfortable',
        default_action: {
          type: 'web_url',
          url: 'https://www.google.com/#q=white+tshirt'
        },
        buttons: [
          {
            title: 'Buy',
            type: 'web_url',
            url: 'https://www.google.com/#q=white+tshirt&tbm=shop'
          }
        ]
      },
      {
        title: 'Classic Blue T-Shirt',
        image_url: `${this.SERVER_URL}/tshirt-blue.png`,
        subtitle: '100% Cotton, 200% Comfortable',
        default_action: {
          type: 'web_url',
          url: 'https://www.google.com/#q=blue+tshirt'
        },
        buttons: [
          {
            title: 'Buy',
            type: 'web_url',
            url: 'https://www.google.com/#q=blue+tshirt&tbm=shop'
          }
        ]
      },
      {
        title: 'Classic Black T-Shirt',
        image_url: `${this.SERVER_URL}/tshirt-black.png`,
        subtitle: '100% Cotton, 200% Comfortable',
        default_action: {
          type: 'web_url',
          url: 'https://www.google.com/#q=black+tshirt'
        },
        buttons: [
          {
            title: 'Buy',
            type: 'web_url',
            url: 'https://www.google.com/#q=black+tshirt&tbm=shop'
          }
        ]
      },
      {
        title: 'Classic Gray T-Shirt',
        image_url: `${this.SERVER_URL}/tshirt-grey.png`,
        subtitle: '100% Cotton, 200% Comfortable',
        default_action: {
          type: 'web_url',
          url: 'https://www.google.com/#q=grey+tshirt'
        },
        buttons: [
          {
            title: 'Buy',
            type: 'web_url',
            url: 'https://www.google.com/#q=grey+tshirt&tbm=shop'
          }
        ]
      }
    ],
    elements = allElements.slice(isCompact ? 1 : 0, isCompact ? 5 : 4),
    message = {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'list',
          elements,
          buttons: [
            {
              title: 'View More',
              type: 'postback',
              payload: 'payload'
            }
          ]
        }
      }
    }
  ;
  // only add the top_element_style if compact
  if (isCompact) {
    message.attachment.payload.top_element_style = 'compact';
  }
  return message;
};

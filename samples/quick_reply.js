/* jshint node: true */
'use strict';

/*
 * Get sample quick reply message in Facebook format.
 *
 */
module.exports = function () {
  return {
    text: 'What\'s your favorite movie genre?',
    metadata: 'DEVELOPER_DEFINED_METADATA',
    quick_replies: [
      {
        'content_type':'text',
        'title':'Action',
        'payload':'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_ACTION'
      },
      {
        'content_type':'text',
        'title':'Comedy',
        'payload':'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_COMEDY'
      },
      {
        'content_type':'text',
        'title':'Drama',
        'payload':'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_DRAMA'
      }
    ]
  };
};

/* jshint node: true */
'use strict';

/*
 * Get sample gif message in Facebook format.
 *
 */
module.exports = function() {
  return {
    attachment: {
      type: 'image',
      payload: {
        url: `${this.SERVER_URL}/instagram_logo.gif`
      }
    }
  };
};

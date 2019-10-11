/* jshint node: true */
'use strict';

/*
 * Get sample wide image message in Facebook format.
 *
 */
module.exports = function() {
  return {
    attachment: {
      type: 'image',
      payload: {
        url: `${this.SERVER_URL}/kitten.jpg`
      }
    }
  };
};

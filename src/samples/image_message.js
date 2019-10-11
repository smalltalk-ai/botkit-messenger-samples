/* jshint node: true */
'use strict';

/*
 * Get sample image message in Facebook format.
 *
 */
module.exports = function() {
  return {
    attachment: {
      type: 'image',
      payload: {
        url: `${this.SERVER_URL}/rift.png`,
        is_reusable: true
      }
    }
  };
};

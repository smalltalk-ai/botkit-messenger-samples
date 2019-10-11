/* jshint node: true */
'use strict';

/*
 * Get sample file message in Facebook format.
 *
 */
module.exports = function() {
  return {
    attachment: {
      type: 'file',
      payload: {
        url: `${this.SERVER_URL}/test.txt`
      }
    }
  };
};

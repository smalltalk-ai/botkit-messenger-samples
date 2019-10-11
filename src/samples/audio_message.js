/* jshint node: true */
'use strict';

/*
 * Get sample audio message in Facebook format.
 */
module.exports = function() {
  return {
    attachment: {
      type: 'audio',
      payload: {
        url: `${this.SERVER_URL}/sample.mp3`,
        is_reusable: true
      }
    }
  };
};

/* jshint node: true */
'use strict';

/*
 * Get sample video message in Facebook format.
 */
module.exports = function() {
  return {
    attachment: {
      type: 'video',
      payload: {
        url: `${this.SERVER_URL}/nature.mp4`,
        is_reusable: true
      }
    }
  };
};

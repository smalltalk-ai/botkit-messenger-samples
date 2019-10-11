/* jshint node: true */
'use strict';

/*
 * Get sample read receipt in Facebook format.
 *
 */
module.exports = function () {
  return {
    sender_action: 'mark_seen'
  };
};

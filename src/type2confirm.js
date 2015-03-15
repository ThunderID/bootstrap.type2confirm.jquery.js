/*
 * 
 * 
 *
 * Copyright (c) 2015 Erick Mo
 * Licensed under the MIT license.
 */
(function ($) {
  $.type2confirm = function (options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.type2confirm.options, options);
    // Return the name of your plugin plus a punctuation character.
    return 'type2confirm' + options.punctuation;
  };

  // Default options.
  $.type2confirm.options = {
    punctuation: '.'
  };
}(jQuery));

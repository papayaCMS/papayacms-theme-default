/**
* papaya Svg Urls
*
* Captures img elements with
*/
(function($) {

  var svgSupport = (
    !!document.createElementNS &&
    !!document.createElementNS('http://www.w3.org/2000/svg', "svg").createSVGRect
  );

  var imageSources = {

    options : {
      'svg' : ''
    },

    setUp : function (element, options) {
      this.options = $.extend(this.options, options);
      if (svgSupport && options.svg != '') {
        element.attr('src', options.svg);
      }
    }

  };

  /**
   * Method to attach an click event to element that opens a popup
   */
  $.fn.papayaImageSources = function(options) {
    return this.each(
      function() {
        var instance = $.extend(true, {}, imageSources);
        instance.setUp($(this), $.extend({}, options, { svg : $(this).data('srcSvg') }));
      }
    );
  };
})(jQuery);

jQuery(document).ready(
  function() {
    jQuery('img[data-src-svg]').papayaImageSources();
  }
);
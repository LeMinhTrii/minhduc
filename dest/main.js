(function ($) {
  $(function () {
    //on DOM ready
    $(".scroller").simplyScroll({
      customClass: "vert",
      orientation: "vertical",
      auto: true,
      manualMode: "loop",
      speed: 1,
    });
  });
})(jQuery);

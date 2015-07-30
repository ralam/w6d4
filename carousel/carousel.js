(function($) {
  $.Carousel = function (el) {
    this.$el = $(el);
    this.activeIdx = 0;
    this.$el.$(':first-child').addClass('active');
  };

  $.fn.carousel = function () {
    return this.each(function () {
      new $.Carousel(this);
    });
  };

})(jQuery);

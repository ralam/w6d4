(function($) {
  $.Carousel = function (el) {
    this.$el = $(el);
    this.activeIdx = 0;
    this.$items = $(this.$el.children()[0]);
    this.$el.on("click", "a.slide-left", this.slideLeft.bind(this));
    this.$el.on("click", "a.slide-right", this.slideRight.bind(this));
    var $firstChild = $(this.$items.children()[0]);
    $firstChild.addClass('active');
  };

  $.fn.carousel = function () {
    return this.each(function () {
      new $.Carousel(this);
    });
  };

  $.Carousel.prototype.slide = function(dir) {
    var $oldImage = $(this.$items.children()[this.activeIdx]);
    if (dir === -1 && this.activeIdx === 0) {
      this.activeIdx = this.$items.children().length-1;
    }
    else if (dir === 1 && this.activeIdx === this.$items.children().length-1) {
      this.activeIdx = 0;
    }
    else {
      this.activeIdx += dir;
    }
    var $newImage = $(this.$items.children()[this.activeIdx]);

    $oldImage.removeClass();

    if (dir === 1) {
      $newImage.addClass('active right');
    } else {
      $newImage.addClass('active left');
    }
    setTimeout(function () {
      $newImage.removeClass('right left');
    }, 0);
    $newImage.one("transitionend", function () {

    });

  };

  $.Carousel.prototype.slideLeft = function() {
    this.slide(-1);
  };

  $.Carousel.prototype.slideRight = function() {
    this.slide(1);
  };

})(jQuery);

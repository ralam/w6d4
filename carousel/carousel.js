(function($) {
  $.Carousel = function (el) {
    this.$el = $(el);
    this.activeIdx = 0;
    this.$items = $(this.$el.children()[0]);
    this.$el.on("click", "a.slide-left", this.slideLeft.bind(this));
    this.$el.on("click", "a.slide-right", this.slideRight.bind(this));
    var $firstChild = $(this.$items.children()[0]);
    $firstChild.addClass('active');
    this.transitioning = false;
  };

  $.fn.carousel = function () {
    return this.each(function () {
      new $.Carousel(this);
    });
  };

  $.Carousel.prototype.slide = function(dir) {
    if (this.transitioning === true) {
      return;
    }

    this.transitioning = true;
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


    if (dir === 1) {
      $oldImage.addClass('left');
      $newImage.addClass('active right');
    } else {
      $oldImage.addClass('right');
      $newImage.addClass('active left');
    }

    var that = this;

    setTimeout(function () {
      $newImage.removeClass('right left');
    }, 0);
    $oldImage.one("transitionend", function () {
      $oldImage.removeClass();
      that.transitioning = false;
    });

  };

  $.Carousel.prototype.slideLeft = function() {
    this.slide(-1);
  };

  $.Carousel.prototype.slideRight = function() {
    this.slide(1);
  };

})(jQuery);

( function ($) {

  $.Thumbnails = function (el) {
    this.$el = $(el);
    this.$gutter = $(this.$el.find(".gutter-images")[0]);
    this.$images = this.$gutter.children();
    this.gutterIdx = 0;
    this.fillGutter();
    this.$activeImage = $(this.$images[0]);
    this.activate(this.$activeImage);
    this.$el.on("click", ".gutter-images img", this.clickHandler.bind(this));
    this.$el.on("mouseenter", ".gutter-images img", this.enterHandler.bind(this));
    this.$el.on("mouseleave", ".gutter-images img", this.leaveHandler.bind(this));
    this.$el.on("click", "a.nav:last-of-type", this.rightHandler.bind(this));
    this.$el.on("click", "a.nav:first-of-type", this.leftHandler.bind(this));
  };

  $.fn.thumbnails = function () {
    return this.each(function () {
      new $.Thumbnails(this);
    });
  };

  $.Thumbnails.prototype.leftHandler = function (event) {
    event.preventDefault();
    this.gutterIdx -= 1;
    this.fillGutter();
  };

  $.Thumbnails.prototype.rightHandler = function (event) {
    event.preventDefault();
    this.gutterIdx += 1;
    this.fillGutter();
  };

  $.Thumbnails.prototype.clickHandler = function (event) {
    var $target = $(event.currentTarget);
    this.$activeImage = $target;
    this.activate($target);
  };

  $.Thumbnails.prototype.enterHandler = function (event) {
    var $target = $(event.currentTarget);
    this.activate($target);
  };

  $.Thumbnails.prototype.leaveHandler = function (event) {
    this.activate(this.$activeImage);
  };

  $.Thumbnails.prototype.fillGutter = function () {
    if (this.gutterIdx < 0) {
      this.gutterIdx = 0;
      return;
    } else if (this.gutterIdx > this.$images.length-5) {
      this.gutterIdx = this.$images.length-5
      return;
    }
    this.$gutter.empty();
    for (var i = this.gutterIdx; i < this.gutterIdx + 5; i++) {
      this.$gutter.append(this.$images[i]);
    }
  };

  $.Thumbnails.prototype.activate = function ($img) {
    var $largeImage = $img.clone();
    var $activeDiv = $('div.active');

    $activeDiv.empty();

    $activeDiv.append($largeImage);
  };


})(jQuery);

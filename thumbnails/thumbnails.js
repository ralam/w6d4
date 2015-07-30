( function ($) {

  $.Thumbnails = function (el) {
    this.$el = $(el);
    this.$gutter = $(this.$el.find(".gutter-images")[0]);
    this.$activeImage = $(this.$gutter.children()[0]);
    this.activate(this.$activeImage);
    this.$el.on("click", ".gutter-images img", this.clickHandler.bind(this));
    this.$el.on("mouseenter", ".gutter-images img", this.enterHandler.bind(this));
    this.$el.on("mouseleave", ".gutter-images img", this.leaveHandler.bind(this));
  };

  $.fn.thumbnails = function () {
    return this.each(function () {
      new $.Thumbnails(this);
    });
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

  $.Thumbnails.prototype.activate = function ($img) {
    var $largeImage = $img.clone();
    var $activeDiv = $('div.active');

    $activeDiv.empty();

    $activeDiv.append($largeImage);
  };


})(jQuery);

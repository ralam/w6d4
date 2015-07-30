( function ($) {

  $.Thumbnails = function (el) {
    this.$el = $(el);
    this.$gutter = $(this.$el.find(".gutter-images")[0]);
    this.$activeImage = $(this.$gutter.children()[0]);
    this.activate(this.$activeImage);
    this.$el.on("mouseover", ".gutter-images img", this.clickHandler.bind(this));
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

  $.Thumbnails.prototype.activate = function ($img) {
    var $largeImage = $img.clone();
    var $activeDiv = $('div.active');

    $activeDiv.empty();

    $activeDiv.append($largeImage);

  };

})(jQuery);

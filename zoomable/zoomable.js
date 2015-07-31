(function ($){

  $.Zoomable = function (el) {
    this.$el = $(el);
    this.focusBoxSize = 200;
  };

  $.fn.zoomable = function () {
    return this.each(function () {
      new $.Zoomable(this);
    });
  };

  $.Zoomable.prototype.showFocusBox = function (event) {
    var left = event.clientX;
    var top = event.clientY;
    this.$el.append("<div class='focus-box'></div>");
    var $focusBox = $(this.$el.find(".focus-box"));
    $focusBox.attr("top", top);
    $focusBox.attr("left", left);
  };

  $.Zoomable.prototype.removeFocusBox = function (event) {
    this.$el.remove(".focus-box");
  };

})(jQuery);

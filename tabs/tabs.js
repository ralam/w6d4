(function($){
  $.Tabs = function (el) {
    this.$el = $(el);
    var contentTabsSelector = this.$el.data("content-tabs");
    this.$contentTabs = $(contentTabsSelector);
    this.$activeTab = $("li .active");
    this.$el.on('click', 'a', this.clickTab.bind(this));
    this._transitioning = false;
  };

  $.fn.tabs = function () {
    return this.each(function () {
      new $.Tabs(this);
    });
  };

  $.Tabs.prototype.clickTab = function (event) {
    event.preventDefault();
    var $clickedLink = $(event.currentTarget);
    $clickedLink.addClass('active');
    var that = this;

    this.$activeTab.removeClass("active");
    var $oldDiv = this.$contentTabs.find(".active");
    var $newDiv = this.$contentTabs.find($clickedLink.attr("for"));

    $oldDiv.removeClass("active").addClass("transitioning");

    $oldDiv.one("transitionend", function() {
      $oldDiv.removeClass("transitioning");
      $newDiv.addClass("active transitioning");
      setTimeout(function () {
        $newDiv.removeClass("transitioning");
      }, 0);
      that.$activeTab = $clickedLink;
    });
  };

})(jQuery);

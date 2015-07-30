(function($){
  $.Tabs = function (el) {
    this.$el = $(el);
    var contentTabsSelector = this.$el.data("content-tabs");
    this.$contentTabs = $(contentTabsSelector);
    this.$activeTab = $("li .active");
    this.$el.on('click', 'a', this.clickTab.bind(this));
  };

  $.fn.tabs = function () {
    return this.each(function () {
      new $.Tabs(this);
    });
  };

  $.Tabs.prototype.clickTab = function (event) {
    event.preventDefault();
    this.$activeTab.removeClass("active");
    $(event.currentTarget).addClass('active');
    var id = $(event.currentTarget).attr("for");
    this.$contentTabs.find(".active").removeClass("active");
    this.$contentTabs.find(id).addClass("active");
    this.$activeTab = $("li .active");
  };

})(jQuery);

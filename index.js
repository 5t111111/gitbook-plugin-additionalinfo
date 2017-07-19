module.exports = {
  hooks: {
    "page:before": function(page) {
      page.content = "# Title\n" + page.content;
      return page;
    }
  }
};

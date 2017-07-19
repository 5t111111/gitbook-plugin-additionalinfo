module.exports = {
  hooks: {
    "page:before": function(page) {
      page.content = "```\n" +
        "Crystal の日本語ドキュメントはしばらく更新されておらず情報が古くなっているため、\n" +
        "できるだけ[原文の英語ドキュメント](https://crystal-lang.org/docs/)で最新の情報を参照ください。\n" +
        "\n" +
        "```" +
        page.content;
      return page;
    }
  }
};

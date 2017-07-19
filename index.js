module.exports = {
  hooks: {
    "page:before": function(page) {
      page.content = "<pre>\n" +
                     "<font color='OrangeRed'>Crystal の日本語ドキュメントはしばらく更新されておらず情報が古くなっているため、できるだけ<a href='https://crystal-lang.org/docs/'>原文の英語ドキュメント</a>で最新の情報を参照ください。\n" +
                     "\n" +
                     "翻訳にご協力いただける方は<a href='https://github.com/crystal-jp/ja.crystal-lang.org'>翻訳プロジェクト</a>の issue や <a href='http://crystal.pine.moe'>Crystal-JP の Slack</a> からお知らせください。</font>\n" +
                     "</pre>\n\n" +
                     page.content;
      return page;
    }
  }
};

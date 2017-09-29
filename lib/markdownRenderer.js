const highlight = require('highlight.js');

module.exports = function (content) {
  const marked = require('marked');

  const renderer = new marked.Renderer();
  renderer.code = function (code, lang, escape) {
    let formattedCode;
    if (lang) {
      formattedCode = highlight.highlight(lang, code).value;
    } else {
      formattedCode = highlight.highlightAuto(code).value;
    }

    return `<pre><code class="langulage-${lang} hljs">${formattedCode}</code></pre>`;
  };

  renderer.table = function (header, body) {
    return `<table class="table table-striped table-bordered">
      <thead>${header}</thead>
      <tbody>${body}</tbody>
      </table>`;
  };

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return highlight.highlightAuto(code).value;
    }
  });

  return marked(content);
};

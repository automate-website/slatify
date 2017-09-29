const fs = require('fs');
const _ = require('lodash');

const template = require('./template')();
const readFile = require('./readFile');
const markdownRenderer = require('./markdownRenderer');


module.exports = function (inputFilename, outputFilename, options) {
  options = _.defaults(options, {
    themeFilename: __dirname + '/../themes/default.html',
    title: 'Awesome Documentation',
    description: '',
  });

  const contentFile = readFile(inputFilename);
  const content = markdownRenderer(contentFile);

  const templateFile = readFile(options.themeFilename);
  const tmpl = template(templateFile);

  // Gather context
  const context = {
    content,
    title: options.title,
    description: options.description
  };

  // Write to file
  fs.writeFileSync(outputFilename, tmpl(context));
};

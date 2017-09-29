const fs = require('fs');
const _ = require('lodash');

const template = require('./template')();
const readFile = require('./readFile');
const metadataReader = require('./metadataReader');
const markdownRenderer = require('./markdownRenderer');


module.exports = function (inputFilename, outputFilename, options) {
  options = _.defaults(options, {
    themeFilename: __dirname + '/../themes/default.html',
    title: '',
    description: '',
  });

  const inputFile = readFile(inputFilename);
  const metadata = metadataReader(inputFile);
  const content = markdownRenderer(inputFile);

  const templateFile = readFile(options.themeFilename);
  const tmpl = template(templateFile);

  // Gather context
  const context = {
    content,
    title: metadata.title || options.title,
    description: metadata.description || options.description
  };

  // Write to file
  fs.writeFileSync(outputFilename, tmpl(context));
};

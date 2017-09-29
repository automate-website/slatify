const slatify = require('./slatify');

const argv = process.argv.slice(2);

let inputFilename = argv[0];
let outputFilename = argv[1];
slatify(inputFilename, outputFilename, {
  title: 'Slatify',
  description: 'Minimal Markdown to HTML documentation generator',
});

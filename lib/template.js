const _ = require('lodash');
const readFile = require('./readFile');

module.exports = () => {
  const templateSettings = {
    interpolate: /{{([\s\S]+?)}}/g,
    imports: {
      include
    }
  };

  _.templateSettings = templateSettings;

  return _.template;
};

function include(filename) {
  const content = readFile(filename);
  return _.trim(content);
}

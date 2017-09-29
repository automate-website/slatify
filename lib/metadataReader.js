const YAML = require('yamljs');
const metadataRegex = /<!--#([\s\S]*)#-->/;

module.exports = function (content) {
  const metadata = content.match(metadataRegex);

  if (metadata && metadata.length > 1) {
    const firstMetadata = metadata[1];
    const parsedMetadata = YAML.parse(firstMetadata);
    return parsedMetadata;
  }

  return {};
};



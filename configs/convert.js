var yaml = require('js-yaml')
  , fs = require('fs');

function convert(filename) {
  var outputfile = 'tmp/' + filename + '.json';
  var obj = yaml.load(fs.readFileSync(filename + '.yaml', {encoding: 'utf-8'}));
  fs.writeFileSync(outputfile, JSON.stringify(obj, null, 2));
};

convert('sg');
convert('sg-accel');

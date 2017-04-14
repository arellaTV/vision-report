const fs = require('fs');
const parseString = require('xml2js').parseString;
const util = require('util');

const xml = "<root>Hello xml2js!</root>"

parseString(xml, (err, result) => {
  console.log(result);
});

fs.readFile(`${__dirname}/data/sample.xml`, (fsError, data) => {
  parseString(data, (parseError, result) => {
    console.log(util.inspect(result, false, null));
    console.log('done!');
  });
});

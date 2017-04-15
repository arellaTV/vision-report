const fs = require('fs');
const xml2js = require('xml2js');

const parser = new xml2js.Parser({ explicitArray: false });

const convertData = (filepath) => {
  const path = filepath || `${__dirname}/../data/ReportData.xml`;
  return new Promise((resolve, reject) => {
    fs.readFile(path, (fsError, data) => {
      if (fsError) {
        reject(fsError);
      }
      parser.parseString(data, (parseError, result) => {
        if (parseError) {
          reject(parseError);
        }
        resolve(result);
      });
    });
  });
};

module.exports = convertData;

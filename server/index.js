const fs = require('fs');
const xml2js = require('xml2js');
const express = require('express');

const app = express();
const parser = new xml2js.Parser({ explicitArray: false });

let reportData;

fs.readFile(`${__dirname}/data/ReportData.xml`, (fsError, data) => {
  parser.parseString(data, (parseError, result) => {
    reportData = result;
  });
});

app.use('/', express.static(`${__dirname}/../public`));

app.get('/report-data', (req, res) => {
  console.log(reportData);
  res.json(reportData);
});

app.listen(1337, console.log('listening!'));
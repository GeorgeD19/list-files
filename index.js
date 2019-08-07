const folder = './files';
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Targets are in cm
var targets = [
    [64,97],
    [64,97],
    [52,78],
    [52,78],
    [48.2,64],
    [48.2,64],
    [64,97],
    [64,97],
    [52,78],
    [52,78],
    [48.2,64],
    [48.2,64],
    [70,100],
    [64,90],
    [45,64],
    [72,102],
    [51,72],
    [64,90],
    [45,64],
    [72,102],
    [51,72],
    [64,90],
    [45,64],
    [72,102],
    [51,72],
    [64,90],
    [45,64],
    [72,102],
    [51,72],
    [64,90],
    [45,64],
    [72,102],
    [51,72]
];

var records = [];

const csvWriter = createCsvWriter({
    path: 'output.csv',
    header: [
        {id: 'name', title: 'Name'},
        {id: 'resolved', title: 'Resolved'}
    ]
});

fs.readdir(folder, (err, files) => {
  files.forEach(file => {
        var filename = file;
        filename = filename.replace(/[^0-9x+]+/g, '');
        // filename = filename.replace(/\+\d+/g, ''); // Don't remove the +
        records.push({
            name: file,
            resolved: filename
        });
    });
    csvWriter.writeRecords(records);
});
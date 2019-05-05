const xlsx = require('node-xlsx');
const path = require('path');
const fs = require('fs');
const buffer = fs.readFileSync(path.join(__dirname,'./template.xls'));
const arr = xlsx.parse(buffer);
console.log(arr);
let Table = require('tty-table');
let c = require('chalk');

const header = [
  { value: 'name', width: 30, headerAlign: 'left' },
  { value: 'price', width: 30, headerAlign: 'left' }
];

const opts = {
  align: 'left'
};

const data = [
  [`apple ${c.red("mac")}`,92.50],
  ["ibm",120.15]
 ]

let t1 = Table(header,data, opts);
console.log(t1.render()); 

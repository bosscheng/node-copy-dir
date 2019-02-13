const copyDir = require('../lib/copy-dir');
const path = require('path');

const src = path.join(__dirname, 'a');
const dist = path.join(__dirname, 'b');


let result = copyDir(src, dist);

console.log(result);

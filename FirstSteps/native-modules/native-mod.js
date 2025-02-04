// OS
const os = require('node:os'); 

console.log(os.platform());
console.log(os.cpus());

// 46:27
// File Systema
const fs = require('node:fs');

const stats = fs.statSync('./hello.txt');

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size
);

// Read in FS
//Sync
console.log('Reading the first file... ');
const text = fs.readFileSync('./hello.txt', 'utf-8')

console.log(text);

console.log('Reading the second file... ');
const text2 = fs.readFileSync('./howdy2.txt', 'utf-8')
console.log(text2);

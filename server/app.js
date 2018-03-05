var fs = require('fs');

var file = 'my_file.txt';
// var count = 0;

// console.time('Assinc');

// for (let i = 0; i < 1000; i++) {
//   fs.readFile('my_file.txt', (err, data) => {
//     if (err) {
//       console.error(err);
//     }

//     count++;
//     console.log('Assinc', data.toString());

//     if (count === 1000) {
//         console.timeEnd('Assinc');
//     }
    
//   })
// }
//112.473 ms
console.time('Sync');
for (let i = 0; i < 1000; i++) {
    var data = fs.readFileSync('my_file.txt');
    console.log('Sync', data.toString());
}
console.timeEnd('Sync');
var fs = require('fs');
var promise = require('promise');


read = (file) => {
  return new Promise((fulfill, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject();
      } else {
        fulfill(data.toString());
      }
    })
  });
}

var file = 'my_file.txt';

read(file)
    .then((response) => {
      console.info(response);
      return '111111';
    })
    .then((response) => {
      console.info(response);
      return '222222';
    })
    .then((response) => {
      console.info(response);
    });

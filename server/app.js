var fs = require('fs');

fs.writeFile('my_file.txt', 'Teste', (err) => {
    if (err) {
        console.error(err);
    }

    console.info('File created');
});

fs.appendFile('my_file.txt','Append Content', (err) => {
    if (err) {
        console.error(err);
    }

    console.info('Append success');
})

fs.readFile('my_file.txt', (err, data) => {
    if (err) {
        console.error(err);
    }

    console.info('Content ->', data.toString());
})
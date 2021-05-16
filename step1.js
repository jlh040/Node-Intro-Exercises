const fs = require('fs');

const cat = path => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log('Something went wrong.');
            process.exit(1);
        }
        else {
            console.log(data);
        }
    })
}

console.log(cat('one.txt'))
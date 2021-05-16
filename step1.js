const fs = require('fs');

const cat = path => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading ${path}:`, err);
            process.exit(1);
        }
        else {
            console.log(data);
        }
    })
}

const catCommand = () => {
    cat(process.argv[2]);
}

catCommand()
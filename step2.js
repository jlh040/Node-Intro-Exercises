const fs = require('fs');
const axios = require('axios');

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

async function webcat(url) {
    const resp = await axios.get(url);
    console.log(resp['data']);
}

const catCommand = () => {
    cat(process.argv[2]);
}

catCommand()
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

const nodeCat = () => {
    let arg = process.argv[2];
    if (isURL(arg)) {
        webcat(arg);
    } else{
        cat(arg);
    }
}

function isURL(arg) {
    if (arg.includes('http://') || arg.includes('.com')) {
        return true;
    }
}

nodeCat()
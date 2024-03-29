const fs = require('fs');
const axios = require('axios');

function cat(path) {
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
    try {
        const resp = await axios.get(url);
        console.log(resp['data']);
    } catch(e) {
        console.log(`Error fetching ${url}: ${e}`)
    }
}

async function nodeCat() {
    let args = process.argv;
    if (args[2] === '--out') {
        write(args[3], args[4]);
    }
    else if (isURL(args[2])) {
        webcat(args[2]);
    }
    else {
        cat(args[2]);
    }
}

const isURL = arg => {
    if (arg.includes('http://') || arg.includes('.com')) {
        return true;
    }
}

function write(writeTo, readFrom) {
    if (isURL(readFrom)) {
        fsWrite(writeTo, readFrom, getTextFromURL)
    } 
    else {
        fsWrite(writeTo, readFrom, getTextFromFile)
    }
}

function getTextFromFile(path) {
    return new Promise((resolve, reject) => fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(`Couldn't write ${path}: ${err}`)
            process.exit(1)
        }
        resolve(data);
    }))
}

function getTextFromURL(url) {
    return new Promise(async function(resolve, reject) {
        try {
            resp = await axios.get(url)
            resolve(resp['data']);
        } catch(e) {
            console.log(`Error fetching ${url}: ${e}`)
            process.exit(1);
        }
    })
}

async function fsWrite(writeTo, readFrom, func) {
    fs.writeFile(writeTo, await func(readFrom), 'utf8', err => {
        if (err) {
            console.log(`Couldn't write ${writeTo}: ${err}`);
            process.exit(1)
        }
    })
}

nodeCat()

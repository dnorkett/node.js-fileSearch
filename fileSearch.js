const fs = require('fs');

let arg = process.argv[2];
let searchValue = new RegExp(arg);

console.log(searchValue);

function search(file = './') {
    let stats = fs.statSync(file);

    if (stats.isDirectory()){
        for (let subFile of fs.readdirSync(file, "utf8")) {
            search(file + subFile + '/')
        }
    } else if (searchValue.test(fs.readFileSync(file, "utf8"))) {
        console.log(file);
    }
}

search();
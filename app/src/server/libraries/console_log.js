/**
 * Created by Samer on 2015-08-10.
 */
var fs = require('fs');
var util = require('util');

try {
    fs.mkdirSync("../logs/");
} catch (e) {
    if (e.code != 'EEXIST') throw e;
}

var log_file, log_stdout, log_id = 0;

while (true) {
    if (!fs.existsSync('../logs/debug_' + log_id + '.log')) {
        log_file = fs.createWriteStream('../logs/debug_' + log_id + '.log', {flags: 'w'});
        log_stdout = process.stdout;
        break;
    }
    else
        log_id++;
}

console.log = function (d) { //
    log_file.write(util.format(d) + '\n');
    log_stdout.write(util.format(d) + '\n');
};
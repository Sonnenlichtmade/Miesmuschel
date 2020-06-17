var app = require('./the.js')('MiesmuschelBackend');

exports.status = app('status');
exports.echo = app('echoEvent:andContext:');

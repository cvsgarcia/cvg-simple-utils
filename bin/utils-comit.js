#! /usr/bin/env node
var shell = require("shelljs");
console.log("Adding commit simple update");
shell.exec("git add .");
shell.exec('git commit -m "Simple commit"');

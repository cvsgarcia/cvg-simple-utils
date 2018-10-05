#! /usr/bin/env node
var shell = require("shelljs");
console.log("Forcing push");
shell.exec("git push origin master --force");

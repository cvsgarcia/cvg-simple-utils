#! /usr/bin/env node
console.log("Starting deploy");

var shell = require("shelljs");
shell.exec("commit && utils-push");

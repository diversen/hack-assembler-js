#!/usr/bin/env node

var read = require('read-file')
var assembler = require('./index')
var m = require('minimist-mini')();

if (m.get('help') || m.get('h')) {
    m.helpMessage()
    process.exit()
}

if (!process.argv[2]){
    m.helpMessage()
    process.exit()
}

var code = read.sync(process.argv[2], 'utf8')

var codeObj = new assembler(code)
codeObj.assemble();


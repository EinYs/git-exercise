const express = require('express');
const app = express();
const hotfix = require('./hotfix')

console.log('committed')
console.log('hotfix')

exports.default = function hello( str ){
    console.log('hello ' + str)
}
const {readFileSync, read, readFile} = require('fs')
var loadjson = ()=>JSON.parse(readFileSync('course.json'))
var data = readFileSync('course.json')
console.log(JSON.parse(data)['roaster'][0])
module.exports = {loadjson};
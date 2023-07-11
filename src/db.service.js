const fs = require('fs')

function getDB(){
    const buffer = fs.readFileSync(__dirname + '/db.json', 'utf-8')
    const db = JSON.parse(buffer)
}
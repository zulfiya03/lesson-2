const fs = require('fs')

const filePath = __dirname + '/db.json'

function getDB() {
    const buffer = fs.readFileSync(filePath, 'utf-8')
    const db = JSON.parse(buffer)
    return db
}

function setDB(payload) {
    const stringify = JSON.stringify(payload)
    
    fs.writeFileSync(filePath, stringify, 'utf-8')
    
    console.log('Ma`lumot qo`shildi')
}

function getID() {
    const db = getDB()
    const id = db.id + 1
    setDB({ id, users: db.users })
    return id
}

exports.getDB = getDB
exports.setDB = setDB
exports.getID = getID
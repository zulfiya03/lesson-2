const {getID, getDB, setDB} = require('./db.service')
function addUser(name, surname, age) {
    const newUser = {
        id: getID(),
        name,
        surname,
        age,
    }
    const db = getDB()
    db.users.push(newUser)
    setDB(db)
}


exports.addUser = addUser
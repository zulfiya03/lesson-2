const {getID, getDB, setDB} = require('./db.service')
function addUser(name, surname, age) {
    const newUser = {
        id: getID(),
        name,
        surname,
        age,
    }
    const db = getDB()
    db.users.push(newUser);
    setDB(db);
}

function deleteUser(id) {
    const db = getDB()
    const newArray = db.users.filter((user) => user.id !== +id)
    setDB({ id: db.id, users: newArray})
}

function editUser(id, key, value) {
    const db = getDB()
    const user = db.users.find((u) => u.id === +id)
    
    if(!Object.keys(user).includes(key)){
        return
    }

    const newArray = db.users.map((u) => {
        if(u.id === +id) {
            return {
                ...u,
                [key]: value
            }
        } else {
            return u
        }
    })
    setDB({id: db.id, users:newArray})
}

exports.addUser = addUser
exports.deleteUser = deleteUser
exports.editUser = editUser
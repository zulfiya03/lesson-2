const prompt = require('prompt-sync')()
const { log } = require('console')
const {commands} = require('./commands')
const { getDB, setDB, getID } = require("./db.service")
const info = require("./info") 

while(true) {
    info()
    const command = prompt('Buyruqni kiriting: ')
    const isExit = commands["Exit"].includes(command)
    const isAddUser = commands["Add User"].includes(command)
    const isDelete = commands["Delete User"].includes(command)
    
    if(isExit) {
        break
    }

    if(isAddUser){
        const name = prompt('Foydalanuvchining nomi: ')
        const surname = prompt('Foydalanuvchining familyasi: ')
        const age = prompt('Foydalanuvchining yoshi: ')

        const newUser = {
            id: getID(),
            name,
            surname,
            age 
        }

        const db = getDB()
        db.users.push(newUser)
        setDB(db)
    }

    if(isDelete) {
        const db = getDB()
        console.log(db.users);
        const id = prompt('ID ni kiriting: ')
        const newArray = db.users.filter((user) => user.id !== +id)
        setDB({ id: db.id, users: newArray})
        }
    }
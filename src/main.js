const prompt = require('prompt-sync')()
const { log } = require('console')
const {commands} = require('./commands')
const { getDB, setDB, getID } = require("./db.service")
const info = require("./info") 

const {addUser, deleteUser, editUser} = require('./user.controller')

while(true) {
    info()
    const command = prompt('Buyruqni kiriting: ')
    const isExit = commands["Exit"].includes(command)
    const isAddUser = commands["Add User"].includes(command)
    const isDelete = commands["Delete User"].includes(command)
    const isEdit = commands["Edit User"].includes(command)
    
    if(isExit) {
        break
    }

    if(isAddUser){
        const name = prompt('Foydalanuvchining nomi: ')
        const surname = prompt('Foydalanuvchining familyasi: ')
        const age = prompt('Foydalanuvchining yoshi: ')
        addUser(name, surname, age)
    }

    if(isDelete) {
        const db = getDB()
        console.log(db.users);
        const id = prompt('ID ni kiriting: ')
        deleteUser(id)
    }

    if(isEdit) {
        const db = getDB()
        console.log(db.users);
        const id = prompt('ID ni kiriting: ')
        const user = db.users.find((u) => u.id === +id)

        if(!user){
            return
        }
        const key = prompt('Qaysi keyni o`zgartirmoqchisiz: ')
        const value = prompt('Qiymatni kiriting: ')
        editUser(id, key, value)
    }
}
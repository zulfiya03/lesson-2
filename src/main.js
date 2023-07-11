const prompt = require('prompt-sync')()
const {commands} = require('./commands')
const {getDB, setDB, getID} = require('./db.service')
const info = require('./info') 

while(true){
    info()
    
    const command = prompt('Buyruqni kiriting: ')
    const isExit = commands.exit.includes(command)
    const addUser = commands.addUser.includes(command)
    
    if(isExit){
        break
    }

    if(addUser){
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
    
}
const prompt = require('prompt-sync')()
const {commands} = require('./commands')
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
        
    }
    
}
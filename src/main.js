const prompt = require('prompt-sync')()
const {commands} = require('./commands')

while(true){
    console.log(`Buryruqlar ro'yhati: 
    Exit: e | exit | /q `);
    const command = prompt('Buyruqni kiriting: ')
    const isExit = commands.exit.includes(command)
    
    if(isExit){
        break
    }
    
}
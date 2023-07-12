const {commands} = require('./commands')

function info(){
    let infoText = 'Buyruqlar ro`yhati: \n'

    for(let key in commands){
        infoText += `${key}: ${commands[key].join(' | ')}\n`
    }

    console.log(infoText)
}

module.exports = info
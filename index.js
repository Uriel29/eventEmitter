let eventEmitter = require('./ouvindo')
const callback = require('./callback')


setInterval(() => {

      eventEmitter.emit('ouvir')

      eventEmitter.removeListener('ouvir', callback)
      
},1000)
''
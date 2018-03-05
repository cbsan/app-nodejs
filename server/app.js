var EventEmitter = require('events');

// var emitter = new EventEmitter();

// emitter.on('meu_evento', function (value) {
//     console.info('meu envento '+value);
// });

// emitter.emit('meu_evento', 123);

class Cao extends EventEmitter
{
    latir() {
        console.info('Au au!');
    }
}

var Rex = new Cao();

// Rex.on('pessoa_no_portao', Rex.latir);
Rex.once('pessoa_no_portao', Rex.latir);

Rex.emit('pessoa_no_portao');
Rex.emit('pessoa_no_portao');
// Rex.removeListener('pessoa_no_portao', Rex.latir);
Rex.emit('pessoa_no_portao');

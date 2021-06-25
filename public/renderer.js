const moment = require('moment');

setInterval(() => {
    document.getElementById('app').innerHTML = moment().format('hh:mm:ss a');
}, 1000)
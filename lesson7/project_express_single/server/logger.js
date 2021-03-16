const moment = require('moment');
const fs = require('fs');

const logger = (product_id, action) => {
    fs.readFile('./server/db/stats.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const logg = JSON.parse(data);
            logg.push({
                action: action,
                product_id: product_id,
                time: moment().format(),
            });        
            fs.writeFile('./server/db/stats.json', JSON.stringify(logg), (err) => {
                if (err) console.log(err);
            });
        }
    }); 
};

module.exports = logger;
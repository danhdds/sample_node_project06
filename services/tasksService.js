const dbService = require('./dbService.js');
const config = require('../config/config.js'); // to resolve

function getMultiple(page = 1) {

    const offset = (page - 1) * config.listPerPage;
    const data = dbService.query(`SELECT * FROM task LIMIT ?,?`, [offset, config.listPerPage]);
    const meta = {page};

    return {
        data,
        meta
    } // end return

} // end getMultiple

module.exports = {
    getMultiple
}
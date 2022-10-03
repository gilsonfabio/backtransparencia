const connection = require('../database/connection');

module.exports = {   
    async index (request, response) {
        const secretarias = await connection('secretarias').select('*');
        return response.json(secretarias);
    },    

    async searchSec (request, response) {
        let idSec = request.params.id;
        const secretaria = await connection('secretarias')
        .where('secId', idSec)
        .select('*');

        return response.json(secretaria);
    },
    
};
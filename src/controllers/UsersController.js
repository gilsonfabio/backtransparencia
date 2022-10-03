const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {   
    async index (request, response) {
        const users = await connection('usuarios').select('*');
        return response.json(users);
    },    

    async signIn(request, response) {
        let email = request.params.email;
        let senha = request.params.password;

        var encodedVal = crypto.createHash('md5').update(senha).digest('hex');
        const user = await connection('servidores')
            .where('usrEmail', email)
            .where('usrSenha', encodedVal)
            .select('usrId', 'usrNome')
            .first();
          
        if (!user) {
            return response.status(400).json({ error: 'Não encontrou servidor com este ID'});
        } 

        return response.json(user);
    },
    
};
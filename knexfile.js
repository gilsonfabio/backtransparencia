// Update with your config settings.
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : 'innvento.mysql.dbaas.com.br',
      database: 'innvento',
      user: 'innvento',
      password: 'innvento8931'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host : 'innvento.mysql.dbaas.com.br',
      database: 'innvento',
      user: 'innvento',
      password: 'innvento8931'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  }
};
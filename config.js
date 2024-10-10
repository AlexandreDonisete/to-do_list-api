require('dotenv').config()
const { Sequelize } = require('sequelize');

const database = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres', // Especifica o tipo de banco (PostgreSQL)
    dialectOptions: {
      ssl: {
        require: true, // Supabase requer SSL
        rejectUnauthorized: false // Para não rejeitar conexões não autorizadas
      }
    },
  });

database.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    })
    .catch(err => {
        console.error('Não foi possível conectar ao banco de dados:', err);
    });

    

module.exports = database;
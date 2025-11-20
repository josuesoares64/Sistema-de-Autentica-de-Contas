require('dotenv').config();
const Sequelize = require('sequelize')
const chalk = require('chalk')

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
})

try {
    console.log(chalk.green('Banco de dados conectado...'))
} catch (error) {
    console.log(chalk.red('Não foi possível conectar ao banco de dados: ', error))
}

module.exports = sequelize;
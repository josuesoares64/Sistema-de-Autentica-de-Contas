const express = require('express');
const chalk = require('chalk');
const session = require('express-session');
const flash = require('connect-flash');
const {engine} = require('express-handlebars');

const db = require('./config/db');
const authRouter = require('./routes/AuthRouter');
const HomeRouter = require('./routes/HomeRouter.js');

const app = express();
const PORT =process.env.PORT || 3000;

//Middlewares
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(session({
    name: "session",
    secret: "secret_pass",
    resave: false,
    saveUninitialized: false,
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(flash());

//Routes
app.use('/', HomeRouter);
app.use('/', authRouter);


db.sync().then(() => {
    app.listen(PORT, () => {
    console.log(chalk.blue(`Servidor rodando na porta https://localhost${PORT}`));
});
}).catch((error) => {
    console.log(chalk.red('Erro ao sincronizar o banco de dados: ', error));
})
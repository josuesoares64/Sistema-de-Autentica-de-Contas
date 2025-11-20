const flash = require('express-flash');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = class AuthControllers {
    static login(req, res) {
        res.render('auth/login');
    }

    static register(req, res) {
        res.render('auth/register');
    }

    static async registerPost(req, res) {
        const { name, email, password } = req.body;
        const chechIOUser = await User.findOne({ where: { email: email } });

        if (chechIOUser) {
            req.flash('error', 'Email já cadastrado.');
            res.redirect('/register');
            return;
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);

        const user = {
            name,
            email,
            password: hashPassword
        };

        try {
            const createduser = await User.create(user);
            req.session.userid = createduser.id;
            req.flash('success', 'Cadastro realizado com sucesso!');

            req.session.save(() => {
                res.redirect('/');
            });
        } catch (error) {   
            console.log(error);
        }
    }
}

const flash = require('express-flash');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = class AuthControllers {
    
    static login(req, res) {
        res.render('auth/login');
    }

    static async loginPost(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            req.flash('error', 'Usuário não encontrado.');
            return res.redirect('/rister');
        }

        const passwordMatch = bcrypt.compareSync(password, user.password);

        if (!passwordMatch) {
            req.flash('error', 'Senha inválida.');
            return res.redirect('/login');
        }

        req.session.userid = user.id;
        req.flash('success', 'Login realizado com sucesso!');

        req.session.save(() => res.redirect('/'));
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

        try {
            const createduser = await User.create({
                name,
                email,
                password: hashPassword
            });

            req.session.userid = createduser.id;
            req.flash('success', 'Cadastro realizado com sucesso!');

            req.session.save(() => {
                res.redirect('/');
            });

        } catch (error) {
            console.log(error);
        }
    }

    static logout(req, res) {
        req.session.destroy();
        res.redirect('/login');
    }
}

# Sistema de Autenticação em Node.js com Express, Handlebars e Sequelize

Este projeto é um sistema de autenticação completo desenvolvido em **Node.js**, utilizando:

* **Express**
* **Handlebars**
* **PostgreSQL (via Sequelize)**
* **Express-Session**
* **Bcrypt**
* **Connect-Flash**

O objetivo é oferecer uma base sólida para projetos que precisam de cadastro, login, logout, proteção de rotas e sessões de usuário.

---

## 🚀 Funcionalidades

✔ Cadastro de usuários
✔ Login com hash de senha
✔ Logout com destruição de sessão
✔ Feedback visual com Flash Messages
✔ Sessão armazenada em cookie do navegador
✔ Handlebars com layout dinâmico exibindo opções conforme login
✔ Estrutura organizada em MVC (Controllers, Models, Views)

---

## 🧱 Estrutura de Pastas

```
/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── views/
│   ├── layouts/
│   ├── auth/
│   └── home.handlebars
├── index.js
├── package.json
└── .gitignore
```

---

## ⚙️ Tecnologias Utilizadas

* Node.js
* Express.js
* Handlebars
* PostgreSQL
* Sequelize
* Express-session
* Bcrypt
* Connect-flash

---

## 📥 Instalação

Clone o repositório:

```
git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
cd NOME_DO_REPOSITORIO
```

Instale as dependências:

```
npm install
```

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```
DATABASE_URL="sua_string_de_conexao_aqui"
```

> O arquivo `.env` já está listado no `.gitignore` e **não será enviado ao GitHub**.

Se quiser subir um modelo para quem baixar o projeto:

Crie um arquivo:

```
.env.example
```

com:

```
DATABASE_URL=
```

---

## ▶️ Como rodar o projeto

Modo de desenvolvimento:

```
npm run dev
```

Versão de produção:

```
npm start
```

Depois, acesse em:

```
http://localhost:3000
```

---

## 🧪 Banco de Dados

O Sequelize faz a sincronização automaticamente ao iniciar:

```
db.sync()
```

Certifique-se de que sua conexão no `.env` está correta.

---

## 📌 Rotas Principais

### Público

| Rota        | Método | Descrição           |
| ----------- | ------ | ------------------- |
| `/login`    | GET    | Página de login     |
| `/register` | GET    | Página de registro  |
| `/register` | POST   | Salvar novo usuário |

### Privado

| Rota      | Método | Descrição       |
| --------- | ------ | --------------- |
| `/logout` | GET    | Finaliza sessão |

---

## 🧑‍💻 Autor

**Josué Soares**

Se quiser entrar em contato para suporte, feedback ou ideias de melhoria, fique à vontade!

---

## 📄 Licença

Este projeto está sob a licença MIT.
Sinta-se livre para usar, estudar e evoluir como quiser.

EOF

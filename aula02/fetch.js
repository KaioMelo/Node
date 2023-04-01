import fetch from 'node-fetch'
import chalk from 'chalk'
import https from 'https'

const geraUsuarios = (num) => {
    fetch(`https://randomuser.me/api/?results=${num}`, { agent: new https.Agent({ rejectUnauthorized: false }) })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erro ao obter usuários');
            }
            return response.json()
        })
        .then((dados) => {
            const usuarios = dados.results;
            usuarios.forEach((usuario) => {
                const primeiroNome = usuario.name.first;
                const ultimoNome = usuario.name.last;
                return console.log(chalk.green(`${primeiroNome} ${ultimoNome}`));
            });
        })
        .catch((erro) => console.log(erro.message));
}
geraUsuarios(10)
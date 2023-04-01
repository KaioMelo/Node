import chalk from 'chalk';

function temperaturaPaciente(temp){
    if(temp > 37.5) return console.log(chalk.red('Está Febril'))
    if(temp < 37.5) return console.log(chalk.green('Não está Febril'))
}

temperaturaPaciente(36)
temperaturaPaciente(38)

/*const http = require('http');

const hostname = 'localhost';
const port = '3000';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/plain');
    res.end('Hello World');
})

server.listen(port, hostname, () => {
    console.log(`Servidos rodando ${hostname}/${port}`)
})*/
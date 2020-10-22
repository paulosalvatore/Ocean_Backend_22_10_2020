const express = require('express');
const app = express();

const port = 3000;

/*
-> Create, Read (All/Single), Update & Delete
-> Criar, Ler (Tudo ou Individual), Atualizar e Remover
*/

/*
URL -> http://localhost:3000
Endpoint ou Rota -> [GET] /mensagem
Endpoint ou Rota -> [POST] /mensagem

Endpoint: [GET] /mensagem
Descrição: Ler todas as mensagens

Endpoint: [POST] /mensagem
Descrição: Criar uma mensagem

Endpoint: [GET] /mensagem/{id}
Descrição: Ler mensagem específica pelo ID
Exemplo: [GET] /mensagem/1

Endpoint: [PUT] /mensagem/{id}
Descrição: Edita mensagem específica pelo ID

Endpoint: [DELETE] /mensagem/{id}
Descrição: Remove mensagem específica pelo ID
*/

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(port, function () {
    console.log('App rodando em http://localhost:' + port);
});

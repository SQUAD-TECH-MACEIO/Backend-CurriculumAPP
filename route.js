const express = require('express');

const app = express();
const PORT = 3000;

// respostas
function respostaGet(request, response) {
    response.send('[GET] Hello World')
}

function respostaPost(request, response) {
    response.send('[POST] Hello World')
}

function respostaPut(request, response) {
    response.send('[PUT] Hello World')
}

function respostaDelete(request, response) {
    response.send('[DELETE] Hello World')
}
// Requisição Básica HTTP
app.get('/', respostaGet)
app.post('/',respostaPost)
app.put('/', respostaPut)
app.delete('/', respostaDelete)

// Fim Requisição Básica HTTP

app.listen(port, ()=> {
    console.log('Respondendo na porta: ' + PORT);
})

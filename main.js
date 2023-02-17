const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000



app.listen(port, () => {
    console.log(`O servidor está sendo executado na porta ${port}.`);
});

// Rota para a página do formulário
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});



// Middleware para processar o corpo das solicitações
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para adicionar uma nova tarefa
app.post('/tarefas', (req, res) => {
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;

    // Crie um objeto de tarefa com um ID exclusivo
    const id = Date.now().toString();
    const tarefa = { id, titulo, descricao };

    // Adicione a tarefa ao array
    tarefas.push(tarefa);

    // Envie uma resposta com a tarefa adicionada
    res.json(tarefa);
});
// Rota para recuperar todas as tarefas
app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});
// Função para adicionar uma nova tarefa
function adicionarTarefa(titulo, descricao) {
    const dados = { titulo, descricao };

    fetch('/tarefas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(dados)
    })
        .then(res => res.json())
        .then(tarefa => {
            adicionarItemLista(tarefa);
        })
        .catch(err => {
            console.error(err);
        });
}

// Função para recuperar todas as tarefas
function recuperarTarefas() {
    fetch('/tarefas')
        .then(res => res.json())
        .then(tarefas => {
            tarefas.forEach(tarefa => {
                adicionarItemLista(tarefa);
            });
        })
        .catch(err => {
            console.error(err);
        });
}
// Função para atualizar uma tarefa existente
function atualizarTarefa(id, titulo, descricao) {
    const dados = { titulo, descricao };

    fetch(`/tarefas/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(dados)
    })
        .then(res => res.json())
        .then(tarefa => {
            atualizarItemLista(tarefa);
        })
        .catch(err => {
            console.error(err);
        });
}

// Função para excluir uma tarefa existente


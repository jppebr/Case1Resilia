const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const bancoDeDados = [];

app.post('/tarefas', (req, res) => {
  const tarefa = req.body.tarefa;
  bancoDeDados.push(tarefa);
  res.redirect('/');
});
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { tarefas: bancoDeDados });
});

app.put('/:id', (req, res) => {
  const id = req.params.id;
  const novaTarefa = req.body.novaTarefa;
  bancoDeDados[id] = novaTarefa;
  res.redirect('/');
});
app.delete('/:id', (req, res) => {
  const id = req.params.id;
  bancoDeDados.splice(id, 1);
  res.redirect('/');
});
app.get('/', function(req, res) {
  var tarefas = [ /* sua lista de tarefas aqui */ ];
  res.render('index.ejs', { tarefas: tarefas });
});





app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});

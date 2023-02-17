
// Array de objetos que representa as tarefas
let tarefas = [
    { id: 1, titulo: "Comprar pão", descricao: "Comprar pão na padaria da esquina" },
    { id: 2, titulo: "Lavar roupa", descricao: "Lavar a roupa suja da semana" },
    { id: 3, titulo: "Ver o site da Resilia", descricao: "Verificar Se a Resilia Não trocou o trabalho denovo" }
];

// Função para renderizar a lista de tarefas
function renderizarTarefas() {
    const listaTarefas = document.getElementById("lista-tarefas");
    listaTarefas.innerHTML = "";

    for (let tarefa of tarefas) {
        const li = document.createElement("li");

        const titulo = document.createElement("h2");
        titulo.innerText = tarefa.titulo;
        li.appendChild(titulo);

        const descricao = document.createElement("p");
        descricao.innerText = tarefa.descricao;
        li.appendChild(descricao);

        const btnExcluir = document.createElement("button");
        btnExcluir.innerText = "Excluir";
        btnExcluir.addEventListener("click", () => excluirTarefa(tarefa.id));
        li.appendChild(btnExcluir);

        listaTarefas.appendChild(li);
    }
}

// Função para adicionar uma nova tarefa
function adicionarTarefa(event) {
    event.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const descricao = document.getElementById("descricao").value;

    const novaTarefa = {
        id: Date.now(),
        titulo,
        descricao
    };

    tarefas.push(novaTarefa);

    renderizarTarefas();

    document.getElementById("titulo").value = "";
    document.getElementById("descricao").value = "";
}

// Função para excluir uma tarefa
function excluirTarefa(id) {
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);

    renderizarTarefas();
}

// Event listener para o botão de adicionar tarefa
document.getElementById("btn-adicionar").addEventListener("click", adicionarTarefa);

// Renderiza a lista de tarefas ao carregar a página
renderizarTarefas();
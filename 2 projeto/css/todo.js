const inputtarefa = document.getElementById('NovaTarefa');
const adicionarTarefa = getElementById('adicionarTarefa');
const ListadeTarefas = document.getElementById('ListadeTarefas');

function adicionarTarefa(){
    const  TarefaTexto = inputtarefa.value.trim();
    if (TarefaTexto !==""){
    let ll = document.createElement(li);
    li.textcontent = TarefaTexto;

    ListadeTarefas.appendChild(li)

    inputtarefa.value = "";
}
}

botaoAdicionar.addEventListener('keypress', function(event)){
    if(Event.key === 'Enter') {
        adicionarTarefa();
    }
}
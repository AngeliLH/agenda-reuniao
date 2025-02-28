var calendario = []

function salvarDados() {
    let dataInicial = document.getElementById('dataInicial').value
    let intervalo = document.getElementById('intervalo').textContent
    if (intervalo == '') {
        inserirData()
    } else if (detalhesEvento == '') {
        alert('Por favor, informar os detalhes do evento!')
    } else if (local == '') {
        alert('Por favor, informar local!')
    } else if (tempoEstimado == '00:00') {
        alert('Por favor, informar o tempo estimado do evento!')
    } else if (nome == '') {
        alert('Por favor, informar o nome do responsável!')
    } else if (email == '') {
        alert('Por favor, informar o email do responsável!')
    } else if (nome == '') {
        alert('Por favor, informar o nome do responsável!')
    } else if (telefone == '') {
        alert('Por favor, informar o telefone do responsável!')
    } else {
        for (let i = 0; i < intervalo; i++) {
            let d = new Date(dataInicial)
            d.setHours(d.getHours() + 4)
            d.setDate(d.getDate() + i)
            calendario.push(d)
        }
    }
}
const form = document.querySelector('#formularioCadastro');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let chaveEvento = document.getElementById('chave').textContent;
    salvarDados();
    let novaAgenda = {
        calendario: calendario,
        chave: chaveEvento,
        dataInicial: document.getElementById('dataInicial').value,
        dataFinal: document.getElementById('dataFinal').value,
        intervalo: document.getElementById('intervalo').textContent,
        detalhesEvento: document.getElementById('detalhesEvento').value,
        local: document.getElementById('local').value,
        tempoEstimado: document.getElementById('tempoEstimado').value,
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        agendaover: false,
    }
    agenda.add(novaAgenda)
        .then((docRef) => {
            form.reset()
            geraStringAleatoria(tamanho)
            alert(`Cadastro da chave ${chaveEvento} realizado!`);
        })
        .catch((error) => {
            alert(`Cadastro da chave ${chaveEvento} nao realizado!`);
        });
});




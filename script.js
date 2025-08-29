const menu = document.querySelector('.menu');
const listaAnimais = document.querySelector('.animais');

menu.addEventListener('click', () => {
    listaAnimais.classList.toggle('open');
    menu.classList.toggle('open');
})

//===================================================
const corpo = document.querySelector('.container');

function perguntaPrincipal() {
    corpo.innerHTML = '';

    const pergunta = criaH4('Esse animal pertence a qual classe?');
    const btnMamifero = criaButton('Mamífero');
    const btnAves = criaButton('Aves');
    const btnRepteis = criaButton('Répteis');

    btnMamifero.addEventListener('click', mamiferoTipo);
    btnAves.addEventListener('click', avesTipo);
    btnRepteis.addEventListener('click', repteisTipo);

    corpo.appendChild(pergunta);
    corpo.appendChild(btnMamifero);
    corpo.appendChild(btnAves);
    corpo.appendChild(btnRepteis);
}

//==== MAMÍFERO ====
function mamiferoTipo() {
    limpaCorpo();

    const pergunta = criaH4('Que tipo de mamífero é?');
    const btnQuadrupedes = criaButton('Quadrúpedes');
    const btnBipedes = criaButton('Bípedes');
    const btnVoador = criaButton('Voador');
    const btnAquatico = criaButton('Aquático');

    btnQuadrupedes.addEventListener('click', quadrupedeTipo);
    btnBipedes.addEventListener('click', bipedesTipo);
    btnVoador.addEventListener('click', voadorTipo);
    btnAquatico.addEventListener('click', aquaticoTipo);

    corpo.appendChild(pergunta);
    corpo.appendChild(btnQuadrupedes);
    corpo.appendChild(btnBipedes);
    corpo.appendChild(btnVoador);
    corpo.appendChild(btnAquatico);
}

//== QUADRUPEDE ==
function quadrupedeTipo() {
    limpaCorpo();

    const pergunta = criaH4('Esse animal pertence a qual classe?');
    const btnCarnivoro = criaButton('Carnívoros');
    const btnHerbivoro = criaButton('Herbívoros');

    btnCarnivoro.addEventListener('click', carnivoroTipo);
    btnHerbivoro.addEventListener('click', herbivoroTipo);

    corpo.appendChild(pergunta);
    corpo.appendChild(btnCarnivoro);
    corpo.appendChild(btnHerbivoro);
}

function carnivoroTipo() {
    mostrarResposta('leão');
}

function herbivoroTipo() {
    mostrarResposta('Cavalo');
}

//== BÍPEDES ==
function bipedesTipo() {
    limpaCorpo();

    const pergunta = criaH4('Esse animal pertence a qual classe?');
    const btnOnivero = criaButton('Onívero');
    const btnFrutivoro = criaButton('Frutivoro');

    btnOnivero.addEventListener('click', oniveroTipo);
    btnFrutivoro.addEventListener('click', frutivoroTipo);

    corpo.appendChild(pergunta);
    corpo.appendChild(btnOnivero);
    corpo.appendChild(btnFrutivoro);
}

function oniveroTipo() {
    mostrarResposta('homem');
}

function frutivoroTipo() {
    mostrarResposta('macaco');
}

//== VOADORES ==
function voadorTipo() {
    mostrarResposta('morcego');
}

//== AQUÁTICOS ==
function aquaticoTipo() {
    mostrarResposta('baleia');
}



//==== AVES ====
function avesTipo() {
    limpaCorpo();

    const pergunta = criaH4('Que tipo de Ave é?');
    const btnNaoVoadores = criaButton('Não-voadores');
    const btnNadador = criaButton('Nadador');
    const btnRapina = criaButton('Rapina');

    btnNaoVoadores.addEventListener('click', naoVoadoresTipo);
    btnNadador.addEventListener('click', nadadorTipo);
    btnRapina.addEventListener('click', rapinaTipo);

    corpo.appendChild(pergunta);
    corpo.appendChild(btnNaoVoadores);
    corpo.appendChild(btnNadador);
    corpo.appendChild(btnRapina);
}

//== NÃO VOADORES ==
function naoVoadoresTipo() {
    limpaCorpo();

    const pergunta = criaH4('Esse animal pertence a qual classe?');
    const btnTropical = criaButton('Tropical');
    const btnPolar = criaButton('Polares');

    btnTropical.addEventListener('click', tropicalTipo);
    btnPolar.addEventListener('click', polarTipo);

    corpo.appendChild(pergunta);
    corpo.appendChild(btnTropical);
    corpo.appendChild(btnPolar);
}

function tropicalTipo() {
    mostrarResposta('avestruz');
}

function polarTipo() {
    mostrarResposta('pinguim');
}

//== NADADOR ==
function nadadorTipo() {
    mostrarResposta('pato');
}

//== RÁPINA ==
function rapinaTipo() {
    mostrarResposta('águia');
}



//==== RÉPTEIS
function repteisTipo() {
    limpaCorpo();

    const pergunta = criaH4('Que tipo de Réptil é?');
    const btnComCasco = criaButton('Com Casco');
    const btnCarnivoro = criaButton('Carnívoros');
    const btnSemPatas = criaButton('Sem Patas');

    btnComCasco.addEventListener('click', cascoTipo);
    btnCarnivoro.addEventListener('click', carnivoroReptTipo);
    btnSemPatas.addEventListener('click', semPataTipo);

    corpo.appendChild(pergunta);
    corpo.appendChild(btnComCasco);
    corpo.appendChild(btnCarnivoro);
    corpo.appendChild(btnSemPatas);
}

//== COM CASCO
function cascoTipo() {
    mostrarResposta('tartaruga');
}

//== CARNIVORO
function carnivoroReptTipo() {
    mostrarResposta('crocodilo');
}

//== SEM PATAS
function semPataTipo() {
    mostrarResposta('cobra');
}


function mostrarResposta(respostaTexto) {
    limpaCorpo();

    const resposta = criaH4(`O seu animal é '${respostaTexto.toUpperCase()}'`);
    const reiniciar = criaButtonReinicia();

    corpo.appendChild(resposta);
    corpo.appendChild(reiniciar);
}


//==== CRIA ELEMENTOS ====
function criaH4(texto) {
    const meuH4 = document.createElement('h4');
    meuH4.textContent = texto;

    return meuH4;
}

function criaButton(texto) {
    const meuButton = document.createElement('button');
    meuButton.textContent = texto;

    return meuButton;
}

//==== BUTTON REINICIAR ====
function criaButtonReinicia() {
    const meuButton = document.createElement('button');
    meuButton.textContent = 'Jogar Novamente';

    meuButton.addEventListener('click', perguntaPrincipal);

    return meuButton;
}

//==== LIMPAR O CONTAINER ====
function limpaCorpo() {
    corpo.innerHTML = '';
}

perguntaPrincipal();
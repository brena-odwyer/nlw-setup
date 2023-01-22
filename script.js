const form = document.querySelector("form")
// Chamando o formulário do HMTL
const nlwSetup = new NLWSetup(form)
// Iniciando a biblioteca da NWL em uma const
const button = document.querySelector('header button')

button.addEventListener('click', add) // quando clica no botão dispara a função
// adiciona o evento, a função precisa de dois argumentos, o primeiro é qual o evento e o segundo é a função executada quando acontecer o evento. O evento vai ser um click e a função vai ser adicionar.
form.addEventListener("change", save) // form é onde está o formulário no html, então sempre que houver uma mudança, change, vai executar a função save de salvar

function add() {
  const today =  new Date().toLocaleDateString('pt-br').slice(0,-5)//inclui a data na variável today. Usamos uma library do js que é a new Date que cria uma nova data, mas cria a data no sistema americano, com hora, etcs. A biblioteca da NWL pediu que fosse só no formado "dd/mm" então usamos a função toLocaleDateString para transformar no padrão brasileiro colocando o argumento 'pt-br', aí vai ficar dd/mm/aaaa então usamos a função slice pra retirar o ano, o slice funciona sempre em strings, aí no argumento do slice estamos dizendo "a partir da posição 0 você vai contar de traz pra frente até -5" e aí vai excluir os quatro caracteres do ano e o caracter da barra.
  const dayExists = nlwSetup.dayExists(today) // pega o nwlSetup e vê se o today existe, se existe a const vai ser true, se não false

  if (dayExists) { // se é false não entra no if pq o if precisa de um valor true, aí vai pular essa parte e vai direto pro addDay. Quando isso for true, aí vai executar esse pedaço de código com o alerta e vai parar o programa para não criar o dia de novo.
    alert("Dia já incluso")
    return // esse return pausa a função que é disparada quando o usuário clica no botão
  } 
  
  alert("Adicionado com sucesso")
  nlwSetup.addDay(today) // a propria biblioteca da nwl tem essa função addDay que adiciona a fileira com os hábitos no dia
}

function save(){
  localStorage.setItem('NWLSetUp@habits', JSON.stringify(nlwSetup.data)) // o window é tipo o document, é da propria janela do navegador, e detro há o localStorage, um objeto que guarda informações na memória do browser, para guardar isso usamos a funcionalidade setItem e falamos o nome, que pode ser qualquer um, e o valor. Então dentro dessa data vai ficar marcado o que salvou, que vai ficar como aquele const data embaixo, mas salvo apenas no browser, da pra ver se colocar num console.log.
  // O objeto nwlSetUp.data vai vir em um json string, que é o que o local storage aceita guardar. Isso apenas salva o dado, mas ainda não aparece na tela porque ainda não construímos essa funcionalidade, que vem a seguir, fora da função
}

const data = JSON.parse(localStorage.getItem("NWLSetUp@habits")) || {}

// const data = {
//   run: ["01-01", "01-02", "01-03", "01-06", "01-07"],
//   water: ["01-01", "01-02", "01-03"],
//   food: ["01-01", "01-02", "01-03"],
//   takePills: ["01-01"],
//   journal: ["01-01"],
// } // Esta parte nós adicionamos os hábitos manualmente, apenas para visualização, por isso está comentado.


nlwSetup.setData(data)
nlwSetup.load()

//  Anotações:
// O Js executa linha a linha
// const mensagem = "Bom te ver aqui! "

// alert(mensagem + (10 * 100) + " abraços")
//O alert() cria uma caixinha tipo pop up

//  Bom te ver aqui! 1000 abraços

// Exportando para o html:
// <script src="./script.js"></script>

// Variáveis são caixinhas onde guardamos um tipo de dado para usar mais tarde:
// Informações que podem ser em textos, números, booleanos (valores lógicos: verdadeiro ou falso) ou dados mais estruturados
// // declaro e atribuo valor
// let boasVindas = 'Fala, Dev!';

// // reatribuo valor
// boasVindas = `Fala, Dev! Tudo beleza?!`;

// // constante não pode mudar o valor
// const serHumano = true;
// serHumano = false // Erro!

// Funções
// são agrupamentos de códigos que podem ser reutilizados:
// // usando uma função
// alert('Fala, Dev!')

// // criando uma função
// function alert(text) {
// 	return text
// }

// Objetos
// // usando uma função
// alert('Fala, Dev!')

// // criando uma função
// function alert(text) {
// 	return text
// }

// DOM
// É a modelagem dos nossos elementos HTML em Objeto JavaScript
// Posso controlar minha página, meu documento HTML, pelo JavaScript, através do objeto document
// document // objeto que existe em todo navegador
// .querySelector('a') // seleciona a tag a
// .click() // dá a ordem de clicar na tag a

// document.querySelector("input").click()
// querSelector quer dizer "documento, pesquisa o seletor input"

// Bibliotecas
// ReactNative, por exemplo, é uma para mobile
// React é uma das bibliotecas mais utilizadas
// Neste desafio vamos usar uma biblioteca da NWL Rocketseat


// Anotações explicação git (relembrando)
// inicia o git (repositório) no seu projeto
// git init 

// // adiciona todos os arquivos modificados, ao stage
// git add . 

// // cria e descreve um ponto na história
// git commit -m "message here" 

// envia alterações para o repositório remoto
// git push
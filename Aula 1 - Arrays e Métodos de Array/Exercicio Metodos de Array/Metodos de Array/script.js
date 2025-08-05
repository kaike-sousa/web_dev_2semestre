function executarPush() {
  const array = ['🍎', '🍌'];
  array.push("🍇")
  const resultado = array; //adicona no final do array
  document.getElementById('resultado-push').textContent = resultado;
} 

function executarPop() {
  const array = ['🍎', '🍌', '🍇'];
  array.pop(); //removo o ultimo elemento
  const resultado = array;
  document.getElementById('resultado-pop').textContent = resultado;
}

function executarShift() { 
  const array = ['🍎', '🍌', '🍇'];
  array.shift(); //remove o primeiro elemento do array
  const resultado = array;
  document.getElementById('resultado-shift').textContent = resultado;
}

function executarUnshift() {
  const array = ['🍌', '🍇'];
  array.unshift("🍎"); //adiciona um item no começo
  const resultado = array;
  document.getElementById('resultado-unshift').textContent = resultado;
}

function executarIncludes() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.includes('🥝'); //verifica se o item está na array, retorna true or false
  document.getElementById('resultado-includes').textContent = resultado;
}

function executarReverse() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.reverse(); 
  document.getElementById('resultado-reverse').textContent = resultado;
}

function executarSort() {
  const array = [3, 1, 4, 2, 11];
  const array2 = ["Brasil", "Argentina", "Noruega", "Italia"];

  // const resultado = array.sort(function(a, b){a - b}); //com numero precisa fazer uma gambiarra
  const resultado = array.sort((a, b) => b -a); // arrow function, simplifica
  document.getElementById('resultado-sort').textContent = resultado;
  const resultado2 = array2.sort()//.reverse(); //ordena por ordem alfabetica, funciona bem para string. Caso quisesse fazer reverso era só colocar o revers
  document.getElementById('resultado-sort2').textContent = resultado2;
}

function executarSlice() {
  const array = ['🍎', '🍌', '🍇', '🍓'];
  const resultado = array.slice(1,3); //corta um pedaço do array, no caso mantem a banana e a uva
  document.getElementById('resultado-slice').textContent = resultado;
}

function executarSplice() {
  const array = ['🍎', '🍌', '🍇'];
  array.splice(2, 1, 'olá mundo');// 2- posição que vai começar, quantos itens apartir dali ele ira cortar, a partir dali adiciona outra coisa
  const resultado = array;
  document.getElementById('resultado-splice').textContent = resultado;
}


function executarIndexOf() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.indexOf('🍇'); //retorna a posição em que tal elemento está
  document.getElementById('resultado-indexof').textContent = resultado;
}

function executarJoin() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.join('-'); //junta os elementos do array com tal elemento, no caso maça - banana - uva
  document.getElementById('resultado-join').textContent = resultado;
}

/* Loops de array */

function executarForEach() { 
  const array = ['🍎', '🍌', '🍇'];
  const resultado =  array.forEach((pegaItem, index) => {
    console.log(`O item ${index + 1} é o ${pegaItem}`);
  }); //para cada item do array ele executa uma ação designada, no caso mostrar no consol
  document.getElementById('resultado-foreach').textContent = resultado;
}

function executarMap() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.map((pegaItem) => `✅ ${pegaItem}`);
  document.getElementById('resultado-map').textContent = resultado;
}

function executarMapHTML() {
    const dispositivos = ['🎮', '🕹️', '💻'];
    const resultado = dispositivos.map(pegaItem =>
      `<h1> Item em promoção </h1> 
      <span>${pegaItem}</span>`
    );
    document.getElementById('resultado-map-html').innerHTML = resultado.join('<br>');
  }

function executarFilter() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.filter(pegaItem=> pegaItem === '🍎'); //filtra o item
  document.getElementById('resultado-filter').textContent = resultado;
}

function executarFind() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.find(pegaItem => pegaItem === '🍇'); //procura o item  e retorna true or false se estiver ou não
  document.getElementById('resultado-find').textContent = resultado;
}

function executarFindIndex() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.findIndex(pegaItem=> pegaItem === "🍇");
  document.getElementById('resultado-findIndex').textContent = resultado;
}

function executarReduce() {
  const array = [1, 2, 3, 4];
  const resultado = array.reduce((total, valorAtual) => total + valorAtual, 0); //reduz todos os valores dentro de uma array
  document.getElementById('resultado-reduce').textContent = resultado;
}

function executarEvery() {
  const array = [10, 20, 30, 40];
  const resultado = 'Resultado da operação every';
  document.getElementById('resultado-every').textContent = resultado;
}

function executarSome() {
  const array = ['🍎', '🍌', '🥝'];
  const resultado = 'Resultado da operação some';
  document.getElementById('resultado-some').textContent = resultado;
}

/* Encadeamento */

function executarEncadeamento() {
  const jogos = ['Zelda', 'Mario', 'Elden Ring', 'Fortnite', 'Minecraft'];
  const resultado = 'Resultado da operação encadeada';
  document.getElementById("resultado-encadeamento").textContent = resultado.join(', ') || 'Nenhum jogo encontrado';
}


//arrow function- tira a palavra function, substitui por const
const ordernar = (a,b) =>  b - a
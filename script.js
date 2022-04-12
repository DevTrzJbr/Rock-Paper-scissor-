// Contadores globais
let score = {
	player : 0,
	ia : 0,
	noOne : 0,
}




function gameRockPaperScissor(arg){
	const choices = ["Pedra", "Papel", "Tesoura"];

	// inputs
	let pChoice = arg;
	let iaChoice = (Math.floor(Math.random() * 3) + 1); 
		
	// resultado dos inputs
	let pResult = choices[pChoice - 1];
	let iaResult = choices[iaChoice - 1];

	// console.log(`Escolha do player: ${pResult}`);
	// console.log(`Escolha do IA: ${iaResult}`);

	let text = "";
	let winner = "";

	if (
		(	iaChoice == 1 && pChoice == 3) ||
		(	iaChoice == 2 && pChoice == 1) ||
		(	iaChoice == 3 && pChoice == 2)
	) {
		winner = "IA"
		text = `IA Win! ${pResult} é maior que ${iaResult}!`;
		score.ia++;
		console.log(`Contador IA ${score.ia}`);
	} else if (iaChoice == pChoice){
		winner = "NO ONE"
		text = `Deu empate! ${pResult} é igual a ${iaResult}!`;
		score.noOne++;
		console.log(`Contador Empate ${score.noOne}`);
	} else {
		winner = "PLAYER"
		text = `Player Win! ${pResult} é maior que ${iaResult}!`;
		score.player++;
		console.log(`Contador player ${score.player}`);
	}

	// console.log(text)
	
	// definição no HTML 
	document.getElementById("pChoice").innerHTML = pResult;
	document.getElementById("iaChoice").innerHTML = iaResult;
	document.getElementById("winner").innerHTML = winner;
	// document.getElementById("result").innerHTML = text;

	// score();

	updateTable();
	
	return winner;
}

function reset(){
	console.log(score.player, score.ia, score.noOne);
	score.player = 0;
	score.ia = 0;
	score.noOne = 0;
	console.log(score.player, score.ia, score.noOne);


	let text = `<h3>Sua escolha: <a id="pChoice"></a></h3>
		<h3>Escolha da ia: <a id="iaChoice"></a></h3>
		<h3>Ganhador: <a id="winner"></a></h3>
		<h4 id="result"></h4>`
		

	let element = document.getElementById('definitions').innerHTML = text;
	document.getElementById('tabela').innerHTML = " ";

	updateTable();

}

function criarTabela(conteudo) {
  var tabela = document.createElement("table");
  var thead = document.createElement("thead");
  var tbody=document.createElement("tbody");

	// Diferenciar quando cria Header cell e Data cell
  var thd=function(i){return (i==0)?"th":"td";};
	
  for (var i=0;i<conteudo.length;i++) {
    var tr = document.createElement("tr"); // tr -> table row
    for(var o=0;o<conteudo[i].length;o++){
      var t = document.createElement(thd(i)); // cria linha 
      var texto=document.createTextNode(conteudo[i][o]);
      t.appendChild(texto);
      tr.appendChild(t);
    }
		// Diferencia quando coloca no theader e no tbody
    (i==0)?thead.appendChild(tr):tbody.appendChild(tr);
  }
	// apenndChild anexa um nó no last elemento filho
  tabela.appendChild(thead);
  tabela.appendChild(tbody);
	console.log("Chamando função")
  return tabela;
}

function updateTable() {
	let scoreboard = [
  ["PLAYER", "IA",     "EMPATE"],
  [score.player,    score.ia,  score.noOne],
]
	var tableScore = document.getElementById("tabela").innerHTML = "";
	let initTable = document.getElementById("tabela").appendChild(criarTabela(scoreboard));
initTable
	}

function addRow(idTabela) {

    var item = document.getElementById('item').value.trim();
    var tabela = document.getElementById(idTabela);
    var numeroLinhas = tabela.rows.length;
    var linha;
    var celula1;
    var celula2;

    if (item !== "") {

        linha = tabela.insertRow(numeroLinhas);
        celula1 = linha.insertCell(0);
        celula2 = linha.insertCell(1);

        celula1.innerHTML = item;
        celula2.innerHTML = "<button class = \"btn btn-danger\" onclick='removeLinha(this)'>Remover</button>";

        document.getElementById('item').value = "";
        zebrarLista(celula1, celula2, numeroLinhas);

    }

}

// funcao remove uma linha da tabela
function removeLinha(linha) {
    var i = linha.parentNode.parentNode.rowIndex;
    document.getElementById('tabela').deleteRow(i);
}

/**
 * Pega os nomes e sorteia em outra tabela * 
 */
function getItens() {
    limparLista();
    var nomes = [];
    var tabela = document.getElementById('tabela');
    var numeroLinhas = tabela.rows.length;

    if (nomes == "") {
        for (var i = 1; i < numeroLinhas; i++) {
            nomes.push(tabela.rows[i].cells[0].innerText);
        }
    } else {
        nomes = [];
    }

    //Sorteia e mostra números inteiros
    //var indice = getRndInteger(1, nomes.length);
    var item = [];

    //var indice = getRandomInteger(0, nomes.length - 1);
    //Mostra apenas os números do intervalo do índice do array        
    var indice;
    for (var i2 = 0; i2 < nomes.length; i2++) {
        indice = Math.floor(Math.random() * nomes.length);
        item.push(nomes[indice]);
        item = unico(item);
    }

    //Verifica se possui ítens duplicados no array e remove
    //item = unico(item);
    if (item.length < nomes.length) {
        for (let i2 = 0; i2 < nomes.length; i2++) {
            indice = Math.floor(Math.random() * nomes.length);
            item.push(nomes[indice]);
            item = unico(item);
        }
    }

    getNomeSorteado("Nomes sorteados");

    //var item = nomes[Math.floor(Math.random() * nomes.length-1)];
    //var item = nomes[getRandomInteger(0, nomes.length-1)];
    //let funciona apenas no bloco
    for (let x = 0; x < item.length; x++) {
        let lista = document.getElementById("sorteio").innerHTML;
        lista = lista + "<h4><li class=\"list-group-item\">" + item[x] + "</li></h4>";
        document.getElementById("sorteio").innerHTML = lista;
    }

}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function limparLista() {
    var lista = document.getElementById("sorteio");
    //Pegar texto (lista.innerText)
    //Pega toda a linha com a tag
    //lista.innerHTML
    lista.innerText = "";
}

//Remove ítens duplicados do array
function unico(a) {
    var jaVisto = {};
    return a.filter(function (item) {
        return jaVisto.hasOwnProperty(item) ? false : (jaVisto[item] = true);
    });
}

//Zebrado
function zebrarLista(celula1, celula2, numeroLinhas) {
    //zebrado
    if (numeroLinhas > 0) {
        if (numeroLinhas % 2 == 1) {
            celula1.classList.add("bg-light");
            celula2.classList.add("bg-light");
        } else {
            celula1.classList.add("bg-white");
            celula2.classList.add("bg-white");
        }
    }
}

//Sorteia apenas um nome
function getUmNome() {
    limparLista();
    var nomes = [];
    var tabela = document.getElementById('tabela');
    var numeroLinhas = tabela.rows.length;

    if (nomes == "") {
        for (var i = 1; i < numeroLinhas; i++) {
            nomes.push(tabela.rows[i].cells[0].innerText);
        }
    } else {
        nomes = [];
    }

    //Mostra apenas os números do intervalo do índice do array  
    //Pega o índice e adiciona no array depois      
    var indice = Math.floor(Math.random() * nomes.length);

    let lista = document.getElementById("sorteio").innerHTML;
    lista = lista + "<h4><li class=\"list-group-item\">" + nomes[indice] + "</li></h4>";
    document.getElementById("sorteio").innerHTML = lista;
    getNomeSorteado("Nome sorteado");

}

//Altera o nome na tag
function getNomeSorteado(nome) {
    //Altera o nome na tag
    var titulo = document.getElementById("titulo").innerHTML;
    titulo = "<h3>" + nome + "</h3>";
    document.getElementById("titulo").innerHTML = titulo;
}

//Preenche as células da coluna
function preencher() {
    var tabela = document.getElementById('frequencia');
    var numeroLinhas = tabela.rows.length;
    for (var i = 1; i < numeroLinhas; i++) {
        //Adiciona 0 nas linhas de frequência
        tabela.rows[i].cells[1].innerText = "0";
    }
}
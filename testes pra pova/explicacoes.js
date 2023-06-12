function somaVetor(){
    let precos = []
    let soma = 0
    for(let i=0;i<10;i++){
        precos[i] = Number(prompt(`Informe ${i+1}o. preço`))
    }
    for(let i=0;i<10;i++){
        soma = soma + precos[i]
    }
    alert(`A média dos preços é ${soma/10}`)
}
// exercício 1 -> peça ao usuário para informar 10 números
// calcule e mostra a soma dos elementos pares
function exemplo1(){
    let vetor = []
    let soma =0
    for(let i=0;i<10;i++){
        vetor[i] = Number(prompt(`${i+1}o. preço`))
    }
    for(let i=0;i<10;i++){
        if (vetor[i] % 2 == 0){
            soma = soma + vetor[i]
        }
    }
    alert(`A soma é ${soma}`)
}
// exercício 2 -> peça ao usuário para informar 10 números
// calcule e mostra a soma dos elementos nas posições ímpares
function exemplo2(){
    let vetor = []
    let soma = 0
    for(let i=0;i<10;i++){
        vetor[i] = Number(prompt(`${i+1}o. preço`))
    }
    for(let i=0;i<10;i++){
        if (i % 2 == 1){
            soma = soma + vetor[i]
        }
    }
    alert(`Soma ${soma}`)
}

function exe1(){
    let vetor  = []
    // entrada de dados
    for(let i=0;i<6;i++){
        vetor[i] = Number(prompt(`Informe o ${i+1}o. elemento`))
    }
    // cria os vetores pares e impares
    let pares = []; let iPares = 0; // índice do vetor de pares
    let impares = []; let iImpares = 0 // índice do vetor de ímpares
    for(let i=0;i<6;i++){
        if (vetor[i] % 2 == 0) {
            pares[iPares] = vetor[i]
            iPares++ // incremento o índice do vetor de pares
        }
        else {
            impares[iImpares] = vetor[i]
            iImpares++ // incremento o índice do vetor de ímpares
        }
    }
    console.log(`Pares ${pares} Qtde: ${pares.length}`)
    console.log(`Ímpares ${impares} Qtde: ${impares.length}`)
}

function exe2(){
    let vetor = []
    for(let i=0;i<7;i++){
        vetor[i] = Number(prompt(`Informe o ${i+1}o. elemento`))
    }
    // cria os vetores novos
    let mult2 = [], mult3 = [], mult2e3 = []
    for(let i=0;i<7;i++){
        if ((vetor[i] % 2 == 0) && (vetor[i] % 3 == 0)){
            mult2e3.push(vetor[i])
            mult2.push(vetor[i])
            mult3.push(vetor[i])
        }
        else if (vetor[i] % 2 == 0){
            mult2.push(vetor[i])
        }
        else if (vetor[i] % 3 == 0){
            mult3.push(vetor[i])
        }
    }
    console.log(`Múltiplos de 2 ${mult2}`)
    console.log(`Múltiplos de 3 ${mult3}`)
    console.log(`Múltiplos de 2 e 3 ${mult2e3}`)
}

function exe3(){
    let codigos = []
    let estoque = []
    for(let i = 0;i < 5; i++){
        codigos[i] = Number(prompt(`Informe código do produto ${i+1}`))
        estoque[i] = Number(prompt(`Informe qtde em estoque do produto ${i+1}`))
    }
    let cliente = Number(prompt('Informe código do cliente'))
    while (cliente != 0 ) {
        let codigo = Number(prompt(`Informe o código do produto para compra`))
        let qtde = Number(prompt(`Informe qtde para compra`))
        // vamos procurar o código do produto
        let achou = false // não encontrei o produto
        for(let i=0; i<5;i++){
            if (codigo == codigos[i]){
                achou = true // achou
                if (estoque[i] >= qtde){ // tem em estoque
                    estoque[i] = estoque[i] - qtde
                    alert('Compra realizada com sucesso')
                }
                else {
                    alert('Compra não realizada, falta do produto')
                }
            }
        }
        // encerrou a procura
        if (!achou) { // não encontrou
            alert('Produto não encontrado')
        }
        cliente = Number(prompt('Informe outro código do cliente. Digite 0 para encerrar'))
    }
    console.log(`Estoque atualizado ${estoque}`)
}

function exe31(){
    let codigos = []
    let estoque = []
    for(let i = 0;i < 5; i++){
        codigos[i] = Number(prompt(`Informe código do produto ${i+1}`))
        estoque[i] = Number(prompt(`Informe qtde em estoque do produto ${i+1}`))
    }
    let cliente = Number(prompt('Informe código do cliente'))
    while (cliente != 0 ) {
        let codigo = Number(prompt(`Informe o código do produto para compra`))
        let qtde = Number(prompt(`Informe qtde para compra`))
        // vamos procurar o código do produto
        let achou = false // não encontrei o produto
        if (codigos.includes(codigo)){
                achou = true // achou
                // recupera posição do código do produto
                let posicao = codigos.indexOf(codigo)
                if (estoque[posicao] >= qtde){ // tem em estoque
                    estoque[posicao] = estoque[posicao] - qtde
                    alert('Compra realizada com sucesso')
                }
                else {
                    alert('Compra não realizada, falta do produto')
                }
        }
        // encerrou a procura
        if (!achou) { // não encontrou
            alert('Produto não encontrado')
        }
        cliente = Number(prompt('Informe outro código do cliente. Digite 0 para encerrar'))
    }
    console.log(`Estoque atualizado ${estoque}`)
}

function exe4(){
    // entrada de dados
    let vet = []
    for(let i=0;i<10;i++){
        vet[i] = Number(prompt(`Informe o ${i+1}o. elemento`))
    }
    // cria um vetor que guarda as posições do número 30
    let posicoes = []
    for(let i=0;i<10;i++){
        if (vet[i] == 30) {
            posicoes.push(i)
        }
    }
    alert(`Posições aonde o 30 aparecem ${posicoes}`)
}

function exe5(){
    let logica = []
    let linguagem = []
    let comum = []
    for(let i=0;i<10;i++){
        logica[i] = Number(prompt(`Informe o ${i}o. aluno que faz Lógica`))
    }
    for(let i=0;i<5;i++){
        linguagem[i] = Number(prompt(`Informe o ${i}o. aluno que faz Linguagem`))
    }
    // vamos verificar a intersecção
    for(let i=0;i<10;i++){
        if (linguagem.includes(logica[i])){
            comum.push(logica[i])
        }
    }
    alert(`Alunos que fazem as duas disciplinas ${comum}`)
}

function exe6(){
    let vendas = []
    let percentuais = []
    let nomes = []
    let comissoes = []
    for(let i=0;i<5;i++){
        vendas[i] = Number(prompt(`Informe venda do ${i+1} vendedor`))
        percentuais[i] = Number(prompt(`Informe % do ${i+1} vendedor`))
        nomes[i] = prompt(`Informe nome do ${i+1} vendedor`)
        // calcula comissão do vendedor
        comissoes[i] = (vendas[i] / percentuais[i]) * 100
    }
    // fazer cálculos 
    let total = 0
    let maior = comissoes[0]; let menor = comissoes[0]
    for(let i=0;i<5;i++){
        total = total + vendas[i]
        if (comissoes[i] > maior){
            maior = comissoes[i]
        }
        if (comissoes[i] < menor){
            menor = comissoes[i]
        }
    }
    console.log(`Valor total vendido ${total}`)
    console.log(`Maior valor ${maior} e quem recebe ${nomes[comissoes.indexOf(maior)]}`)
    console.log(`Menor valor ${menor} e quem recebe ${nomes[comissoes.indexOf(menor)]}`)

}

function codigoAlunoRepetido(){
    let codigos = []
    let nomes = []
    for(let i=0;i<5;i++){
        let codigo = Number(prompt('Informe um código de aluno'))
        // codigos tem todos os códigos
        // código tem o código digitado pelo usuário
        // includes verifica se código está dentro de códigos
        while (codigos.includes(codigo)) {
            codigo = Number(prompt('Código já existe, informe um novo'))
        }
        // como o código é novo, agora podemos inserir no vetor
        codigos[i] = codigo
        nomes[i] = prompt('Informe um nome de alulno')
    }
    console.log(codigos)
    alert(codigos)
    console.log(nomes)
    alert(nomes)
}
function exe7(){
    let vet = []
    let vnegativo = 0
    let vpositivo = 0
    let i 
    
    for( i=0; i<10;i++){
        vet[i]= Number(prompt(`informe Um numero`))
        if( vet[i]<0){
            vnegativo++
        }
        else{
            vpositivo = vpositivo + vet[i]
        }
        console.log(` Os valores negativos e de  ${vnegativo}. E a soma dos positivos e de:${vpositivo}`)
    }
    }
    //---------------------------------------------------------------------------------------------------------------------//
    function exe8(){
        let nome = []
        let media = []
        let i
        let nomemaiormedia
    
        for(i=0; i<10; i++){
            nome[i] = prompt(`Digite o nome do aluno ${i+1}`)
            media[i] = Number(prompt(`Digite a média final do aluno ${i+1}`))
        }
        let maiormedia = media[0]
        nomemaiormedia = nome[0]
        for(i=1;i<10;i++){
            if(media[i]>maiormedia){
                nomemaiormedia = nome[i]
                maiormedia = media[i]
            }
        }
        alert(`O aluno com a maior média foi o(a) ${nomemaiormedia}`)
        for(i=0;i<10;i++){
            if(media[i]<7){
                alert(`O aluno ${nome[i]} precisa tirar ${10 - media[i]}`)
            }
        }
    }
    //----------------------------------------------------------------------------------------------------------------------------//
    function exe9(){
        let nomeproduto = [];
    let cproduto = [];
    let precoproduto = [];
    let novopreco = [];
    let aumeto = [];
    let i;
    
    for (i = 0; i < 3; i++) {
      nomeproduto[i] = prompt(`Digite o nome do produto ${i+1}`);
      cproduto[i] = Number(prompt(`Digite o código do produto ${i+1}`));
      precoproduto[i] = Number(prompt(`Digite o preço do produto ${i+1}`));
    }
    
    for (i = 0; i < 3; i++) {
      if ((cproduto[i] % 2 === 0) && (precoproduto[i] > 1000)) {
        aumeto[i] = true;
        novopreco[i] = precoproduto[i] + (precoproduto[i] * 0.2);
      } else if (cproduto[i] % 2 === 0) {
        aumeto[i] = true;
        novopreco[i] = precoproduto[i] + (precoproduto[i] * 0.15);
      } else if (precoproduto[i] > 1000) {
        aumeto[i] = true;
        novopreco[i] = precoproduto[i] + (precoproduto[i] * 0.1);
      } else {
        aumeto[i] = false;
      }
    }
    
    for (i = 0; i < 3; i++) {
      if (aumeto[i]) {
        alert(`O produto (${nomeproduto[i]}), código: (${cproduto[i]}), sofreu um aumento de ${novopreco[i]}`);
      }
    }
    } 
    // EXERCICIO EXTRA( PROVAVEL DE CAIR NA PROVA)//
    function exaula(){
    let codigos = []
    let nomes = []


    for(let i = 0; i <= 2; i++){
        let aux = Number(prompt(`Informe o codigo do aluno: `))
        while(codigos.includes(aux)){
            aux = Number(prompt(`Codigo ja existe, insira um difetente`))
        }
        codigos[i] = aux
        nomes[i] = prompt(`Informe o nome do aluno: `)
    }
  //peça ao usuario para entrar com o código do aluno
  // mostrar o nome do aluno caso seja um codigo cadastrado
    let codigo = Number(prompt(`Informe um codigo`))
    let posicao = codigos.indexOf(codigo)
    if(posicao == -1){
        alert(`Codigo não esta presente no vetor`)
    }
    else{
        alert(`Nome do aluno é ${nomes[posicao]}`)
    }
}
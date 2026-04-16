
let nome = prompt("Informe o nome")
let renda_mensal = "@"
let qtd_despesas = "@"
let despesas = []
let msg = ""
function somatorio(array){
    soma = 0
    for(i = 0; i < array.length ;i++){
        soma += array[i]
    }
    return soma
}

while(isNaN(renda_mensal) && isNaN(qtd_despesas)){
    renda_mensal = parseFloat(prompt("Informe a renda mensal"))
    qtd_despesas = parseInt(prompt("Informe a quantidade de despesas"))
}

if (qtd_despesas > 5){
    qtd_despesas = 5
}else if(qtd_despesas < 1){
    qtd_despesas = 1
}

for(i = 0; i < qtd_despesas; i++){
    let valor = parseFloat(prompt(`Informe o valor das despesas (${i + 1}/5)`))
    despesas.push(valor)
}

let soma_renda = somatorio(despesas)


if(soma_renda > renda_mensal){
    msg = 'Você gastou mais do que ganhou!'
}else{
    if((renda_mensal - soma_renda) >= ((30 / 100) * renda_mensal)){
        msg ='Ótimo: boa margem de sobra'
    }else{
        msg = 'Ok: dá pra melhorar a sobra'
    }
}

alert(`Nome: ${nome}\nRenda: ${renda_mensal}\nDespesas: ${soma_renda.toFixed(2)}\nSobra: ${renda_mensal - soma_renda}\n${msg}`)
console.log(`Nome: ${nome}\nRenda: ${renda_mensal}\nDespesas: ${soma_renda.toFixed(2)}\nSobra: ${renda_mensal - soma_renda}\n${msg}`)
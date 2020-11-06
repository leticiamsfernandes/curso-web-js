/* Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

function identificaValor(idade) {
    let valor = 100

    if(idade < 10) {
        valor += 80
    } else if(idade <= 30) {
        valor += 50
    } else if (idade <= 60) {
        valor += 95
    } else {
        valor += 130
    }

    return valor
}

console.log(identificaValor(5))
console.log(identificaValor(25))
console.log(identificaValor(35))
console.log(identificaValor(65))
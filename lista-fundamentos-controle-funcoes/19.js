/* O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
 */

function calculaPagamento(codigo, quantidade) {
    switch(codigo) {
        case 100:
            return quantidade * 3.0
        case 200:
            return quantidade * 4.0
        case 300:
            return quantidade * 5.5
        case 400:
            return quantidade * 7.5
        case 500:
            return quantidade * 3.5
        case 600:
            return quantidade * 2.8
        default:
            return "Código do Produto Inválido"
    }
}

console.log(calculaPagamento(100, 2))
console.log(calculaPagamento(200, 2))
console.log(calculaPagamento(300, 2))
console.log(calculaPagamento(400, 2))
console.log(calculaPagamento(500, 2))
console.log(calculaPagamento(600, 2))
console.log(calculaPagamento(700, 2))
/* Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */
const divisao = (dividendo, divisor) => {
    console.log("Resultado: " + (dividendo / divisor) + 
                "\nResto: " + (dividendo % divisor))
}

divisao(10, 3)
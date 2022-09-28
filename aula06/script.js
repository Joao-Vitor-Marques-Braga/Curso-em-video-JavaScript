var nome = window.prompt('Qual seu nome?')
window.alert('É um prazer de conhecer,  ' + nome)   

var n1 = Number.parseInt(window.prompt('Digite um numero'))
var n2 = Number.parseInt(window.prompt('Digite outro numero'))
var resultado = n1 + n2
window.alert(`a soma entre ${n1} e ${n2} é = ${resultado}`)

document.write(`seu nome é ${nome}`)
document.write(`seu nome com letras maiusculas é: ${nome.toUpperCase()}`)
document.write(`seu nome com letras minusculas é: ${nome.toLowerCase()}`)
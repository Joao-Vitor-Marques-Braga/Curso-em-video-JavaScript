function somar(){
    var ns1 = window.document.getElementById('number1')
    var ns2 = window.document.getElementById('number2')
    var resultado = window.document.getElementById('res')
    var n1 = Number(ns1.value)
    var n2 = Number(ns2.value)
    var soma = n1+n2
    resultado.innerText = `A soma entre os números informados é: ${soma}`
}
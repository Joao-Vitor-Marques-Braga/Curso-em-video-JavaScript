function contar(){
    var inicio = window.document.getElementById('init')
    var fim = window.document.getElementById('end')
    var passo = window.document.getElementById('pass')
    var resultado = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam Dados para executar o código')
    } else {
        resultado.innerHTML = 'Contando'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido!')
        }

        if (i < f){
            for(var contador = i ; contador <= f; contador += p){
                resultado.innerHTML += `${contador} \u{1F449}`
            }
            
        } else {
            for(var contador = i ; contador >= f; contador -= p){
                resultado.innerHTML += `${contador} \u{1F449}`
            }
        }
        resultado.innerHTML += `${contador} \u{1F3C1}`
    }
}
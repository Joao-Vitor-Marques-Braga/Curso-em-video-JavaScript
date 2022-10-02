function tabuada(){
    var numero = document.getElementById('txtn')
    var tabuada = document.getElementById('seltab')
    if (numero.value.length == 0){
        window.alert('Por Favor, digite um número!')
    } else{
        var n = Number(numero.value)
        var contador = 1
        tabuada.innerHTML = ''
        while(contador <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${contador} = ${n*contador}`
            tabuada.appendChild(item)
            contador++
        }
    }
}

function verificar(){
    var radar = window.document.getElementById('vel1')
    var resultado = window.document.getElementById('res')
    var valorradar = Number(radar.value)

    if (valorradar > 60){
        resultado.innerText = 'Resultado: Velocidade acima dos limites da via, você acaba de ser multado!'
    }

    else{
        resultado.innerText = 'Resultado: Velocidade dentro dos limites da via. Dirija com cuidado!'
    }
}
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('age')
    var res = document.getElementById('result')

    if (fano.value.length == 0 || fano.value > ano) {
        window.aleret ('[ERRO] Confira os dados e informe-os novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'imagens/criança.jpg')
            } else if (idade <21){
                //jovem
                img.setAttribute('src', 'imagens/jovem m.jpg')
            } else if (idade <50){
                //adulto
                img.setAttribute('src', 'imagens/Adulto M.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso M.jpg')
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'imagens/criança')
            } else if (idade <21){
                //jovem
                img.setAttribute('src', 'imagens/jovrm f.jpg')
            } else if (idade <50){
                //adulto
                img.setAttribute('src', 'imagens/Adulto F.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso F.jpg')
            }
        }
        img.style
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
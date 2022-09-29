var a = window.document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', out)

function clicar(){
    a.innerText = 'inetagiu'
    a.style.background = 'blue'
}

function entrar(){
    a.innerText = 'entrou'
    a.style.background = '#0080004d'
}

function out(){
    
    a.innerText = 'Interaja...'
    a.style.background = 'green'
}
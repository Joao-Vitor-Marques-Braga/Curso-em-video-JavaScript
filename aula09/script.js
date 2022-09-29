// por marca
var p1 = window.document.getElementsByTagName('p')[0]
window.document.write('é o testas: ' + p1.innerText)

//por id
/*
var d = window.document.getElementById('msg')
d.style.background = 'green'
d.innerText = 'Estou aguardando..'
*/
//por name
var e = window.document.getElementsByName('psg')[0]
e.innerText = 'Olá Mundo'

//por classe
var c = window.document.getElementsByClassName('nsg')
c.innerText='hello word'

//por seletor
var a = window.document.querySelector('div#msg')
a.style.background = 'blue'
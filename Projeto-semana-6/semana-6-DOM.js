console.log("document:",document)
console.log("document.head:",document.head)
//ID
console.log("pega um elemento pelo id:", document.getElementById('titulo'))
const titulo = document.getElementById('titulo');
console.log("titulo:", titulo)

//CLASSE
const titulo2 = document.getElementsByClassName('titulo-2');
console.log("pega o elemento pela classe:", titulo2[0])

//TAG

const titulo3 = document.getElementsByTagName('h1');
console.log("pega o elemento pela tag html:", titulo3[0])

//querySelector
const titulo4 = document.querySelector('#titulo')
console.log("pega o elemento pelo querySelector:", titulo4)

//querySelectorAll
const titulo5 = document.querySelector('ul')
console.log("pega o elemento pelo querySelector:", titulo5)

//Alterando Elementos
titulo.textContent= "Semana 6 - DOM"

const botao = document.querySelector('#botao')
console.log("botao:",botao)

botao.style.backgroundColor="blue"
botao.style.color="white"

//Manipulação de eventos ( ação)
botao.addEventListener('click',function(){
    alert('Botao Clicado');
})

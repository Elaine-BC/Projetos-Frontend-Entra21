document.getElementById('adicionar-button').addEventListener('click', function(){
const input = document.getElementById('Interesses');
console.log(input)
const valorInput = input.value.trim();
console.log(valorInput);

if(valorInput){
    const ItemLista = document.createElement('li');
    ItemLista.textContent = valorInput;
    document.getElementById('lista-interesses').appendChild(ItemLista);
    input.value = '';
}
});

document.getElementById('limpar-button').addEventListener('click', function(){  
    document.getElementById('lista-interesses').innerHTML='';
    
});

//FUNÇÕES
// Sem parametros
function fazerCafe(){
const café ="café";
const açucar ="açucar";
const agua = "agua";
return console.log(`ingredientes para faer café: ${café}, ${açucar}, ${agua}`);
//return console.log ('ingredientes para fazer café:' +café+ ',' +açucar+ ',' +agua);
}

fazerCafe();

//Com parametros
function fazerCafeComLeite(café, leite){
    return console.log(`ingredientes para faer café com leite: ${café}, ${leite}`);
//return console.log ('ingredientes para fazer café com leite:' +café+ ',' +leite);
}

fazerCafeComLeite('café', 'leite');
 
//Funçoes anonimas

const fazerCafeComLeite2 = function(café,leite){

    return console.log(`ingredientes para faer café com leite: ${café}, ${leite}`);
 //return console.log ('ingredientes para fazer café com leite:' +café+ ',' +leite);   
}
fazerCafeComLeite2('café','leite');

//Arrow function
const fazerCafeComLeite3 = (café, leite) => {
    return console.log(`ingredientes para faer café com leite: ${café}, ${leite}`);
    //return console.log ('ingredientes para fazer café com leite:' +café+ ',' +leite);
}
fazerCafeComLeite3('café','leite');
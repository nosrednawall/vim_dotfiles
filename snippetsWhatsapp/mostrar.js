clearTimeout(esconderFunc)

let lista_imagem = document.getElementsByClassName('rlUm6');
let lista_nomes = document.getElementsByClassName('_1hI5g');

for (let i=0; i<lista_imagem.length; i++){
    lista_imagem[i].style.visibility = 'visible';
}

for (let i=0; i<lista_nomes.length; i++){
    lista_nomes[i].innerHTML = lista_nomes[i].title;
}

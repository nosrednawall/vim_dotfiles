let esconderFunc;

function esconder(){

    let lista_imagem = document.getElementsByClassName('rlUm6');
    let lista_nomes = document.getElementsByClassName('_1hI5g');
    let lista_nomes_spam = document.getElementsByClassName('_2Gdma'); 
    let lista_nomes_spam_mensagem = document.getElementsByClassName('_19038'); 
    let lista_Imagens_mensagens = document.getElementsByClassName('_1kqM'); 



    for (let i=0; i<lista_Imagens_mensagens.length; i++){
        //lista_Imagens_mensagens[i].style.visibility = 'hidden';
        lista_Imagens_mensagens[i].style.visibility = 'visible';
        lista_Imagens_mensagens[i].src = "https://knowyourmeme.com/photos/1176251";
        //lista_Imagens_mensagens[i].src = "https://www.sololearn.com/Icons/Avatars/6299654.jpg";
    }

        for (let i=0; i<lista_imagem.length; i++){
        //lista_imagem[i].style.visibility = 'hidden';
        lista_imagem[i].style.visibility = 'visible';
        //lista_imagem[i].src = "https://knowyourmeme.com/photos/1176251";
        lista_imagem[i].src = "https://www.sololearn.com/Icons/Avatars/6299654.jpg";
    }

    for (let i=0; i<lista_nomes.length; i++){
        lista_nomes[i].innerHTML = 'Você foi Hackeado';
    }


    for (let i=0; i<lista_nomes_spam.length; i++){
        lista_nomes_spam[i].innerHTML = 'Hacker';
    }

    for (let i=0; i<lista_nomes_spam_mensagem.length; i++){
        lista_nomes_spam_mensagem[i].innerHTML = 'HackerMan';
    }

    esconderFunc = setTimeout(function(){
        esconder(), 1000
    });
}

esconder()

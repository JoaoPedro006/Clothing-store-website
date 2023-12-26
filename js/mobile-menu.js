$(function(){

    $('div.icon-menu img').click(function(){
        $('header div.mobile').slideToggle(function(){
        });
    });

    $('div.icon-menu img').click(function(){
        $('.parte-1').slideToggle();
    });
        
    $('.1').hover(function(){
        $('.b1 button').slideToggle();
    })
    $('.2').hover(function(){
        $('.b2 button').slideToggle();
    })
    $('.3').hover(function(){
        $('.b3 button').slideToggle();
    })
    $('.4').hover(function(){
        $('.b4 button').slideToggle();
    })
    
    $('.link').click(function(){
        location.href = "https://www.linkedin.com/in/jo%C3%A3o-pedro-maia-pinheiro-23532a269/"
    });
    $('.git').click(function(){
        location.href = "https://github.com/JoaoPedro006?tab=repositories/"
    });
    })

// Se quiser fazer o menu responsivo com JS puro sem JQuery é só trocar o código acima por esse:

/*function home(){
    const video = document.querySelector('section-one');
    let menumobile = document.querySelector('.mobile');
    if(menumobile.classList.contains('abrir')){
        menumobile.classList.remove('abrir');
        document.querySelector('.icon').src = 'Img/menu-hamburguer.svg';
    } else{
        menumobile.classList.add('abrir');
        document.querySelector('.icon').src = 'Img/home.svg';
        video.classList.add('v');
    }
    
}*/
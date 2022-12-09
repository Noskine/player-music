const TituloCard = document.querySelector('.legends-card :nth-child(2)');
const CardOpen = document.querySelector('#openCardCredits');


// Textos //
TituloCard.innerHTML = 'Olá, Bem vindo. <br><br> Esse projeto demandou alguns esforços já que é meu primeiro proejto web, bem simples, mas foi feito em um momento um pouco díficil da minha vida. <br><br> Aproveite pra estudar o código! 👨🏿‍💻';

function ClickOn(){
    CardOpen.classList.toggle('active');
}

function loading(){
    window.document.loading
}
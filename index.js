let musicas = [
    {
    artista: 'M4 GRINTANDO MEU NOME', 
    titulo: 'Teto - feat Matuê', 
    src: './assets/musics/Teto - M4.mp3'},

    {
    artista: 'WANT YOU', 
    titulo: 'Vendredi & Sterkøl', 
    src: '/assets/musics/Want You.mp3'},

    {
    artista: "I'M JUST GOOD", 
    titulo: 'Johny Grimes', 
    src: '/assets/musics/Im Just.mp3'
    },

];

// Variavies
let musica = document.querySelector('audio');
const play = document.querySelector('#play')
const pause = document.querySelector('#pause');
const animation = document.querySelector('.content-barras');

const Anterior = document.querySelector('#anterior');
const Proximo = document.querySelector('#proximo');

let titleMusic = document.querySelector('#title');
let nameMusic = document.querySelector('#musica');

let indexMusica = 0;

let duracao = document.querySelector('.end');
RenderMusic(indexMusica);

// Musicas
Anterior.addEventListener('click', () => {
    indexMusica--;
    RenderMusic(indexMusica);
});
Proximo.addEventListener('click', () => {
    indexMusica++;
    RenderMusic(indexMusica);
});

function RenderMusic(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        duracao.textContent = segundosTemp(Math.floor(musica.duration));
        titleMusic.innerHTML= musicas[index].artista;
        nameMusic. innerHTML = musicas[index].titulo;
    });
    PausedMusic();
    PlayMusic();
}


// Eventos
musica.addEventListener('timeupdate', atualizando);
play.addEventListener('click', PlayMusic);
// Funções
function PlayMusic(){
    musica.play();
    pause.style.display = 'block';
    play.style.display = 'none';   
    animation.style.opacity = '1'; 
}

pause.addEventListener('click', PausedMusic);

function PausedMusic(){
    musica.pause();
    pause.style.display = 'none';
    play.style.display = 'block';  
    animation.style.opacity = '0'; 
}

function atualizando(){
    let Barra = document.querySelector('.barra-deaudio');
    Barra.style.width = ((musica.currentTime / musica.duration) * 100) + '%';
    let tempCorrid = document.querySelector('.start');
    tempCorrid.textContent = segundosTemp(Math.floor(musica.currentTime));
}

function segundosTemp(segundos){
    let campMinuts = Math.floor(segundos/60);
    let campSegunds = segundos % 60;
    if (campSegunds < 10){
        campSegunds = '0' + campSegunds;
    }

    return campMinuts+':'+campSegunds;
}






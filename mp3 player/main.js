let audioElement = document.createElement('audio');
document.body.appendChild(audioElement);
const playBtn = document.querySelector('.play-btn');
const prevEl = document.getElementById('prev');
const nextEl = document.getElementById('next');
const cover = document.getElementById('cover');
const speedEl = document.getElementById('speed');
const volumeEl = document.getElementById('volume');
const durationEl = document.getElementById('duration');
const currentTimeEl = document.getElementById('current-time');
const progressEl = document.querySelector('.progress');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progressContainerEl = document.querySelector('.progress-container');
const songs = [
    {
        title: 'song 1', artist: 'artist 1', src: './Digfeer iyo Sahra Ilays.mp3', cover: 'https://placehold.co/250/000000/FFF'
    },
    {
        title: 'world cup song 2010', artist: 'shakira song', src: 'Shakira - Waka Waka.mp3', cover: 'https://placehold.co/250/2b2921/ebc934'
    },
    {
        title: 'world cup song', artist: 'Keynaan waving flag', src: 'keynaan waving flag song.mp3', cover: 'https://placehold.co/250/purple/white'
    },
    {
        title: 'song 4', artist: 'song 4',  src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', cover: 'https://placehold.co/250/green/white'
    },
    {
        title: 'song 5', artist: 'song 5', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', cover: 'https://placehold.co/250/black/white'
    },
];
const songsId = songs.map(song =>({
    song,
    id : crypto.randomUUID()
}));
console.log(songsId); 
let isPlaying = false;
let songIndex = 0;
let speed = 1;
function loadSongs(song){
    title.textContent = song.title;
    artist.textContent = song.artist;
    cover.src = song.cover;
    audioElement.src = song.src;
}
loadSongs(songs[songIndex]);
function playSong(){
    playBtn.querySelector('i').classList.remove('fa-play');
    playBtn.querySelector('i').classList.add('fa-pause');
    audioElement.play();
    isPlaying = true;
}
function pauseSong(){
    playBtn.querySelector('i').classList.remove('fa-pause');
    play.querySelector('i').classList.add('fa-play');
    audioElement.pause();
    isPlaying = false
}
function nextSong(){
    pauseSong();
    setTimeout(()=>{
        songIndex++;
        if(songIndex > songs.length -1){
        songIndex = 0;
    }
    loadSongs(songs[songIndex]);
    playSong();
    },300)
}
function prevSong(){
    pauseSong();
    setTimeout(() => {
        songIndex--;
        if(songIndex < 0){
            songIndex = songs.length -1;
        }
        loadSongs(songs[songIndex])
        playSong();
    }, 300);
}
function updateProgress(e){
    // console.log(e.srcElement.duration)
    // console.log(e.srcElement.currentTime)

    let {duration,currentTime} = e.target;
    if(isNaN(duration)) return;
    const progressPercentage = (currentTime / duration) * 100;
    progressEl.style.width = `${progressPercentage}%`

    const totalMin = Math.floor(duration / 60);
    let totalsec = Math.floor (duration % 60);
    if(totalsec <= 9){
        totalsec = `0${totalsec}`
    }
    let durationMin = Math.floor(currentTime / 60);
    let durationSec = Math.floor(currentTime % 60);
    if(durationSec <= 9){
        durationSec = `0${durationSec}`
    }
    durationEl.textContent = `${totalMin}:${totalsec}`
    currentTimeEl.textContent = `${durationMin}:${durationSec}`
    audioElement.playbackRate = speed;
}
function setProgress(e){
    const totalWidth = this.clientWidth;
    const offSetX = e.offsetX;
    console.log(totalWidth)
    console.log('client width',offSetX)
    const duration = audioElement.duration;

    const currentTime = (offSetX / totalWidth) * duration;
    console.log(currentTime);
    audioElement.currentTime = currentTime;
}
playBtn.addEventListener('click',()=>{
    if(isPlaying){
        pauseSong();
    }else{
        playSong();
    }
});
nextEl.addEventListener('click',nextSong);
prevEl.addEventListener('click', prevSong);
audioElement.addEventListener('timeupdate', updateProgress);
progressContainerEl.addEventListener('click', setProgress);
volumeEl.addEventListener('input',(e)=>{
    audioElement.volume = e.target.value;
});
speedEl.addEventListener('click',(e)=>{
    speed = parseFloat(e.target.value);
    audioElement.playbackRate = speed;
});
audioElement.addEventListener('ended',nextSong);
audioElement.addEventListener('loadeddata',updateProgress);
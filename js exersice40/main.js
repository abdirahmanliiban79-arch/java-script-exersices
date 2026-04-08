let videoPlayer = document.querySelector('.video-player')
const playBtn = document.querySelector('.play-btn');
const prevEl = document.getElementById('prev');
const nextEl = document.getElementById('next');
const speedEl = document.getElementById('speed');
const volumeEl = document.getElementById('volume');
const durationEl = document.getElementById('duration');
const currentTimeEl = document.getElementById('current-time');
const progressEl = document.querySelector('.progress');
const title = document.getElementById('video-title');
const artist = document.getElementById('video-artist');
const progressContainerEl = document.querySelector('.progress-container');

const videos = [
    { artist: 'Arsenal channel', title: 'Arsenal vs Southampton', src: './Arsenal vs Southampton.mp4', },
    { artist: 'Intertaiment Tonight', title: 'About family Intertaiment Tonight', src: './videoplayback.1.mp4', },
    { artist: 'Intertaiment Tonight', title: 'Report about Intertaiment Tonight', src: './Report about Intertaiment Tonight.mp4', }
];
let videoIndex = 0;
let isPlaying = false;
let speed = 1;

let videoEl;
videoEl = document.createElement('video');
videoEl.className = 'video'
videoPlayer.appendChild(videoEl);
function loadVideos(video) {
    title.textContent = video.title;
    artist.textContent = video.artist;
    videoEl.src = video.src;
}
loadVideos(videos[videoIndex])
function playVideo() {
    playBtn.querySelector('i').classList.remove('fa-play');
    playBtn.querySelector('i').classList.add('fa-pause');
    videoEl.play();
    isPlaying = true;
}
function pauseVideo() {
    playBtn.querySelector('i').classList.remove('fa-pause')
    playBtn.querySelector('i').classList.add('fa-play')
    videoEl.pause();
    isPlaying = false;
}

function nextVideo() {
    pauseVideo();

    setTimeout(() => {
        videoIndex++;
        if (videoIndex > videos.length - 1) {
            videoIndex = 0;
        }

        loadVideos(videos[videoIndex])
        playVideo();
    }, 300);
}

function prevVideo() {
    pauseVideo();
    setTimeout(() => {
        videoIndex--;
        if(videoIndex < 0){
            videoIndex = videos.length -1
        }
        loadVideos(videos[videoIndex])
        playVideo();
    }, 350)


}
function updateProgress(e){
    let {duration,currentTime} = e.target;
    if(isNaN(duration)) return
    const progressPercentage = (currentTime / duration) * 100;
    progressEl.style.width = `${progressPercentage}%`
    const totalMin = Math.floor(duration / 60);
    let totalSec = Math.floor(duration % 60);
    durationEl.textContent = `${totalMin}:${totalSec}`
    if(totalSec<= 9){
        totalSec = `0${totalSec}`
    };
    const durationMin = Math.floor(currentTime / 60);
    let durationSec = Math.floor(currentTime % 60);
    if(durationSec <= 9){
        durationSec = `0${durationSec}`
    };
    currentTimeEl.textContent = `${durationMin}:${durationSec}`
};
function setProgress(e){
    const width = this.clientWidth
    const offsetx = e.offsetX
    const duration = videoEl.duration;

    const currentTime = (offsetx / width) * duration;
    videoEl.currentTime = currentTime;
    videoEl.playbackRate = speed;
}


// events 
playBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseVideo()
    } else {
        playVideo()
    }
})
nextEl.addEventListener('click', nextVideo);
prevEl.addEventListener('click',prevVideo);
videoEl.addEventListener('timeupdate',updateProgress)
progressContainerEl.addEventListener('click',setProgress)

volumeEl.addEventListener('input',(e)=>{
    videoEl.volume = e.target.value;
})
speedEl.addEventListener('change', (e)=>{
    speed = parseFloat(e.target.value);
    videoEl.playbackRate = speed;
});
videoEl.addEventListener('loadeddata',updateProgress)
videoEl.addEventListener('ended',nextVideo)
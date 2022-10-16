let songindex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('giffy');
//let currentSong = getElementById('currentsong');
let songItems = Array.from(document.getElementsByClassName('songitem'))

let songs =
  [
    { songName: "Warriyo - Mortal", filePath: "songs/1.mp3", coverPath: "covers/cover1.jpg" },
    { songName: "Counting Stars", filePath: "songs/2.mp3", coverPath: "covers/cover2.jpg" },
    { songName: "Cielo Remix", filePath: "songs/3.mp3", coverPath: "covers/cover3.jpg" },
    { songName: "Invincible - NCS", filePath: "songs/4.mp3", coverPath: "covers/cover4.jpg" },
    { songName: "Heaven lie", filePath: "songs/5.mp3", coverPath: "covers/cover5.jpg" },
    { songName: "Heroes Tonight", filePath: "songs/6.mp3", coverPath: "covers/cover6.jpg" },
    { songName: "Let Her Go", filePath: "songs/7.mp3", coverPath: "covers/cover7.jpg" },
    { songName: "Avici-The Night", filePath: "songs/8.mp3", coverPath: "covers/cover8.jpg" },
  ]


songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
  let time = new Audio('songs[i].filePath');
  element.getElementsByClassName("timestamp")[0].innertext = time.duration;
})


//handle play/pause click


masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
  }
  else {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
  }
})


//listen to Event


audioElement.addEventListener('timeupdate', () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress
})



myProgressBar.addEventListener('change', () => {
  audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})




const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
  })
}



Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
  element.addEventListener('click', (e) => {
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
    masterPlay.classList.remove(fa - circle - play);
    masterPlay.classList.add(fa - circle - pause);
  })
})




document.getElementById('next').addEventListener('click', () => {
  if (songindex >= 8) 
  {
    songindex = 0;
  }
  else 
  {
    songindex += 1;
  }
  audioElement.src = `songs/${songindex}.mp3`;
  //song.innerText = songs[songindex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove(fa-circle-play);
  masterPlay.classList.add(fa-circle-pause);
})

document.getElementById('previous').addEventListener('click', () => {
  if (songindex <= 0) 
  {
    songindex = 7;
  }
  else 
  {
    songindex -= 1;
  }
  audioElement.src = `songs/${songindex}.mp3`;
  //mastersong.innerText = songs[songindex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove(fa-circle-play);
  masterPlay.classList.add(fa-circle-pause);
})

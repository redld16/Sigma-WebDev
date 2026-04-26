let currentSong = new Audio();
let songs;
let currFolder;

function convertSecondsToMinSec(totalSeconds) {
  // Input validation: ensure it's a non-negative number
  if (
    typeof totalSeconds !== "number" ||
    totalSeconds < 0 ||
    isNaN(totalSeconds)
  ) {
    return "00:00"; // Return "00:00" for invalid input
  }

  // Round up to the nearest whole second if there's a fraction
  const roundedSeconds = Math.ceil(totalSeconds);

  const minutes = Math.floor(roundedSeconds / 60);
  const seconds = roundedSeconds % 60;

  // Format minutes and seconds to always be two digits, padding with '0' if necessary
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

async function getSongs(folder) {
  currFolder = folder;

  let data = await fetch(`/${folder}/`);
  let response = await data.text();
  let div = document.createElement("div");
  div.innerHTML = response;

  let a = div.getElementsByTagName("a");

  songs = [];

  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split(`/${folder}/`)[1]);
    }
  }
  let songUL = document
    .querySelector(".songList")
    .getElementsByTagName("ul")[0];

  songUL.innerHTML = "";

  //show all the songs in the playlist
  for (const song of songs) {
    songUL.innerHTML =
      songUL.innerHTML +
      ` <li><img src="img/music.svg" width="34" class="invert" alt="" />
              <div class="info">
                <div>${song.replaceAll("%20", " ")}</div>
                <div>artist</div>
              </div>
              <div class="playnow">
                <span>Play now</span>
                <img src="img/play.svg" class="invert" alt="" />
              </div>
            </li>`;
  }
  // attach event listner to each song
  Array.from(
    document.querySelector(".songList").getElementsByTagName("li")
  ).forEach((e) => {
    e.addEventListener("click", () => {
      playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
    });
  });
  return songs;
}

function playMusic(track, pause = false) {
  currentSong.src = `/${currFolder}/` + track;
  if (!pause) {
    currentSong.play();
    play.src = "img/pause.svg";
  }
  document.querySelector(".songInfo").innerHTML = decodeURI(track);
  document.querySelector(".songTime").innerHTML = "00:00/00:00";
}

async function displayAlbum() {
  let data = await fetch(`/songs/`);
  let response = await data.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let anchors = div.getElementsByTagName("a");

  let array = Array.from(anchors);
  for (let index = 0; index < array.length; index++) {
    let e = array[index];

    if (e.href.includes("/songs") && !e.href.includes(".htaccess")) {
      let folder = e.href.split("/").splice(-2)[0];
      console.log(folder);
      let data = await fetch(`/songs/${folder}/info.json`);
      let response = await data.json();
      let cardContainer = document.querySelector(".cardContainer");
      cardContainer.innerHTML += `  <div data-folder="${folder}" class="card">
              <div class="play">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 20V4L19 12LP 20Z"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  >
                </path>
                </svg>
              </div>
              <img src= "/songs/${folder}/cover.jpg" alt="" />
              <h3>${response.title}</h3>
              <p>${response.description}</p>
            </div>`;
    }
  }
  //load the playlist when click on card
  Array.from(document.getElementsByClassName("card")).forEach((e) => {
    e.addEventListener("click", async (item) => {
      songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`);
      playMusic(songs);
    });
  });
}

async function main() {
  //getsongs
  await getSongs(`songs/cs`);
  playMusic(songs[0], true);

  //display all albums on page
  displayAlbum();

  // attach the event listner to next,play and previous
  play.addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      play.src = "img/pause.svg";
    } else {
      currentSong.pause();
      play.src = "img/play.svg";
    }
  });

  //listen for time update event
  currentSong.addEventListener("timeupdate", () => {
    document.querySelector(".songTime").innerHTML = `${convertSecondsToMinSec(
      currentSong.currentTime
    )} / ${convertSecondsToMinSec(currentSong.duration)}`;
    document.querySelector(".circle").style.left =
      (currentSong.currentTime / currentSong.duration) * 100 + "%";
  });

  //listen to seekbar
  document.querySelector(".seekbar").addEventListener("click", (e) => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    currentSong.currentTime = (currentSong.duration * percent) / 100;
  });

  //add event listner for hamburger
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".sidebar").style.left = "0";
  });

  //add event listner for close
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".sidebar").style.left = "-120%";
  });

  //add event listner for previous
  previous.addEventListener("click", (e) => {
    let index = songs.indexOf(currentSong.src.split("/").splice(-1)[0]);
    if (index - 1 >= 0) {
      playMusic(songs[index - 1]);
    }
  });

  //add event listner for next
  next.addEventListener("click", (e) => {
    currentSong.pause();
    let index = songs.indexOf(currentSong.src.split("/").splice(-1)[0]);
    if (index + 1 < songs.length) {
      playMusic(songs[index + 1]);
    }
  });

  //add event listner to volume
  document
    .querySelector(".range")
    .getElementsByTagName("input")[0]
    .addEventListener("change", (e) => {
      currentSong.volume = parseInt(e.target.value) / 100;
      if (currentSong.volume > 0) {
        document.querySelector(".volume>img").src = document
          .querySelector(".volume>img")
          .src.replace("mute.svg", "volume.svg");
      }
    });

  //add event listner to mute
  document.querySelector(".volume>img").addEventListener("click", (e) => {
    if (e.target.src.includes("volume.svg")) {
      e.target.src = e.target.src.replace("volume.svg", "mute.svg");
      currentSong.volume = 0;
      document
        .querySelector(".range")
        .getElementsByTagName("input")[0].value = 0;
    } else {
      e.target.src = e.target.src.replace("mute.svg", "volume.svg");
      currentSong.volume = 50 / 100;
      document
        .querySelector(".range")
        .getElementsByTagName("input")[0].value = 50;
    }
  });
}

main();

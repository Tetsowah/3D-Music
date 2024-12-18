document.addEventListener("DOMContentLoaded", () => {
    const songs = [
        {
            id: 1,
            songTitle: "09 Ballin",
            artist: "09 Ballin_ (feat. Roddy Rich)",
            filePath: "./music/09 Ballin_ (feat. Roddy Rich).mp3",
            imagePath: "./music/pexels-dmitry-demidov-515774-3774606.jpg"
        },
        {
            id: 2,
            songTitle: "347 Aidan",
            artist: "Artist Name",
            filePath: "./music/347aidan-Memories-(TrendyBeatz.com).mp3",
            imagePath: "./music/pexels-karolina-grabowska-4968498.jpg"
        },
        {
            id: 3,
            songTitle: "ArrDee-Locker",
            artist: "Artist Name",
            filePath: "./music/ArrDee-Locker_-_Soloplay.ng.mp3",
            imagePath: "./music/pexels-matthiasgroeneveld-4200747.jpg"
        }
    ];

    let currentSongIndex = 0;
    const playButton = document.querySelector(".icons-section button:nth-child(2) img");
    const pauseButton = document.querySelector(".icons-section button:nth-child(3) img");
    const skipNextButton = document.querySelector(".icons-section button:nth-child(4) img");
    const skipPreviousButton = document.querySelector(".icons-section button:nth-child(1) img");

    const volumeButton = document.getElementById('volume-button');
    const volumeSlider = document.getElementById('volume-slider');
    const volumeSliderContainer = document.querySelector('.volume-slider-container');

    const audio = new Audio(songs[currentSongIndex].filePath);
    const musicImg = document.querySelector(".music-img img");

    const updateSongDetails = () => {
        document.querySelector(".song-title").textContent = songs[currentSongIndex].songTitle;
        document.querySelector(".song-name").textContent = `- ${songs[currentSongIndex].artist}`;
        audio.src = songs[currentSongIndex].filePath;
        musicImg.src = songs[currentSongIndex].imagePath;
    };

    playButton.addEventListener("click", () => {
        audio.play();
    });

    pauseButton.addEventListener("click", () => {
        audio.pause();
    });

    skipNextButton.addEventListener("click", () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        updateSongDetails();
        audio.play();
    });

    skipPreviousButton.addEventListener("click", () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        updateSongDetails();
        audio.play();
    });

    const rangeInput = document.querySelector("input[type='range']");
    rangeInput.addEventListener("input", () => {
        audio.currentTime = (rangeInput.value / 100) * audio.duration;
    });

    audio.addEventListener("timeupdate", () => {
        rangeInput.value = (audio.currentTime / audio.duration) * 100;
    });

  
    updateSongDetails();
});
volumeButton.addEventListener('click', () => {
    volumeSliderContainer.classList.toggle('active');
});

volumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

document.addEventListener('click', (e) => {
    if (!volumeSliderContainer.contains(e.target) && e.target !== volumeButton) {
        volumeSliderContainer.classList.remove('active');
    }
});

document
    .querySelector(".search-form")
    .addEventListener("submit", async (event) => {
        event.preventDefault();

        const searchInput = document.querySelector("#search-input").value;

        const url = `https://youtube-v3-alternative.p.rapidapi.com/search?query=${searchInput}&geo=US&lang=en`;

        const options = {
            method: "GET",
            headers: {
                "x-rapidapi-key": "83b187e416mshc372e071360f17ep1f5171jsn4a9613102836",
                "x-rapidapi-host": "youtube-v3-alternative.p.rapidapi.com",
            },
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();

            console.log(result.data);
            displayVideos(result.data);
        } catch (error) {
            console.error("error fetching data", error);
        }
    });

function displayVideos(videos) {
    const videoList = document.querySelector(".video-list");
    videoList.innerHTML = "";

    videos.forEach((video) => {
        const videoItem = document.createElement("div");
        videoItem.className = "video-item";

        videoItem.innerHTML = `
        <div class="video-thumbnail" style="background-image: url('${video.thumbnail[0].url}')"></div>
        <div class="video-info">
    <div class="video-title">${video.title}</div>
    <div class="video-channelTitle">${video.channelTitle}</div>
    </div> 
    `;
        videoItem.addEventListener("click", () => openModal(video.videoId));
        videoList.append(videoItem);
    });
}

function openModal(videoId) {
    const modal = document.querySelector("#video-modal");
    const videoPlayer = document.querySelector("#video-player");
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;

    videoPlayer.src = videoUrl;
    modal.style.display = "block";

    document.querySelector("click", async function () {
        const url = "https://youtube-mp36.p.rapidapi.com/dl?id=UxxajLWwzqY";

        const options = {
            method: "GET",
            headers: {
                "x-rapidapi-key": "83b187e416mshc372e071360f17ep1f5171jsn4a9613102836",
                "x-rapidapi-host": "youtube-mp36.p.rapidapi.com",
            },
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            if (result.status === "ok") {
                window.location.href = result.link;
            } else {
                window.alert("error downloadMP3");
            }
        } catch (error) {
            console.error("error", error);
        }
    });
}

document.querySelector(".close-modal").addEventListener("click", closeModal);

function closeModal() {
    const modal = document.querySelector("#video-modal");
    const videoPlayer = document.querySelector("#video-player");

    videoPlayer.src = "";
    modal.style.display = "none";
}

window.onclick = function (event) {
    const modal = document.querySelector("#video-modal");

    if (event.target == modal) {
        closeModal();
    }
};

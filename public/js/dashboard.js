let randomPlaylist = [];

async function musicPlaylistHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#title");
  const artist = document.querySelector("#artist");
  const year = document.querySelector("#year");

  const response = await fetch("/api/Dashboards", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    let json = await response.json();
    localStorage.setItem("json", JSON.stringify(json));
    console.log(json);

    if (tableBody !== null) {
      $("#tbody tr").remove();
    }

    for (i = 0; i < 10; i++) {
      var tableBody = document.querySelectorAll("tbody")[0];

      let music = document.createElement("tr");

      let likeBtnBox = document.createElement("th");

      let likeBtn = document.createElement("img");
      likeBtn.setAttribute("onclick", "addToFav(this.id)");
      likeBtn.setAttribute("src", "/images/thumbsupIcon.png");
      likeBtn.setAttribute("alt", "thumbs up icon");
      likeBtn.setAttribute("width", "20");
      likeBtn.setAttribute("height", "auto");

      let title = document.createElement("td");
      let artist = document.createElement("td");
      let released = document.createElement("td");

      let randomSong = json[Math.floor(Math.random() * json.length)];
      title.innerHTML = randomSong.title;
      artist.innerHTML = randomSong.artist;
      released.innerHTML = randomSong.year;
      likeBtn.setAttribute("id", randomSong.id);
      music.setAttribute("id", randomSong.id);
      randomPlaylist.push(randomSong);

      likeBtnBox.appendChild(likeBtn);
      music.appendChild(likeBtnBox);
      music.appendChild(title);
      music.appendChild(artist);
      music.appendChild(released);

      tableBody.appendChild(music);
    }
  } else {
    alert("HTTP-Error" + response.status);
  }
}

let json = JSON.parse(localStorage.getItem("json"));

console.log(randomPlaylist);

async function addToFav(clicked_id) {
  try {
    const response = await fetch(`/api/Dashboards/${clicked_id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },
    });
    // if (response.ok) {
    //   document.location.reload;
    // } else {
    //   alert("Failed to update playlist");
    // }
  } catch (err) {
    console.log(err);
  }
  // var tableBody = document.querySelectorAll("tbody")[1];
  // let randomID = Math.floor(Math.random() * 1000) + 10;

  // let music = document.createElement("tr");
  // music.setAttribute("id", randomID);

  // let deleteBtnBox = document.createElement("th");

  // let deleteBtn = document.createElement("img");
  // deleteBtn.setAttribute("onclick", "deleteFromFav(this.id)");
  // deleteBtn.setAttribute("src", "/images/blackX.png");
  // deleteBtn.setAttribute("alt", "dislike icon");
  // deleteBtn.setAttribute("width", "20");
  // deleteBtn.setAttribute("height", "auto");
  // deleteBtn.setAttribute("id", randomID);

  // let title = document.createElement("td");
  // let artist = document.createElement("td");
  // let released = document.createElement("td");

  // title.innerHTML = randomPlaylist[clicked_id].title;
  // artist.innerHTML = randomPlaylist[clicked_id].artist;
  // released.innerHTML = randomPlaylist[clicked_id].year;

  // deleteBtnBox.appendChild(deleteBtn);
  // music.appendChild(deleteBtnBox);
  // music.appendChild(title);
  // music.appendChild(artist);
  // music.appendChild(released);

  // tableBody.appendChild(music);
}

function deleteFromFav(clicked_id) {
  $(`#${clicked_id}`).remove();
}

document
  .getElementById("getMusic")
  .addEventListener("click", musicPlaylistHandler);

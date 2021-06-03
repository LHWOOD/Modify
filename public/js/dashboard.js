async function musicPlaylistHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#title");
  const artist = document.querySelector("#artist");
  const year = document.querySelector("#year");

  const response1 = await fetch("/api/Dashboards", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    console.log(JSON.parse(res));
  });
  console.log(response1);
}

document
  .getElementById("getMusic")
  .addEventListener("click", musicPlaylistHandler);

async function favListHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const artist = document.querySelector("#artist").value;
  const year = document.querySelector("#year").value;

  const response = await fetch("/api/Dashboards", {
    method: "POST",
    body: JSON.stringify({
      title,
      artist,
      year,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  if (response.ok) {
  } else {
    alert("Failed to add song");
  }
}

document.querySelector();

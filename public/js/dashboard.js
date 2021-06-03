async function musicPlaylistHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#title");
  const artist = document.querySelector("#artist");
  const year = document.querySelector("#year");

  const response1 = await fetch("/api/Dashboards", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    console.log(res);
  });
  console.log(response1);
}

document
  .getElementById("getMusic")
  .addEventListener("click", musicPlaylistHandler);

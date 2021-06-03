async function musicPlaylistHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#title");
  const artist = document.querySelector("#artist");
  const year = document.querySelector("#year");

  const response = await fetch("/api/Dashboards", {
    method: "GET",
    body: JSON.stringify({ title, artist, year }),
    headers: { "Content-Type": "application/json" },
  });
  console.log(response);
  return response.json();
}

document
  .querySelector("#getMusic")
  .addEventListener("click", musicPlaylistHandler);

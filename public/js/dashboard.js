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
    console.log(json);
  } else {
    alert("HTTP-Error" + response.status);
  }
  console.log(response);
}

document
  .getElementById("getMusic")
  .addEventListener("click", musicPlaylistHandler);

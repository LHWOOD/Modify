async function newUserHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#InputUsername").value.trim();
  const password = document.querySelector("#InputPassword").value.trim();

  const response = await fetch(`/api/Users`, {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to create account. Check your credentials.");
  }
}

document
  .querySelector(".create-account")
  .addEventListener("submit", newUserHandler);

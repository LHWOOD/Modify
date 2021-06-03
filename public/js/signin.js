async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#InputUsername").value.trim();
  const password = document.querySelector("#InputPassword").value.trim();

  console.log(username);
  if (username && password) {
    const response = await fetch("/api/Users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to log in. Invalid or nonexistent credentials.");
    }
  } else {
    alert("Enter both a valid username and password to login.");
  }
}

document.querySelector(".signin").addEventListener("submit", loginFormHandler);

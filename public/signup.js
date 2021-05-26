const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get the values
  const email = form.email.value;
  const password = form.password.value;

  try {
    const result = await fetch("/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await result.json();

    if (data.user) {
      location.assign("/");
    }
  } catch (err) {
    console.log(err);
  }
});

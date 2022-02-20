//const firstLoaded = Date.now();

i = 0

setInterval(() => {

  h = i;

  i = (i + 5) % 360

  s = "100%";
  l = "50%";

  document.getElementById("header").style.color = ("hsl(" + h + "," + s +"," + l + ")");
  document.getElementById("loginBtn").style.background = ("hsl(" + h + "," + s +"," + l + ")");
}, 50);



const lf = document.getElementById("login-form")

lf.addEventListener("submit", async function(event) {

  event.preventDefault();

  username = document.getElementById("usernameInput").value
  password = document.getElementById("passwordInput").value

  console.log(username, password)

  const responseData = await restFetch(...endpoints.clientLogin(), {}, { username: username, password: password});

  console.log(responseData);

  if (responseData.ok) {

    window.location.href="./index.html";

  } else {

    alert("Incorrect username or password");
  }

  const userData = await restFetch(...endpoints.getSelf());

  console.log(userData)
})
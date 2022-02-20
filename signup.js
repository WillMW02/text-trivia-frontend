//const firstLoaded = Date.now();

i = 0

setInterval(() => {

  h = i;

  i = (i + 5) % 360

  s = "100%";
  l = "50%";

  document.getElementById("header").style.color = ("hsl(" + h + "," + s +"," + l + ")");
  document.getElementById("signupBtn").style.background = ("hsl(" + h + "," + s +"," + l + ")");
}, 50);

const sf = document.getElementById("signup-form")

sf.addEventListener("submit", async function(event) {

  event.preventDefault();

  const data = new FormData(sf);

  username = document.getElementById("usernameInput").value
  password = document.getElementById("passwordInput").value
  number = document.getElementById("phoneNumberInput").value

  const responseData = await restFetch(...endpoints.createUser(), {}, { username: username, password: password, mobile_no: number});

  console.log(responseData);
})
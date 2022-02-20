//const firstLoaded = Date.now();

i = 0

setInterval(() => {

  h = i;

  i = (i + 5) % 360

  s = "100%";
  l = "50%";

  document.getElementById("header").style.color = ("hsl(" + h + "," + s +"," + l + ")");
  document.getElementById("deleteBtn").style.background = ("hsl(" + h + "," + s +"," + l + ")");
}, 50);

document.getElementById("signupBtn").onclick = () => {

  username = document.getElementById("usernameInput").value
  password = document.getElementById("passwordInput").value
  number = document.getElementById("phoneNumberInput").value

  console.log(username, password, number, "hi there")

};
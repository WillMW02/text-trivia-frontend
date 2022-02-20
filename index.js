i = 0

setInterval(() => {

  h = i;

  i = (i + 5) % 360

  s = "100%";
  l = "50%";

  //document.getElementsByClassName("changeColor").style.color = ("hsl(" + h + "," + s +"," + l + ")");

  elements = document.getElementsByClassName("changeColor")
  for(var j = 0; j < elements.length; j++){
    elements[j].style.color = ("hsl(" + h + "," + s +"," + l + ")");
  }
  //document.getElementById("deleteBtn").style.background = ("hsl(" + h + "," + s +"," + l + ")");
  //document.getElementById("signupBtn").style.background = ("hsl(" + h + "," + s +"," + l + ")");
}, 50);

async function fetchLeaderboard() {

  const responseData = await restFetch(...endpoints.getGlobalScores());
  console.log(responseData)

  if (responseData.ok) {

    data = responseData.data;

    html = `
      <table class="table table-hover">
        <thead>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Points</th>
        </thead>
      <tbody id="leaderboard-body">
    `;

    if (data) {

      for (i = 0; i < data.length; i++) {

        html += `
          <tr ${i == 0 ? 'class="table-warning"' : ""}>
            <th scope="row">${i+1}</th>
            <td>${data[i].username}</td>
            <td>${data[i].total}</td>
          </tr>
        `;
      }
    }

  document.getElementById("leaderboard-container").innerHTML = html;
  document.getElementById("loading-container").innerHTML = "";

  }
}

setTimeout(() => {
  fetchLeaderboard();
}, 1000);

let html;

if (document.cookie.indexOf('jwt=') != -1) {
  console.log("cookie exists, logged in")

  const userData = await restFetch(...endpoints.getSelf());
  data = userData.data;

  html = `
    Logged in as ${data.username}
    <a href="./settings.html">
      <button id="settingsBtn" type="button" class="btn btn-primary">Settings</button>
    </a>
    <button id="logoutBtn" type="button" class="btn btn-primary">Logout</button>
  `;
} else {

  console.log("logged out")
  html = `
    <a href="./login.html">
      <button id="loginBtn" type="button" class="btn btn-primary">Login</button>
    </a>
    <a href="./signup.html">
      <button id="signupBtn" type="button" class="btn btn-primary">Signup</button>
    </a>
  `;
}

document.getElementById("user-state-container").innerHTML = html;
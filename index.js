//const firstLoaded = Date.now();

i = 0

setInterval(() => {

  h = i;

  i = (i + 5) % 360

  s = "100%";
  l = "50%";

<<<<<<< HEAD
  //document.getElementsByClassName("changeColor").style.color = ("hsl(" + h + "," + s +"," + l + ")");

  elements = document.getElementsByClassName("changeColor")
  for(var j = 0; j < elements.length; j++){
    elements[j].style.color = ("hsl(" + h + "," + s +"," + l + ")");
    console.log(h)
  }
  document.getElementById("deleteBtn").style.background = ("hsl(" + h + "," + s +"," + l + ")");
  document.getElementById("signupBtn").style.background = ("hsl(" + h + "," + s +"," + l + ")");
}, 50);

const data = [
  {"name": "Arthur Jarvis", "score": "5000"},
  {"name": "Keith", "score": "9250"}
]

setTimeout(() => {

  html = `
    <table class="table table-hover">
      <thead>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Points</th>
      </thead>
    <tbody id="leaderboard-body">
  `;

    for (i = 0; i < data.length; i++) {

      html += `
        <tr ${i == 0 ? 'class="table-warning"' : ""}>
          <th scope="row">${i+1}</th>
          <td>${data[i].name}</td>
          <td>${data[i].score}</td>
        </tr>
      `;
    }

  document.getElementById("leaderboard-container").innerHTML = html;
  document.getElementById("loading-container").innerHTML = "";

}, 1000);
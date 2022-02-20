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

  } else {

    alert("Error")
  }
}

setTimeout(() => {
  fetchLeaderboard();
}, 1000);
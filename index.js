setInterval(() => {
  h1.style.color = hexCodes[Math.floor(Math.random() * hexCodes.length)];
}, 100);

setTimeout(() => {

  document.getElementById("leaderboard-container").innerHTML = `
    <table class="table">
        <thead>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Points</th>
        </thead>
      <tbody id="leaderboard-body">
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
        </tr>
      </tbody>
    </table>
  `;
}, 1000);
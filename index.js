setInterval(() => {
  document.getElementById("title").style.color = hexCodes[Math.floor(Math.random() * hexCodes.length)];
}, 100);
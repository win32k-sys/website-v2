document.addEventListener("DOMContentLoaded", function () {
  const queryString = window.location.search.substring(1);

  const pageMappings = {
    "server": "/server.js",
  };

  const filePath = pageMappings[queryString];

  if (filePath) {
    fetch(filePath)
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("content").innerHTML = html;
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
      });
  } else {

    window.location.href = "/404";
  }
});

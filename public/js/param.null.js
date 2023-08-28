// main.js
document.addEventListener("DOMContentLoaded", function () {
    
    const queryString = window.location.search.substring(1);
    

    const pageMappings = {
      "apitoken": "/public/index.html",
      // Adding more mappings
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

      document.getElementById("content").innerHTML = "<p>Page not found</p>";
    }
  });
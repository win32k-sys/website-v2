// main.js
document.addEventListener("DOMContentLoaded", function () {
    
    const queryString = window.location.search.substring(1);
    

    const pageMappings = {
      "example": "/public/index.html",
      "home": "/public/home.html",
      // Add more mappings as needed
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
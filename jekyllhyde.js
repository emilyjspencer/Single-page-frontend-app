
    turnDrJekyllIntoMrHyde();
    
    function turnDrJekyllIntoMrHyde() {
      document.getElementById("drjekyll")
        .addEventListener("click", function(clickEvent) {
          clickEvent.preventDefault();
          scary();
        });
    };
    
    function scary() {
      document.getElementById("drjekyll").style.visibility = "hidden";
        document.body.appendChild(document.createElement("img")).src = "Public/mrhyde.jpg";
    
    };
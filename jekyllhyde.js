
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
      document.getElementById("jekylldrinks").style.visibility = "hidden";
        document.body.appendChild(document.createElement("img")).src = "Public/mrhyde.jpg";
        document.body.appendChild(document.createElement("div")).innerText = "“O God!” I screamed, and “O God!” again and again; for there before my eyes—pale and shaken, and half fainting, and groping before him with his hands, like a man restored from death—there stood Henry Jekyll!"
    };
window.onload = function(){

var messageContainer = document.getElementById("messages-wrapper");

document.getElementById("button1").onclick = function() {makeChoice()};

function makeChoice() {
  // create the new DOM element
    var newBubble = document.createElement("div");
    // give it a class so it looks like a bubble
    newBubble.classList.add("message.to")
    // change its content
   newBubble.innerHTML = "Lol wicked. How do we begin?";
   // add it to the page
   messageContainer.appendChild(newBubble);
}

};
window.onload = function(){

var messageContainer = document.getElementById("messages-wrapper");

var welcomeMessage = document.createElement("div");
welcomeMessage.classList.add("message","&nbsp;","from")
welcomeMessage.innerHTML = "Hello. I'm here to explain all you need to know about Britain's EU referendum on June 23.";
setTimeout (showWelcomeMessage, 1000)

function showWelcomeMessage(){
messageContainer.appendChild(welcomeMessage);
}

document.getElementById("button1").onclick = function() {makeChoice(); setTimeout(respondChoice, 1000)}; 


function makeChoice() {
  // create the new DOM element
    var newBubble = document.createElement("div");
    // give it a class so it looks like a bubble
    newBubble.classList.add("message","&nbsp;","to")
    // change its content
   newBubble.innerHTML = "Lol wicked. How do we begin?";
   // add it to the page
   messageContainer.appendChild(newBubble);
   window.scrollTo(0, document.body.scrollHeight);
}


function respondChoice() {
   // create the new DOM element
   var newBubble = document.createElement("div");
    // give it a class so it looks like a bubble
    newBubble.classList.add("message","&nbsp;","from")
    // change its content
   newBubble.innerHTML = "Great. How old are you?";
   // add it to the page
   messageContainer.appendChild(newBubble);
   window.scrollTo(0, document.body.scrollHeight);
	// create the new DOM element
   var newBubble = document.createElement("div");
    // give it a class so it looks like a bubble
    newBubble.classList.add("message","&nbsp;","from")
    // change its content
   newBubble.innerHTML = "<img src='candles.gif'>";
   // add it to the page
   messageContainer.appendChild(newBubble);
   window.scrollTo(0, document.body.scrollHeight);
   }

document.getElementById("button2").onclick = function() {makeChoice2(); setTimeout(respondChoice2, 1000)}; 

function makeChoice2() {
  // create the new DOM element
    var newBubble = document.createElement("div");
    // give it a class so it looks like a bubble
    newBubble.classList.add("message","&nbsp;","to")
    // change its content
   newBubble.innerHTML = "I'm a millenial";
   // add it to the page
   messageContainer.appendChild(newBubble);
   window.scrollTo(0, document.body.scrollHeight);
  
}

function respondChoice2() {
	// create the new DOM element
   var newBubble = document.createElement("div");
    // give it a class so it looks like a bubble
    newBubble.classList.add("message","&nbsp;","from")
    // change its content
   newBubble.innerHTML = "Millenials are the most pro-EU group in the UK.";
   // add it to the page
   messageContainer.appendChild(newBubble);
   window.scrollTo(0, document.body.scrollHeight);
	// create the new DOM element
   var newBubble = document.createElement("div");
    // give it a class so it looks like a bubble
    newBubble.classList.add("message","&nbsp;","from")
    // change its content
   newBubble.innerHTML = "<img src='voting-intentions.png'>";
   // add it to the page
   messageContainer.appendChild(newBubble);
   window.scrollTo(0, document.body.scrollHeight);



}


document.getElementById("button3").onclick = function() {makeChoice3(); setTimeout(respondChoice3, 1000)}; 

function makeChoice3() {
  // create the new DOM element
    var newBubble = document.createElement("div");
    // give it a class so it looks like a bubble
    newBubble.classList.add("message","&nbsp;","to")
    // change its content
   newBubble.innerHTML = "We're pretty great";
   // add it to the page
   messageContainer.appendChild(newBubble);
   window.scrollTo(0, document.body.scrollHeight);
}


function respondChoice3() {   
   // create the new DOM element
   var newBubble = document.createElement("div");
    // give it a class so it looks like a bubble
    newBubble.classList.add("message","&nbsp;","from")
    // change its content
   newBubble.innerHTML = "You're also the likely like group to vote";
   // add it to the page
   messageContainer.appendChild(newBubble);
   window.scrollTo(0, document.body.scrollHeight);
	// create the new DOM element
   var newBubble = document.createElement("div");
    // give it a class so it looks like a bubble
    newBubble.classList.add("message","&nbsp;","from")
    // change its content
   newBubble.innerHTML = "<img src='chance-of-voting.png'>";
   // add it to the page
   messageContainer.appendChild(newBubble);
   window.scrollTo(0, document.body.scrollHeight);

}


document.getElementById("button4").onclick = function() {makeChoice4(); setTimeout(respondChoice4, 1000)}; 

function makeChoice4() {
  // create the new DOM element
    var newBubble = document.createElement("div");
    // give it a class so it looks like a bubble
    newBubble.classList.add("message","&nbsp;","to")
    // change its content
   newBubble.innerHTML = "Oh shit. But does that matter?";
   // add it to the page
   messageContainer.appendChild(newBubble);
   window.scrollTo(0, document.body.scrollHeight);

}

function respondChoice4() {   
    // create the new DOM element
   var newBubble = document.createElement("div");
    // give it a class so it looks like a bubble
    newBubble.classList.add("message","&nbsp;","from")
    // change its content
   newBubble.innerHTML = "Well, it depends. What do you want to know about - culture, immigration, jobs or the economy?";
   // add it to the page
   messageContainer.appendChild(newBubble);
   window.scrollTo(0, document.body.scrollHeight);
   // create the new DOM element
   var newBubble = document.createElement("div");
    // give it a class so it looks like a bubble
    newBubble.classList.add("message","&nbsp;","from")
    // change its content
   newBubble.innerHTML = "<img src='what-do-you-want.gif'>";
   // add it to the page
   messageContainer.appendChild(newBubble);
   window.scrollTo(0, document.body.scrollHeight);

}


};

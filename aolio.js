
/*function transform1() {
  firstBubble = document.getElementById("bubble1");
  firstBubble.style.backgroundColor = "#da2225";
  setTimeout("reset()",1000);
}

function transform2() {
  secondBubble = document.getElementById("bubble2");
  secondBubble.style.backgroundColor = "#da2225";
  setTimeout("reset()",1000);
}

function transform3() {
  thirdBubble = document.getElementById("bubble3");
  thirdBubble.style.backgroundColor = "#da2225";
  setTimeout("reset()",1000);
}

function reset() {

  if (firstBubble.style.backgroundColor == "rgb(218, 34, 37)") {
	  firstBubble.style.backgroundColor = "#2b6dad";
      transform2();
      }
  else if (secondBubble.style.backgroundColor == "rgb(218, 34, 37)") {
	  secondBubble.style.backgroundColor = "#2b6dad";
	  transform3()
	  }
  else {
	  thirdBubble.style.backgroundColor = "#2b6dad";
	  transform1()
	  } 
}*/

function returnById(x) {
    return document.getElementById(x);
}

var headerArray = ["Happy birthday, Brendo. A reminder:", "And finally, I just need you to know", "The one constant in life"];

var paragraphArray = ["CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 \
CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9", "CLG > C9 CLG > C9 CLG > C9 CLG > C9 \
CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 \
CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9", "CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 \
CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 CLG > C9 "];

var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'home2.png';

imgArray[1] = new Image();
imgArray[1].src = 'forum2.png';

imgArray[2] = new Image();
imgArray[2].src = 'comments2.png';

var bubbleIndex = resetBubble = 0;

function redBubble() {
	bubbleArray[bubbleIndex].style.backgroundColor = "#da2225"
} 

function regularBubble () {
	if (returnById("trueParagraphContainer").style.marginLeft !== "-50%") {
		bubbleArray[bubbleIndex].style.backgroundColor = "#da2225";
	}
	else {
		bubbleArray[bubbleIndex].style.backgroundColor = "#2b6dad";
	}
}

var lastBubble = 0;
function transformBubbleAndParagraph(bubbleIndex, resetBubble) {
	if (lastBubble == bubbleIndex) {
		return;
	}
	lastBubble = bubbleIndex;
	if (resetBubble!==0) {
        this.bubbleIndex = bubbleIndex;
    }
	for (i =0; i < bubbleArray.length; i++) {
		bubbleArray[i].style.backgroundColor = "";
	}
	if (returnById("trueParagraphContainer").style.marginLeft !== "-50%") {
		bubbleArray[bubbleIndex].style.backgroundColor = "#da2225";
		returnById("imageHeader").style.opacity = 1;
	returnById("theimage").style.opacity = 0;
	returnById("imageHeader2").style.opacity = 0;
	returnById("trueParagraph1").style.opacity = 0;
	setTimeout(function(){
	returnById("theimage").src = imgArray[bubbleIndex].src;
	returnById("theimage").style.opacity = 1;
	returnById("imageHeader2").style.opacity = 1;
	returnById("trueParagraph1").style.opacity = 1;
	returnById("firstHeader").innerHTML = headerArray[bubbleIndex];
	returnById("secondHeader").innerHTML = headerArray[bubbleIndex];
	returnById("trueParagraph1").innerHTML = paragraphArray[bubbleIndex]
	returnById("imageHeader").style.opacity = 1;
	}, 400);
	}
	else if (resetBubble!==0) {
		bubbleArray[bubbleIndex].style.backgroundColor = "#da2225";
		returnById("imageHeader").style.opacity = 0;
	returnById("theimage").style.opacity = 0;
	returnById("imageHeader2").style.opacity = 0;
	returnById("trueParagraph1").style.opacity = 0;
	setTimeout(function(){
	returnById("theimage").src = imgArray[bubbleIndex].src;
	returnById("theimage").style.opacity = 1;
	returnById("firstHeader").innerHTML = headerArray[bubbleIndex];
	returnById("secondHeader").innerHTML = headerArray[bubbleIndex];
	returnById("trueParagraph1").innerHTML = paragraphArray[bubbleIndex]
	returnById("imageHeader").style.opacity = 1;
	}, 400);
	}
	else {
		bubbleArray[bubbleIndex].style.backgroundColor = "#2b6dad"; 
		returnById("imageHeader").style.opacity = 0;
	returnById("theimage").style.opacity = 0;
	returnById("imageHeader2").style.opacity = 0;
	returnById("trueParagraph1").style.opacity = 0;
	setTimeout(function(){
	returnById("theimage").src = imgArray[bubbleIndex].src;
	returnById("theimage").style.opacity = 1;
	returnById("firstHeader").innerHTML = headerArray[bubbleIndex];
	returnById("secondHeader").innerHTML = headerArray[bubbleIndex];
	returnById("trueParagraph1").innerHTML = paragraphArray[bubbleIndex]
	returnById("imageHeader").style.opacity = 1;
	}, 400);
	} 
	if (document.documentElement.clientWidth < 1200) {
		bubbleArray[bubbleIndex].style.backgroundColor = "pink";
		returnById("imageHeader").style.opacity = 0;
		returnById("theimage").style.opacity = 0;
		returnById("imageHeader2").style.opacity = 0;
		returnById("trueParagraph1").style.opacity = 0;
		setTimeout(function(){
		returnById("theimage").style.opacity = 1;
		returnById("imageHeader").style.opacity = 1;
		returnById("imageHeader2").style.opacity = 1;
		returnById("trueParagraph1").style.opacity = 1;
		returnById("theimage").src = imgArray[bubbleIndex].src;
		returnById("firstHeader").innerHTML = headerArray[bubbleIndex];
		returnById("secondHeader").innerHTML = headerArray[bubbleIndex];
		returnById("trueParagraph1").innerHTML = paragraphArray[bubbleIndex];
		}, 400);
	}
}

function next() {
    bubbleIndex++;
	if (bubbleIndex == bubbleArray.length) {
		bubbleIndex = 0;
	}
	transformBubbleAndParagraph(bubbleIndex, resetBubble);
}

function resetInterval() {
	if (returnById("trueParagraphContainer").style.marginLeft !== "-50%") {
		clearInterval(interval);
	}
	else {
		clearInterval(interval);
		interval = setInterval(next, 4000);
	}
}

window.addEventListener("load", function loadArray() {
   bubbleArray = returnById("bubbleContainer").children;
   interval = setInterval(next, 4000)
   })

/* Two conditions: hidden and visible menu. Use display property to achieve this. The 
first condition could check to see if the menu is there. If it's not, make it appear. 
If it's already there, make it disappear*/

function expandOrCompress() {
	if (returnById("trueParagraphContainer").style.marginLeft == "-50%") {
		returnById("trueParagraphContainer").style.marginLeft = "0%";
		returnById("imageHeader2").style.opacity = 1;
		returnById("trueParagraph1").style.opacity = 1;
		returnById("secondHeader").style.opacity = 1;
		returnById("imageHeader").style.opacity = 0;
		bubbleArray[bubbleIndex].style.backgroundColor = "#da2225"
		clearInterval(interval);
		setTimeout(function() {
			returnById("imageHeader").style.opacity = 1;
			returnById("firstHeader").style.display = "none";
			returnById("expandAndCompress").style.backgroundImage = "url(left-arrow-key-555.png)"
		}, 500);
	}
	else {
		returnById("trueParagraphContainer").style.marginLeft = "-50%";
		returnById("imageHeader2").style.opacity = 0;
		returnById("trueParagraph1").style.opacity = 0;
		returnById("imageHeader").style.opacity = 0;
		returnById("secondHeader").style.opacity = 0;
		bubbleArray[bubbleIndex].style.backgroundColor = "#2b6dad"
		resetInterval();
		setTimeout(function() {
			returnById("imageHeader").style.opacity = 1;
			returnById("firstHeader").style.display = "block";
			returnById("expandAndCompress").style.backgroundImage = "url(keyboard-right-arrow-button-555.png)";
		}, 500);
	}	
}

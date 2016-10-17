function returnById(x) {
    return document.getElementById(x);
}

var headerArray = ["All your news and interests", "A community for everyone", "Vote on your favorite topics"];

var paragraphArray = ["Whether you want to browse the latest news, discuss trending topics, submit\
				something you found interesting, or any combination of the above, Aolio can do all this and more. Easily customize your\
				feed and keep track of all news and discussions you find interesting.", "Offering both moderated and unmoderated communities, \
				each offer their own wealth of advantages. Try a moderated community for a more controlled environment, or enjoy (near) complete \
				freedom in an unmoderated community. In either case, you ultimately have the choice to decide on the content that's most \
				interesting and relevant to you.", "Everything that's submitted is subject to voting. The community gets to decide what they find \
				the most interesting and subsequently what will be on the front page for all to see. Users can also vote on comments \
				according to their relevancy and appeal."];

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
	if (returnById("trueParagraphContainer").style.marginLeft == "-50%") {
		bubbleArray[bubbleIndex].style.backgroundColor = "#2b6dad";
		returnById("imageHeader").style.opacity = 0;
		returnById("theimage").style.opacity = 0;
		setTimeout(function(){
		returnById("theimage").style.opacity = 1;
		returnById("imageHeader").style.opacity = 1;
		returnById("theimage").src = imgArray[bubbleIndex].src;
		returnById("firstHeader").innerHTML = headerArray[bubbleIndex];
		returnById("secondHeader").innerHTML = headerArray[bubbleIndex];
		returnById("trueParagraph1").innerHTML = paragraphArray[bubbleIndex];
		}, 400);
	}
	else {
		bubbleArray[bubbleIndex].style.backgroundColor = "#da2225";
		returnById("theimage").style.opacity = 0;
		returnById("imageHeader2").style.opacity = 0;
		returnById("trueParagraph1").style.opacity = 0;
		setTimeout(function(){
		returnById("theimage").style.opacity = 1;
		returnById("imageHeader2").style.opacity = 1;
		returnById("trueParagraph1").style.opacity = 1;
		returnById("theimage").src = imgArray[bubbleIndex].src;
		returnById("firstHeader").innerHTML = headerArray[bubbleIndex];
		returnById("secondHeader").innerHTML = headerArray[bubbleIndex];
		returnById("trueParagraph1").innerHTML = paragraphArray[bubbleIndex];
		}, 400);
	}
	if (returnById("trueParagraphContainer").style.display == "block") {
		bubbleArray[bubbleIndex].style.backgroundColor = "#2b6dad";
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
	if (returnById("trueParagraphContainer").style.marginLeft == "-50%" && resetBubble!==0) {
		bubbleArray[bubbleIndex].style.backgroundColor = "#da2225";
		returnById("imageHeader").style.opacity = 0;
		returnById("theimage").style.opacity = 0;
		setTimeout(function(){
		returnById("theimage").style.opacity = 1;
		returnById("imageHeader").style.opacity = 1;
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
	if (returnById("trueParagraphContainer").style.marginLeft !== "-50%" && returnById("trueParagraphContainer").style.display == "flex") {
		bubbleArray[bubbleIndex].style.backgroundColor = "#da2225";
		clearInterval(interval);
	}
	else {
		clearInterval(interval);
		interval = setInterval(next, 6000);
	}
}

function jsMediaQuery(jmq){
 if (jmq.matches){ // if media query matches -- effectively a js media query
  returnById("trueParagraphContainer").style.display = "block";
  bubbleArray[bubbleIndex].style.backgroundColor = "#2b6dad";
  returnById("trueParagraph1").style.opacity = 1;
  returnById("imageHeader2").style.opacity = 1;
  returnById("secondHeader").style.opacity = 1;
  returnById("secondHeader").style.transition = "opacity 0.4s linear 0s";
  resetInterval();
  
 }
 else{
  returnById("trueParagraphContainer").style.display = "flex";
  returnById("secondHeader").style.transition = "opacity 0.4s linear 0.4s";
  if (returnById("trueParagraphContainer").style.marginLeft == "-50%") {
	returnById("trueParagraph1").style.opacity = 0;
	returnById("imageHeader2").style.opacity = 0; 
	returnById("secondHeader").style.opacity = 0;	
  }
  else {
	returnById("trueParagraph1").style.opacity = 1;
	returnById("imageHeader2").style.opacity = 1; 
	returnById("secondHeader").style.opacity = 1;	
  }
  resetInterval();
 }
}

var jmq = window.matchMedia("only screen and (max-width : 1200px),only screen and (max-device-width : 1200px)");
jmq.addListener(jsMediaQuery);

window.addEventListener("load", function loadArray() {
   bubbleArray = returnById("bubbleContainer").children;
   interval = setInterval(next, 6000);
   jsMediaQuery(jmq);
   })



/* Two conditions: hidden and visible menu. Use display property to achieve this. The 
first condition could check to see if the menu is there. If it's not, make it appear. 
If it's already there, make it disappear*/

function expandOrCompress() {
	if (returnById("trueParagraphContainer").style.marginLeft == "-50%") {
		returnById("trueParagraphContainer").style.marginLeft = "0%";
		returnById("imageHeader2").style.opacity = 1;
		returnById("secondHeader").style.opacity = 1;
		returnById("trueParagraph1").style.opacity = 1;
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
		returnById("secondHeader").style.opacity = 0;
		returnById("trueParagraph1").style.opacity = 0;
		returnById("imageHeader").style.opacity = 0;
		bubbleArray[bubbleIndex].style.backgroundColor = "#2b6dad"
		resetInterval();
		setTimeout(function() {
			returnById("imageHeader").style.opacity = 1;
			returnById("firstHeader").style.display = "block";
			returnById("expandAndCompress").style.backgroundImage = "url(keyboard-right-arrow-button-555.png)";
		}, 500);
	}	
}

function enlarge() {
  returnById("fixedPanel").style.display = "block";
  returnById("imagePosition").style.opacity = 0;
  returnById("theimage2").src = imgArray[bubbleIndex].src;
}

function hidePanel() {
  returnById("fixedPanel").style.display = "none";
  returnById("imagePosition").style.opacity = 1;
  resetInterval();
}

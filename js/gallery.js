; // Defensive semicolon.
// Authors: Kevin and Ransom
//

//...Global variables...//
var viewImage = document.getElementById("image_show");

//...Functions...//
function populate() {
  //populates the image gallery
  var numImages = 61; // Hard code image numbers
  var imageNum;
  var position = document.getElementsByTagName("section")[0];
  for (i = 1; i < numImages; i++) {
    if (i < 10) {
      imageNum = "0" + i;
    } else {
      imageNum = i; 
    } 
   var newImage = document.createElement("img");
   var imgLi = document.createElement("li");
   newImage.src = "images/pdxcg_" + imageNum + ".jpg";
   imgLi.appendChild(newImage);
   position.appendChild(imgLi);
   } 
}

function imgClick(e){
  //Outputs click target for enlargement.
  if (e.target.tagName === "IMG") {
    imgEnlarge(e.target);
  }
}

function imgEnlarge(eventTarget){
  //takes in the eventTarget (only valid images and not whitespaces!)
  viewImage.className = "display_img";
  viewImage.firstElementChild.src = eventTarget.src;
}

function imgShrink(e) {
  //shrinks enlarged images
  if (e.target.tagName !== "IMG") {
    image_show.className = "display_none"; 
  }
}

//....Event Listeners....//
function eventListeners(currentImage) {
  //Listens for click events.  
    gallery.addEventListener("click", imgClick, false);
    viewImage.addEventListener("click", imgShrink, false);
}

//
if (location.search) {
    var tagline = document.getElementsByClassName("tagline");
    nameText = location.search.slice(1);
    tagline[0].innerHTML = "develop something beautiful, " + nameText + "!";
}

//....Function calls....//
populate();
eventListeners(viewImage);

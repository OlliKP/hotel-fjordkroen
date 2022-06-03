/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function showBugerMenu() {
    document.getElementById("dropdownMenu").classList.toggle("show");
  }
  
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.burger-menu')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }  
}

//Read more funktion på FAQ siden, til hvert spørgsmål//
//Sektion med Praktiske spørgsmål//
function disabledFriendlyFunction() {
  var moreText = document.getElementById("disabled-friendly-more");
  var readMoreArrow = document.getElementById("disabled-friendly-arrow")

  if (readMoreArrow.style.transform === "rotate(-180deg)"){
    readMoreArrow.style.transform = "rotate(0)"; 
    moreText.style.display = "none";
  } else {
    readMoreArrow.style.transform = "rotate(-180deg)"; 
      moreText.style.display = "inline";
  }
}
function stairsFunction() {
  var moreText = document.getElementById("stairs-more");
  var readMoreArrow = document.getElementById("stairs-arrow")

  if (readMoreArrow.style.transform === "rotate(-180deg)"){
    readMoreArrow.style.transform = "rotate(0)"; 
    moreText.style.display = "none";
  } else {
    readMoreArrow.style.transform = "rotate(-180deg)"; 
      moreText.style.display = "inline";
  }
}
function allergyFunction() {
  var moreText = document.getElementById("allergy-more");
  var readMoreArrow = document.getElementById("allergy-arrow")

  if (readMoreArrow.style.transform === "rotate(-180deg)"){
    readMoreArrow.style.transform = "rotate(0)"; 
    moreText.style.display = "none";
  } else {
    readMoreArrow.style.transform = "rotate(-180deg)"; 
      moreText.style.display = "inline";
  }
}
function petsFunction() {
  var moreText = document.getElementById("pets-more");
  var readMoreArrow = document.getElementById("pets-arrow")

  if (readMoreArrow.style.transform === "rotate(-180deg)"){
    readMoreArrow.style.transform = "rotate(0)"; 
    moreText.style.display = "none";
  } else {
    readMoreArrow.style.transform = "rotate(-180deg)"; 
      moreText.style.display = "inline";
  }
}
function publicTransportationFunction() {
  var moreText = document.getElementById("public-transportation-more");
  var readMoreArrow = document.getElementById("public-transportation-arrow")

  if (readMoreArrow.style.transform === "rotate(-180deg)"){
    readMoreArrow.style.transform = "rotate(0)"; 
    moreText.style.display = "none";
  } else {
    readMoreArrow.style.transform = "rotate(-180deg)"; 
      moreText.style.display = "inline";
  }
}

//Sektion med værelsesfaciliteter//
function kidsFunction() {
  var moreText = document.getElementById("kids-more");
  var readMoreArrow = document.getElementById("kids-arrow")

  if (readMoreArrow.style.transform === "rotate(-180deg)"){
    readMoreArrow.style.transform = "rotate(0)"; 
    moreText.style.display = "none";
  } else {
    readMoreArrow.style.transform = "rotate(-180deg)"; 
      moreText.style.display = "inline";
  }
}
function minibarFunction() {
  var moreText = document.getElementById("minibar-more");
  var readMoreArrow = document.getElementById("minibar-arrow")

  if (readMoreArrow.style.transform === "rotate(-180deg)"){
    readMoreArrow.style.transform = "rotate(0)"; 
    moreText.style.display = "none";
  } else {
    readMoreArrow.style.transform = "rotate(-180deg)"; 
      moreText.style.display = "inline";
  }
}
function tvFunction() {
  var moreText = document.getElementById("tv-more");
  var readMoreArrow = document.getElementById("tv-arrow")

  if (readMoreArrow.style.transform === "rotate(-180deg)"){
    readMoreArrow.style.transform = "rotate(0)"; 
    moreText.style.display = "none";
  } else {
    readMoreArrow.style.transform = "rotate(-180deg)"; 
      moreText.style.display = "inline";
  }
}
function towelsFunction() {
  var moreText = document.getElementById("towels-more");
  var readMoreArrow = document.getElementById("towels-arrow")

  if (readMoreArrow.style.transform === "rotate(-180deg)"){
    readMoreArrow.style.transform = "rotate(0)"; 
    moreText.style.display = "none";
  } else {
    readMoreArrow.style.transform = "rotate(-180deg)"; 
      moreText.style.display = "inline";
  }
}
function wifiFunction() {
  var moreText = document.getElementById("wifi-more");
  var readMoreArrow = document.getElementById("wifi-arrow")

  if (readMoreArrow.style.transform === "rotate(-180deg)"){
    readMoreArrow.style.transform = "rotate(0)"; 
    moreText.style.display = "none";
  } else {
    readMoreArrow.style.transform = "rotate(-180deg)"; 
      moreText.style.display = "inline";
  }
}
function smokingFunction() {
  var moreText = document.getElementById("smoking-more");
  var readMoreArrow = document.getElementById("smoking-arrow")

  if (readMoreArrow.style.transform === "rotate(-180deg)"){
    readMoreArrow.style.transform = "rotate(0)"; 
    moreText.style.display = "none";
  } else {
    readMoreArrow.style.transform = "rotate(-180deg)"; 
      moreText.style.display = "inline";
  }
}

//Sektion med gebyrer og politikker//
function cleaningFunction() {
  var moreText = document.getElementById("cleaning-more");
  var readMoreArrow = document.getElementById("cleaning-arrow")

  if (readMoreArrow.style.transform === "rotate(-180deg)"){
    readMoreArrow.style.transform = "rotate(0)"; 
    moreText.style.display = "none";
  } else {
    readMoreArrow.style.transform = "rotate(-180deg)"; 
      moreText.style.display = "inline";
  }
}
function cancellingFunction() {
  var moreText = document.getElementById("cancelling-more");
  var readMoreArrow = document.getElementById("cancelling-arrow")

  if (readMoreArrow.style.transform === "rotate(-180deg)"){
    readMoreArrow.style.transform = "rotate(0)"; 
    moreText.style.display = "none";
  } else {
    readMoreArrow.style.transform = "rotate(-180deg)"; 
      moreText.style.display = "inline";
  }
}
function extrasFunction() {
  var moreText = document.getElementById("extras-more");
  var readMoreArrow = document.getElementById("extras-arrow")

  if (readMoreArrow.style.transform === "rotate(-180deg)"){
    readMoreArrow.style.transform = "rotate(0)"; 
    moreText.style.display = "none";
  } else {
    readMoreArrow.style.transform = "rotate(-180deg)"; 
      moreText.style.display = "inline";
  }
}
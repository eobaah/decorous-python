// Side navigation script


 // Open the sidenav

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}


 // Close/hide the sidenav

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



// Accordion script for the workout page
function showAcc () {
  let acc = document.getElementsByClassName("accordion");
  let i;

  for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function(){
          this.classList.toggle("active");
          this.nextElementSibling.classList.toggle("show");
    }
  }
  }


  let slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
    showDivs(slideIndex += n);
  }


// trainer carousel small screens and workout page
function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("trainer-snapshot");
}
// trainer carousel small screens
function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("trainer-snapshot");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "flex";
}

// trainer carousel tablet screens
function plusDivsTablet(n) {
  showDivsTablet(slideIndex += n);
}

function showDivsTablet(n) {
  let i;
  let x = document.getElementsByClassName("tablet trainer-snapshot");

  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "flex";
}

// trainer carousel large screens
function plusDivsLarge(n) {
  showDivsLarge(slideIndex += n);
}

function showDivsLarge(n) {
  let i;
  let x = document.getElementsByClassName("large trainer-snapshot");
  console.log(document.getElementsByClassName("large trainer-snapshot"));
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "flex";
}

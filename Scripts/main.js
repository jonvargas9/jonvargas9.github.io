var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function validateForm() {
    var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["femail"].value;
    var z = document.forms["myForm"]["fmessage"].value;

    if (x == "" || y == "" || z == "") {
      alert("all fields must be filled out");
    }
    else if (format.test(x).value || format.test(y).value){
        alert("No special characters are allowed");
    }
    else{
        alert("form sent!");
        console.log(x);
        console.log(y);
        console.log(z);
    }


  }
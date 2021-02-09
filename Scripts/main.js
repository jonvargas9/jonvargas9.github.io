const SKILLS = [
    {name:"LEADERSHIP",value:90,},
    {name:"PATIENCE",value:30,},
    {name:"COMMUNICATION",value:60,},
    {name:"KARATE",value:50,},
    {name:"PROGRAMMING",value:100,},
    {name:"GRAPHIC DESIGN",value:70,},
];

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

function validateForm() {
    let format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["femail"].value;
    let z = document.forms["myForm"]["fmessage"].value;

    if (x == "" || y == "" || z == "") {
      alert("all fields must be filled out");
    }
    else if (!format.test(x).value || !format.test(y).value){
        alert("No special characters are allowed");
    }
    else{
        alert("form sent!");
        console.log(x);
        console.log(y);
        console.log(z);
    }

}

function skillshow(){

    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    
    SKILLS.forEach(element => {
        let skillbox = document.createElement('div');
        let skillname = document.createElement('h2');
        let skillnametext = document.createTextNode(element.name);
        let xpbar = document.createElement('div');
        xpbar.classList.add('xpbar');
        xpbar.style.width=element.value+'%';
        
        skillname.appendChild(skillnametext);
        skillbox.appendChild(skillname);
        wrapper.appendChild(skillbox);
        wrapper.appendChild(xpbar);
        
    });

    document.getElementById('skillset').appendChild(wrapper);


}


document.onload = skillshow();

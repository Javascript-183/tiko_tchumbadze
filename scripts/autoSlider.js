function searchContact() {
    let filterDiv = document.getElementsByClassName("filterDiv");
    let input = document.getElementById("userInput").value;

    for (let divElement of filterDiv) {
        txtValue = divElement.textContent;
        
        if (txtValue.toUpperCase().indexOf(input.toUpperCase()) > -1) {
            divElement.style.display = "block";
        } else {
            divElement.style.display = "none";
        }

    }
}

let slideIndex2 = 1;
autoSlider1();
function autoSlider1() {
    let slides = document.getElementsByClassName("myautoPictures1");
    let dots = document.getElementsByClassName("dot");
    let i;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeDot", "")
    }

    slideIndex2 = slideIndex2 + 1;

    if (slideIndex2 > slides.length) {
        slideIndex2 = 1;
    };

    slides[slideIndex2-1].style.display = "block";
    dots[slideIndex2-1].className += " activeDot";

    setTimeout(autoSlider1, 2000);
}

let slideIndex3 = 1;
autoSlider2();
function autoSlider2() {
    let slides = document.getElementsByClassName("myautoPictures2");
    let dots = document.getElementsByClassName("dot");
    let i;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeDot", "")
    }

    slideIndex2 = slideIndex2 + 1;

    if (slideIndex2 > slides.length) {
        slideIndex2 = 1;
    };

    slides[slideIndex2-1].style.display = "block";
    dots[slideIndex2-1].className += " activeDot";

    setTimeout(autoSlider2, 2000);
}

let slideIndex4 = 1;
autoSlider3();
function autoSlider3() {
    let slides = document.getElementsByClassName("myautoPictures3");
    let dots = document.getElementsByClassName("dot");
    let i;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeDot", "")
    }

    slideIndex2 = slideIndex2 + 1;

    if (slideIndex2 > slides.length) {
        slideIndex2 = 1;
    };

    slides[slideIndex2-1].style.display = "block";
    dots[slideIndex2-1].className += " activeDot";

    setTimeout(autoSlider3, 2000);
}

let slideIndex5 = 1;
autoSlider4();
function autoSlider4() {
    let slides = document.getElementsByClassName("myautoPictures4");
    let dots = document.getElementsByClassName("dot");
    let i;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeDot", "")
    }

    slideIndex2 = slideIndex2 + 1;

    if (slideIndex2 > slides.length) {
        slideIndex2 = 1;
    };

    slides[slideIndex2-1].style.display = "block";
    dots[slideIndex2-1].className += " activeDot";

    setTimeout(autoSlider4, 2000);
}

let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);


function moveSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 2) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }

  x[slideIndex[no]-1].style.display = "block"; 
}

slidesShower(1);
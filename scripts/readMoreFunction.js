function tushetiReadMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "შეიტყვე მეტი >>"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "<< შეიტყვე ნაკლები"; 
      moreText.style.display = "inline";
    }
  }

function kopenReadMore() {
    var dots = document.getElementById("kopendots");
    var moreText = document.getElementById("morekopen");
    var btnText = document.getElementById("mykopenBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "შეიტყვე მეტი >>"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "<< შეიტყვე ნაკლები"; 
      moreText.style.display = "inline";
    }
}

function helsReadMore() {
    var dots = document.getElementById("helsdots");
    var moreText = document.getElementById("morehels");
    var btnText = document.getElementById("myhelsBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "შეიტყვე მეტი >>"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "<< შეიტყვე ნაკლები"; 
      moreText.style.display = "inline";
    }
}
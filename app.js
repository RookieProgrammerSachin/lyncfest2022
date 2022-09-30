document.addEventListener("DOMContentLoaded",()=>{
    var time = (new Date().getTime() / 1000) + (86400*19) + 1

    var flipdown = new FlipDown(time).start().ifEnded(()=>{
        console.log("mudinchu")
    })
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".header-nav img").style.width = "60px";
    document.querySelector(".header-nav .brand-name").style.fontSize = "1.2rem";
    document.querySelectorAll(".header-nav .nav-buttons .nav-btn").forEach((btn)=>{btn.style.fontSize = "0.95rem"});
    
    // document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.querySelector(".header-nav img").style.width = "100px";
    document.querySelector(".header-nav .brand-name").style.fontSize = "";
    document.querySelectorAll(".header-nav .nav-buttons .nav-btn").forEach((btn)=>{btn.style.fontSize = ""});
    // document.getElementById("navbar").style.padding = "80px 10px";
    // document.getElementById("logo").style.fontSize = "35px";
  }
} 

particlesJS.load("particles-js", "./static/particlesjs-config.json", function() {
    console.log('callback - particles-js config loaded');
  });

document.querySelector('.hamburger').addEventListener('click', (e)=>{
    document.querySelector('.nav-buttons-mobile').classList.toggle('hidden-nav')
})
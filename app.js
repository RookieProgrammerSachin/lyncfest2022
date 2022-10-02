document.querySelector('.hamburger').addEventListener('click', (e)=>{
  document.querySelector('.nav-buttons-mobile').classList.toggle('hidden-nav')
  let i=0;
  document.querySelectorAll('.hamburger span').forEach((span)=>{ 
    i+=1; 
    span.classList.toggle(`close-${i}`);
   })
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".header-nav img").style.width = "80px";
    document.querySelector(".header-nav .brand-name").style.fontSize = "1.3rem";
    document.querySelectorAll(".header-nav .nav-buttons .nav-btn").forEach((btn)=>{btn.style.fontSize = "1.2rem"});
    document.querySelector(".hamburger").style.top = "26px";
    // document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.querySelector(".header-nav img").style.width = "100px";
    document.querySelector(".header-nav .brand-name").style.fontSize = "";
    document.querySelectorAll(".header-nav .nav-buttons .nav-btn").forEach((btn)=>{btn.style.fontSize = ""});
    document.querySelector(".hamburger").style.top = "";
    // document.getElementById("navbar").style.padding = "80px 10px";
    // document.getElementById("logo").style.fontSize = "35px";
  }
} 


AOS.init();

document.addEventListener("DOMContentLoaded",()=>{
  var time = new Date().getTime()/1000 + (86400*18) + 1;

  var flipdown = new FlipDown(time).start().ifEnded(()=>{
      console.log("mudinchu")
  })
})

particlesJS.load("particles-js", "./static/particlesjs-config.json", function() {
    console.log('callback - particles-js config loaded');
  });

timeline(document.querySelectorAll('.timeline'), {
  forceVerticalMode: 800,
  mode: 'vertical',
  visibleItems: 3,
  verticalStartPosition: 'left',
  verticalTrigger: '200px'
});

if(window.innerWidth <=800){
  document.querySelectorAll(".timeline__content").forEach((item)=>{item.removeAttribute("data-aos")});
}
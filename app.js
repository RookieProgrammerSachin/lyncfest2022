document.querySelector(".hero").scrollIntoView();

const overlayGlitch = document.querySelector('.overlay');
const overlayGlitchEffect = PowerGlitch.glitch(overlayGlitch);
overlayGlitchEffect.stopGlitch();

setTimeout(() => {
  overlayGlitchEffect.startGlitch();
}, 5000);

setTimeout(()=>{
  overlayGlitchEffect.stopGlitch();
  overlayGlitch.classList.add("hide-away");
},7000);

setTimeout(() => {
  overlayGlitch.remove();
  document.querySelector(".hero").scrollIntoView();
  document.body.classList.remove("disable-scroll");
}, 9000);

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
  } else {
    document.querySelector(".header-nav img").style.width = "100px";
    document.querySelector(".header-nav .brand-name").style.fontSize = "";
    document.querySelectorAll(".header-nav .nav-buttons .nav-btn").forEach((btn)=>{btn.style.fontSize = ""});
    document.querySelector(".hamburger").style.top = "";
  }

  if(document.body.scrollTop > 120 || document.documentElement.scrollTop > 120){
    document.querySelector(".top").classList.add('show-top');
  } else {
    document.querySelector(".top").classList.remove('show-top');
  }

} 


AOS.init();

const heroImg = document.querySelector('.hero img')
const heroImgGlitch = PowerGlitch.glitch(heroImg);

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

if(window.innerWidth < 800){
  const contents = document.querySelectorAll(".timeline__content")
  contents.forEach((item)=>{item.setAttribute('data-aos','fade-left')})
}
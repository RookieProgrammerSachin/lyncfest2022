document.addEventListener("DOMContentLoaded",()=>{
    var time = (new Date().getTime() / 1000) + (86400*19) + 1

    var flipdown = new FlipDown(time).start().ifEnded(()=>{
        console.log("mudinchu")
    })
})

function spliteScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration:500,
        triggerElement:".content-part",
    })
    .setPin(".content-part")
    .addIndicators()
    .addTo(controller);
}
spliteScroll();


let stars = document.getElementById("stars");

window.addEventListener("scroll", function(){
    let value = window.scrollY;
    stars.style.marginLeft = value * .2 + "px";
});
alert("hello")




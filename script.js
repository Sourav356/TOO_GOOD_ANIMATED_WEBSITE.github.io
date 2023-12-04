const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



function imgconanimation(){
    var imgcon = document.querySelector("#img")
var buybtn = document.querySelector("#buy")
imgcon.addEventListener("mouseenter", function(){
    gsap.to(buybtn,{
        scale: 1,
        opacity: 1
    })
})

imgcon.addEventListener("mouseleave",function(){
    gsap.to(buybtn,{
        scale: 0,
        opacity: 0
    })
})
imgcon.addEventListener("mousemove",function(dets){
    gsap.to(buybtn,{
        left:dets.x-50,
        top:dets.y-80
    })
})
}
imgconanimation()

function loadinganimation(){
    gsap.from("#page1 h1",{
        y: 90,
        opacity: 0,
        delay: 0.4,
        duration: 0.8,
        stagger: 0.2
    })

    gsap.from("#page1 #img",{
        scale: 0.9,
        opacity: 0,
        delay: 1.3,
        duration: 0.3,
    })
}
loadinganimation()

document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y

    })
})

// document.querySelector("#child1").addEventListener("mouseenter",function(){
//     gsap.to("#cursor",{
//         transform: "translate(-50%,-50%) scale(1)"
        
//     })

// })

// document.querySelector("#child1").addEventListener("mouseleave",function(){
//     gsap.to("#cursor",{
//         transform: "translate(-50%,-50%) scale(0)"

//     })

// })

document.querySelectorAll(".child").forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform: "translate(-50%,-50%) scale(1)"           
        })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform: "translate(-50%,-50%) scale(0)"           
        })
    })
})


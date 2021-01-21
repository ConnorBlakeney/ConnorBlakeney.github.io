$(document).ready(function() {

    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    let typed = new Typed(".sub", {
        strings: ["Software Engineer.", "Web Developer.", "Lifelong Learner."],
        typeSpeed: 70,
        loop: true
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    $('.chart').easyPieChart({
            //your options goes here
        });
})

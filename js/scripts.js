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
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    })


    let skillsTopOffset = $(".skillsSection").offset().top;
    let statsTopOffset = $(".statsSection").offset().top;
    let countUpFinished = false

    $(window).scroll(function() {
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

            $('.chart').easyPieChart({
                    easing: 'easeInOut',
                    barColor: 'white',
                    trackColor: false,
                    scaleColor: false,
                    lineWidth: 4,
                    size: 152,
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent))
                    }
                })

        }
    })

    $(window).scroll(function() {
        if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {

            
            $(".counter").each(function() {
                let element = $(this)
                let endVal = parseInt(element.text())

                element.countup(endVal)
            })
            countUpFinished = true
        }
    })

    $("[data-fancybox]").fancybox()

    $(".items").isotope({
        filter: "*",
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    })

    $("#filters a").click(function() {

        $("#filters .current").removeClass("current")
        $(this).addClass("current")

        let selector = $(this).attr("data-filter")

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        })
        return false

    })
})

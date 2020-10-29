function user_wishlist(product_url) {
    $.ajax({
        url: product_url,
        success: function(response) { console.log('success part') },
        error: function(response) {}
    })
}
function user_cart(product_url, product_id, csrf_token) {
    var quantity = $('#_' + product_id).val();
    $.ajax({
        type: 'POST',
        url: product_url,
        data: { 'quantity': quantity, csrfmiddlewaretoken: csrf_token },
        success: function(response) { cart_view() },
        error: function(response) {}
    })
}
AOS.init({
        once: !0,
        duration: 1e3
    }),
    function(t) {
        "use strict";
        $("#remb").click(function() {
            $("#remb").toggleClass("greyco blackco")
        }), $(".forplusminus").on("click", ".quantitybtn", function() {
            var t = $(this),
                e = t.parent().find("input").val();
            if (t.hasClass("inc")) var a = parseFloat(e) + 1;
            else a = e > 0 ? parseFloat(e) - 1 : 0;
            t.parent().find("input").val(a)
        }), $(".mywish").on("click", ".fa-heart", function() {
            var t = $(this);
            t.hasClass("heartblack") ? (t.addClass("fas heartred"), t.removeClass("far heartblack")) : (t.addClass("far heartblack"), t.removeClass("fas heartred"))
        }), $(".home-slider").owlCarousel({
            loop: !1,
            margin: 0,
            items: 1,
            dots: !0,
            autoplay: !1,
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            nav: !0,
            autoplayHoverPause: !0,
            navText: ["<i class='fa fa-angle-left'><i/>", "<i class='fa fa-angle-right'><i/>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        var a = 1,
            s = 1,
            n = 1;
        $(document).scroll(function() {
            $(this).scrollTop() > 50 && (1 === a && $(".number1").each(function() {
                $(this).prop("Counter1", 0).animate({
                    Counter1: 15
                }, {
                    duration: 2e3,
                    easing: "swing",
                    step: function(t) {
                        $(this).text(Math.ceil(t))
                    }
                });
                var t = document.getElementById("counta1"),
                    e = (document.getElementById("counta2"), document.createElement("strong"));
                e.innerHTML = "+", setTimeout(function() {
                    t.insertBefore(e, counta2)
                }, 2e3), a++
            }), 1 === s && $(".number2").each(function() {
                $(this).prop("Counter2", 0).animate({
                    Counter2: 1e3
                }, {
                    duration: 2e3,
                    easing: "swing",
                    step: function(t) {
                        $(this).text(Math.ceil(t))
                    }
                });
                var t = document.getElementById("countb1"),
                    e = (document.getElementById("countb2"), document.createElement("strong"));
                e.innerHTML = "+", setTimeout(function() {
                    t.insertBefore(e, countb2)
                }, 2e3), s++
            }), 1 === n && $(".number3").each(function() {
                $(this).prop("Counter3", 0).animate({
                    Counter3: 95
                }, {
                    duration: 2e3,
                    easing: "swing",
                    step: function(t) {
                        $(this).text(Math.ceil(t))
                    }
                });
                var t = document.getElementById("countc1"),
                    e = (document.getElementById("countc2"), document.createElement("strong"));
                e.innerHTML = "%", setTimeout(function() {
                    t.insertBefore(e, countc2)
                }, 2e3), n++
            }))
        }), $(".giftpackprod").owlCarousel({
            loop: !1,
            margin: 15,
            items: 4,
            dots: !0,
            smartSpeed: 1e3,
            autoHeight: !1,
            autoWidth: !0,
            autoplay: !1,
            autoplayHoverPause: !0,
            nav: !0,
            navText: ["<i class='fa fa-angle-left'><i/>", "<i class='fa fa-angle-right'><i/>"]
        }), $(".mywishlist").on("click", ".fa-heart", function() {
            var t = $(this);
            t.hasClass("heartblack") ? (t.addClass("fas heartred"), t.removeClass("far heartblack")) : (t.addClass("far heartblack"), t.removeClass("fas heartred"))
        }), $(".product__discount__slider").owlCarousel({
            loop: !1,
            margin: 5,
            items: 4,
            dots: !0,
            smartSpeed: 1e3,
            autoHeight: !1,
            autoWidth: !0,
            autoplay: !1,
            autoplayHoverPause: !0,
            nav: !0,
            navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"]
        }), $(".testimonycarousel").owlCarousel({
            loop: !0,
            margin: 50,
            items: 3,
            dots: !0,
            smartSpeed: 1e3,
            autoHeight: !1,
            autoWidth: !1,
            autoplay: !1,
            nav: !0,
            autoplayHoverPause: !0,
            navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1100: {
                    items: 3
                }
            }
        }), $(".brandcarousel").owlCarousel({
            loop: !0,
            margin: 0,
            items: 3,
            dots: !0,
            smartSpeed: 1e3,
            autoHeight: !1,
            autoWidth: !1,
            autoplay: !1,
            nav: !0,
            autoplayHoverPause: !0,
            navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1100: {
                    items: 3
                }
            }
        }), $(".product__details__pic__slider").owlCarousel({
            margin: 10,
            items: 4
        }), $(".product__details__pic__slider #smallimgsrc1").click(function() {
            $("#bigimgsrc").attr("src", $("#smallimgsrc1").attr("src"))
        }), $(".product__details__pic__slider #smallimgsrc2").click(function() {
            $("#bigimgsrc").attr("src", $("#smallimgsrc2").attr("src"))
        }), $(".product__details__pic__slider #smallimgsrc3").click(function() {
            $("#bigimgsrc").attr("src", $("#smallimgsrc3").attr("src"))
        }), $(".product__details__pic__slider #smallimgsrc4").click(function() {
            $("#bigimgsrc").attr("src", $("#smallimgsrc4").attr("src"))
        }), $(".deletebtn").on("click", function() {
            $(this).parent().parent().parent().fadeOut()
        }), $(".delwish").on("click", function() {
            $(this).parent().fadeOut()
        })
    }(jQuery);
var mybutton = document.getElementById("gototop"),
    win = $(window);
function scrollFunction() {
    document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ? mybutton.style.display = "block" : mybutton.style.display = "none"
}
function topFunction() {
    document.body.scrollTop = 0, document.documentElement.scrollTop = 0
}
win.scroll(function() {
    scrollFunction()
});
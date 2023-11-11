// hide nav bar
$(document).ready(function () {
    var lastScrollTop = 0;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            // scroll down
            $('nav').addClass('hide-nav');
        } else {
            // scroll up
            $('nav').removeClass('hide-nav');
        }
        lastScrollTop = st;
    });
});

$(document).ready(function () {
    //scroll to next section
    var sections = ['#profile', '#about', '#project', '#contact'];
    var currentSection = 0;
    var scrollLocked = false;

    function scrollToSection(index) {
        var offset = $(sections[index]).offset().top;

        $('html, body').animate({
            scrollTop: offset
        }, 800);
    }

    //mouse scroll events
    $(window).on('wheel', function (e) {
        var scrollPosition = $(window).scrollTop();

        if (!scrollLocked) {
            scrollLocked = true;

            setTimeout(function () {
                scrollLocked = false;
            }, 800);

            if (e.originalEvent.deltaY > 0) {
                down
                for (var i = 0; i < sections.length - 1; i++) {
                    var sectionTop = $(sections[i]).offset().top;
                    var sectionBottom = sectionTop + $(sections[i]).outerHeight();

                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        var visibleHeight = scrollPosition + $(window).height() - sectionTop;
                        var percentVisible = visibleHeight / $(sections[i]).outerHeight();

                        if (percentVisible > 0.5) {
                            scrollToSection(i + 1);
                            break;
                        }
                    }
                }
            } else { //up
                for (var i = sections.length - 1; i > 0; i--) {
                    var sectionTop = $(sections[i]).offset().top;
                    var sectionBottom = sectionTop + $(sections[i]).outerHeight();

                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        var visibleHeight = sectionBottom - scrollPosition;
                        var percentVisible = visibleHeight / $(sections[i]).outerHeight();

                        if (percentVisible > 0.5) {
                            scrollToSection(i - 1);
                            break;
                        }
                    }
                }
            }
        }
    });
});
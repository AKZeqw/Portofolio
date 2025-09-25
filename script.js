$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('.nav-link').on('click', function(e) {
        e.preventDefault();
        const target = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(target).offset().top - 70
        }, 800);
    });

    // Hero buttons smooth scrolling
    $('.btn-primary, .btn-secondary').on('click', function(e) {
        e.preventDefault();
        const target = $(this).attr('href');
        
        if (target.startsWith('#')) {
            $('html, body').animate({
                scrollTop: $(target).offset().top - 70
            }, 800);
        } else {
            window.open(target, '_blank');
        }
    });

    // Active navigation highlight
    $(window).on('scroll', function() {
        const scrollPos = $(window).scrollTop();
        
        $('.nav-link').each(function() {
            const targetSection = $($(this).attr('href'));
            const sectionTop = targetSection.offset().top - 100;
            const sectionBottom = sectionTop + targetSection.outerHeight();
            
            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                $('.nav-link').removeClass('active');
                $(this).addClass('active');
            }
        });
    });

    // Fade in animation for sections
    $(window).on('scroll', function() {
        $('.about, .skills, .projects, .contact').each(function() {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('fade-in');
            }
        });
    });

    // Project cards hover effect
    $('.project-card').hover(
        function() {
            $(this).css('box-shadow', '0 15px 40px rgba(118, 75, 162, 0.2)');
        },
        function() {
            $(this).css('box-shadow', '0 10px 30px rgba(118, 75, 162, 0.1)');
        }
    );

    // Skill tags animation
    $('.skill-tag').each(function(index) {
        $(this).delay(index * 100).fadeIn(500);
    });

    // Contact form validation (if added later)
    $('.contact-form').on('submit', function(e) {
        e.preventDefault();
        // Add form validation logic here
        console.log('Form submitted');
    });

    // Mobile menu toggle (basic implementation)
    $('.nav-logo').on('click', function() {
        $('.nav-menu').toggleClass('active');
    });

    // Profile image error handling
    $('#profile-img').on('error', function() {
        $(this).hide();
        $(this).parent().append('<div class="profile-text">AK</div>');
    });

    // Initialize animations on page load
    setTimeout(function() {
        $('.hero-text').addClass('slide-in-left');
        $('.hero-image').addClass('slide-in-right');
    }, 500);
});

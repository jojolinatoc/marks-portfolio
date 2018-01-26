var portfolio = angular.module('portfolio', []);

portfolio.controller('headerCtrl', function($scope) {
    $scope.menu = [
        {
            title: "Home",
            link: "#Home",
            class: ""
        },{
            title: "About",
            link: "#About",
            class: ""
        },{
            title: "Services",
            link: "#Services",
            class: ""
        },{
            title: "Works",
            link: "#Works",
            class: ""
        },{
            title: "Contact",
            link: "#Contact",
            class: ""
        },
    ];
});

portfolio.controller('portfolioCtrl', function($scope) {
    $scope.portfolio = [
        {
            id: 5,
            image: "public/images/himirror.PNG",
            caption: "HiMirror",
            link: "#myModal5"
        },
        {
            id: 1,
            image: "public/images/p1.PNG",
            caption: "PUSOD, Inc.",
            link: "#myModal"
        },{
            id: 2,
            image: "public/images/his2.PNG",
            caption: "HIS Website",
            link: "#myModal2"
        },{
            id: 3,
            image: "public/images/xyz.PNG",
            caption: "XYZ Website",
            link: "#myModal3"
        },{
            id: 4,
            image: "public/images/service-center.PNG",
            caption: "Service Center",
            link: "#myModal4"
        },{
            id: 6,
            image: "public/images/garage.PNG",
            caption: "GARAGEDOOR.COM",
            link: "#myModal6"
        }
    ];

    $scope.modals = [
        {
            id: "myModal5",
            title: "HiMirror Website",
            thumbnail: "public/images/himirror.PNG",
            content: "An online store that promotes HiMirror which is a smart mirror that assess your skin’s condition, make the best use of your existing skincare products, supplemented with reviews by those with the same skincare concerns as yourself.",
            link: "https://www.himirror.com/us_en/home"
        },
        {
            id: "myModal4",
            title: "Service Center",
            thumbnail: "public/images/service-center.PNG",
            content: "This is an online customer service that helps the clients about the products of XYZprinting.  I am the one that develop the front-end of this website.  It is responsive and accessible through different view ports such as Desktop, Tablets and Smart phones.  I use Play 2.4 framework, HTML, CSS, AngularJS, Javascript, Jquery and Bootstrap to develop this website.",
            link: "http://support.xyzfamily.com/us_en/Help"
        },
        {
            id: "myModal",
            title: "Online Inquiry and Reservation for TLCC",
            thumbnail: "public/images/p1.PNG",
            content: "I developed this website during my On-the-Job-Training at PUSOD, Inc. It is an online inquiry and reservation system for which client can inquire and book for a reservation on the facility that PUSOD, Inc. owned.  They gave me a deadline and I accomplish the task on time for which the company has had positive feedback.",
            link: "http://pusod.org/"
        },{
            id: "myModal2",
            title: "Health Information System",
            thumbnail: "public/images/his2.PNG",
            content: "An online health information system that is use by doctor's to examine or review the heart health condition of a patient.",
            link: "http://his.stage.xyzprinting.com"
        },{
            id: "myModal3",
            title: "XYZ Website",
            thumbnail: "public/images/xyz.PNG",
            content: "I am maintaining this website, actually we are a team who maintains websites of XYZprinting.  The website is available in different regions with different languages such as Korea, Japan, Taiwan, Europe, Thailand and China.",
            link: "http://us.xyzprinting.com/"
        },{
            id: "myModal6",
            title: "Stanley GARAGEDOOR.COM",
            thumbnail: "public/images/garage.PNG",
            content: "I am maintaining this website, actually we are a team who maintains websites of XYZprinting.  The website is available in different regions with different languages such as Korea, Japan, Taiwan, Europe, Thailand and China.",
            link: "https://garage-door.com/"
        }
    ];
});

$(window).scroll(function() {
    var aT = $('#About').offset().top,
        sT = $('#Services').offset().top,
        wT = $('#Works').offset().top,
        cT = $('#Contact').offset().top,
        hH = $('#About').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (aT-wH + 75)){
        $('.html').css('width','90%');
        $('.css').css('width','87%');
        $('.javascript').css('width','84%');
        $('.angular').css('width','80%');
        $('.bootstrap').css('width','86%');
       // $('.photoshop').css('width','83%');
        $('.webgl').css('width','80%');
        $('.play').css('width','83%');
        $('.about-title').addClass('slideInDown animated');
        $('.about-1').addClass('bounceInLeft animated');
        $('.about-2').addClass('bounceInRight animated');
    }
    if (wS > (sT-wH + 75)){
        $('.service-title').addClass('slideInDown animated');
        $('.service-1').addClass('bounceInLeft animated');
        $('.service-2').addClass('bounceInUp animated');
        $('.service-3').addClass('bounceInRight animated');
    }
    if (wS > (wT-wH + 75)){
        $('.work-title').addClass('slideInDown animated');
        $('.works-done').addClass('zoomIn animated');
    }
    if (wS > (cT-wH + 75)){
        $('.contact-title').addClass('slideInDown animated');
        $('.contact-form').addClass('rotateIn animated');
    }
});

(function() {
    if (!String.prototype.trim) {
        (function() {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function() {
                return this.replace(rtrim, '');
            };
        })();
    }
    [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
        // in case the input is already filled..
        if( inputEl.value.trim() !== '' ) {
            classie.add( inputEl.parentNode, 'input--filled' );
        }

        // events:
        inputEl.addEventListener( 'focus', onInputFocus );
        inputEl.addEventListener( 'blur', onInputBlur );
    } );
    function onInputFocus( ev ) {
        classie.add( ev.target.parentNode, 'input--filled' );
    }
    function onInputBlur( ev ) {
        if( ev.target.value.trim() === '' ) {
            classie.remove( ev.target.parentNode, 'input--filled' );
        }
    }
})();

$(document).ready(function(){
    var headerHeight = 75;
    $('.main-menu a, .go-to-top').bind("click", function(e) {
        e.preventDefault();

        var target = $(this).attr("href"); //Get the target
        var scrollToPosition = $(target).offset().top - headerHeight;

        $('html').animate({ 'scrollTop': scrollToPosition }, 600, function(){
            window.location.hash = "" + target;
            $('html').animate({ 'scrollTop': scrollToPosition }, 0);
        });
    });
});

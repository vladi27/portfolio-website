(function($) {
  "use strict";

  // Enable Bootstrap tooltips via data-attributes globally
  $('[data-toggle="tooltip"]').tooltip();

  // Enable Bootstrap popovers via data-attributes globally
  $('[data-toggle="popover"]').popover();

  $(".popover-dismiss").popover({
    trigger: "focus",
  });

  // Activate Feather icons
  feather.replace();

  // Activate Bootstrap scrollspy for the sticky nav component
  $("body").scrollspy({
    target: "#stickyNav",
    offset: 82,
  });

  // Scrolls to an offset anchor when a sticky nav link is clicked
  $('.nav-sticky a.nav-link[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 81,
          },
          200
        );
        return false;
      }
    }
  });

  // Collapse Navbar
  // Add styling fallback for when a transparent background .navbar-marketing is scrolled
  var navbarCollapse = function() {
    if ($(".navbar-marketing.bg-transparent.fixed-top").length === 0) {
      return;
    }
    if ($(".navbar-marketing.bg-transparent.fixed-top").offset().top > 0) {
      $(".navbar-marketing").addClass("navbar-scrolled");
    } else {
      $(".navbar-marketing").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // var iconButton = $("projects");
  // iconButton.on("click", function() {
  //   $(iconButton).removeClass("aos-animate");
  //   setTimeout(function() {
  //     $(iconButton).addClass("aos-animate");
  //   }, 200);
  // });

  // function checkWidth() {
  //   console.log("cc");
  //   if ($(window).width() > 514) {
  //     $("#anime").addClass("typewriter");
  //     console.log($("#anime"));
  //   } else {
  //     $("#anime").text("Hi there!");
  //     $("#anime").removeClass("typewriter");
  //   }
  // }

  // checkWidth();
  // $(window).resize(checkWidth);

  var _CONTENT = [
    "Hi there, my name is Vlad Bulvakhter.",
    "Welcome to my portfolio website!",
    "Let's connect if you like what I do! :)",
  ];

  // Current sentence being processed
  var _PART = 0;

  // Character number of the current sentence being processed
  var _PART_INDEX = 0;

  // Holds the handle returned from setInterval
  var _INTERVAL_VAL;

  // Element that holds the text
  var _ELEMENT = document.querySelector("#anime");
  var initInterval = 400;

  // Cursor element
  //var _CURSOR = document.querySelector(".cursor");

  // Implements typing effect

  var count = 0;
  function Type() {
    //Get substring with 1 characater added
    //514
    if ($(window).width() < 890) {
      _CONTENT = ["Hey there!", "I'm Vlad.", "Welcome!"];
    } else {
      _CONTENT = [
        "Hi there, my name is Vlad Bulvakhter.",
        "Welcome to my portfolio website!",
        "Let's connect if you like what I do! :)",
      ];
    }

    if (count < 9) {
      count++;
      return;
    }
    initInterval = 100;
    var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    // _ELEMENT.syle.margin = auto;
    _ELEMENT.innerHTML = text;

    _PART_INDEX++;

    // If full sentence has been displayed then start to delete the sentence after some time
    if (text === _CONTENT[_PART]) {
      // Hide the cursor
      // _CURSOR.style.display = "none";

      clearInterval(_INTERVAL_VAL);
      setTimeout(function() {
        // _ELEMENT.style.display = "none";
        _INTERVAL_VAL = setInterval(Delete, 70);
      }, 1000);
    }
  }

  // Implements deleting effect
  function Delete() {
    // Get substring with 1 characater deleted
    var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX--;

    // If sentence has been deleted then start to display the next sentence
    if (text === "") {
      clearInterval(_INTERVAL_VAL);

      // If current sentence was last then display the first one, else move to the next
      if (_PART == _CONTENT.length - 1) {
        _PART = 0;
        count = 0;
      } else _PART++;

      _PART_INDEX = 0;

      // Start to display the next sentence after some time
      setTimeout(function() {
        // _CURSOR.style.display = "inline-block";
        _ELEMENT.style.display = "inline";
        _INTERVAL_VAL = setInterval(Type, 100);
      }, 500);
    }
  }

  // Start the typing effect on load
  _INTERVAL_VAL = setInterval(Type, 100);
})(jQuery);

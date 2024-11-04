/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */

function downloadResume() {
    fetch("./portfolio/assets/Antara_Khan_Resume_2024.pdf") // Fetch the PDF file
      .then(response => response.blob()) // Convert to a Blob
      .then(blob => {
        // Create a URL for the Blob and trigger the download
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.download = "Antara_Khan_Resume_2024.pdf";
        document.body.appendChild(link);

        link.click();

        // Clean up the URL object and link
        URL.revokeObjectURL(url);
        document.body.removeChild(link);
      })
      .catch(error => console.error("Failed to download file:", error));
  }

  document.getElementById("qr-code-container").onclick = function() {
    window.open("https://qrco.de/antara_resume", "_blank");
};
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict

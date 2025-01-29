document.getElementById("currentYear").textContent = new Date().getFullYear();



document.addEventListener("DOMContentLoaded", function() {
    // Function to increment numbers
    function animateCounter(counterElement) {
        const target = +counterElement.getAttribute('data-target');
        const speed = 200; // The higher the value, the slower the counter

        const updateCount = () => {
            const current = +counterElement.innerText;
            const increment = target / speed;

            if (current < target) {
                counterElement.innerText = Math.ceil(current + increment);
                setTimeout(updateCount, 10);
            } else {
                counterElement.innerText = target;
            }
        };

        updateCount();
    }

    // Create an IntersectionObserver to detect when the counter section is in view
    const observerOptions = {
        threshold: 0.5 // Starts animation when 50% of the counter is visible
    };

    const counters = document.querySelectorAll('.counter');

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target); // Stop observing after animating
            }
        });
    }, observerOptions);

    // Observe each counter element
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const offcanvasNavbar = document.getElementById('offcanvasNavbar');
    const offcanvasLinks = offcanvasNavbar.querySelectorAll('.nav-link');
    
    // Add listener to close offcanvas when any nav-link, including Reach Out, is clicked
    offcanvasLinks.forEach(link => {
      link.addEventListener('click', () => {
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasNavbar);
        bsOffcanvas.hide();
      });
    });
  
    // Specifically add listener for Reach Out if needed
    const reachOutBtn = document.getElementById('reachOutBtn');
    if (reachOutBtn) {
      reachOutBtn.addEventListener('click', () => {
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasNavbar);
        bsOffcanvas.hide();
      });
    }
  });
  

// //   Hover effect on counter
// document.addEventListener("DOMContentLoaded", () => {
//   const hoverElements = document.querySelectorAll('.hov');
//   const headTags = document.querySelectorAll('.counter');
  
//   hoverElements.forEach((element) => {
//     element.addEventListener("mouseover", () => {
//       element.style.backgroundColor = "#e67e22";
//       headTags.forEach((headTag) => {
//         headTag.style.color = "black";
//       });
//     });
//     element.addEventListener("mouseout", () => {
//       element.style.backgroundColor = "";
//       headTags.forEach((headTag) => {
//         headTag.style.color = "";
//       });
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;

      const increment = target / 5000;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCounter, 10);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
});


  
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  // Function to update the active link
  const updateActiveLink = () => {
    let currentSection = "";

    // Find the section currently in the viewport
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });

    // Update the active class in the navbar
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("active");
      }
    });
  };

  // Listen for scroll events
  window.addEventListener("scroll", updateActiveLink);
});


// For country telephone
// const input = document.querySelector("#phone");
// window.intlTelInput(input, {
//   initialCountry: "auto",
//   geoIpLookup: callback => {
//     fetch("https://ipapi.co/json")
//       .then(res => res.json())
//       .then(data => callback(data.country_code))
//       .catch(() => callback("us"));
//   },
//   loadUtils: () => import("/intl-tel-input/js/utils.js?1733756310855") // for formatting/placeholders etc
// });


// document.getElementById('service-hover').style.display = "none";
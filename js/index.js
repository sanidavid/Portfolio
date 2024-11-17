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
  
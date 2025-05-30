// navbar js to close toogle on mobile view
document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function () {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.navbar-collapse');

      // Only close if toggler is visible (mobile)
      if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click(); // Triggers collapse
      }
    });
  });


const roles = [
    "Monesh Kapoor  ",
    "Fullstack Developer  ",
    "Data Analyst  ",
    "Python Developer  "
  ];
  
  let i = 0;
  let j = 0;
  let currentText = "";
  let isDeleting = false;
  
  function type() {
    const target = document.getElementById("typedText");
  
    if (isDeleting) {
      currentText = roles[i].substring(0, j--); // Remove character
    } else {
      currentText = roles[i].substring(0, j++); // Add character
    }
  
    target.textContent = currentText; // Update text content
  
    if (!isDeleting && j === roles[i].length) {
      // When full text is typed, start deleting after a delay
      isDeleting = true;
      setTimeout(type, 1000); // Wait 1 second before starting to delete
    } else if (isDeleting && j === 0) {
      // When text is fully deleted, move to the next role
      isDeleting = false;
      i = (i + 1) % roles.length; // Loop through roles array
      setTimeout(type, 200); // Short delay before starting to type new role
    } else {
      // Continue typing/deleting with speed controlled by isDeleting flag
      setTimeout(type, isDeleting ? 50 : 100); // Slow down deletion, speed up typing
    }
  }
  
  // Start the typing effect
  type();
  // footer animation
   function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }


    //
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      alert("Message sent! Thank you.");
      this.reset();
    });

    // Reveal input animations on load
    window.addEventListener("load", () => {
      const fields = document.querySelectorAll(".contact-form input, .contact-form textarea, .contact-form button");
      fields.forEach(field => {
        field.style.opacity = "1";
      });
    });
    

    // project read more css

     document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function () {
      const card = this.closest('.project-description');
      const fullText = card.querySelector('.full-text');
      const shortText = card.querySelector('.short-text');

      if (fullText.classList.contains('d-none')) {
        fullText.classList.remove('d-none');
        this.textContent = 'Read Less';
      } else {
        fullText.classList.add('d-none');
        this.textContent = 'Read More';
        // Optional: Scroll back to top of the card
        // card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
    });
  });
document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("modeToggle");
    const body = document.body;

    // Fun entrance animation for header
    const header = document.querySelector('header');
    header.style.opacity = 0;
    header.style.transform = 'translateY(-50px)';
    setTimeout(() => {
        header.style.transition = 'all 0.5s ease-in-out';
        header.style.opacity = 1;
        header.style.transform = 'translateY(0)';
    }, 100);

    // Card entrance animation
    const cards = document.querySelectorAll('.section-card');
    cards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'scale(0.8)';
        setTimeout(() => {
            card.style.transition = `all 0.4s ease-in-out ${index * 0.1}s`;
            card.style.opacity = 1;
            card.style.transform = 'scale(1)';
        }, 200);
    });

    // Light and dark mode toggle
    modeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");

        // Button animation
        modeToggle.classList.add('bounce');
        setTimeout(() => {
            modeToggle.classList.remove('bounce');
        }, 300);

        // Change button text based on mode
        if (body.classList.contains("dark-mode")) {
            modeToggle.textContent = "Switch to Light Mode";
        } else {
            modeToggle.textContent = "Switch to Dark Mode";
        }
    });

    // Hover animation for cards
    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.classList.add("hover");
        });
        card.addEventListener("mouseleave", () => {
            card.classList.remove("hover");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("modeToggle");
    const body = document.body;

    // Function to update classes based on mode
    function updateMode() {
        if (body.classList.contains("dark-mode")) {
            modeToggle.textContent = "Switch to Light Mode";
        } else {
            modeToggle.textContent = "Switch to Dark Mode";
        }
    }

    // Initial mode update
    updateMode();

    // Mode toggle event listener
    modeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");

        // Update mode for all elements
        updateMode();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Remove the #
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Animate sections when scrolling into view
    const animatedSections = document.querySelectorAll('.about-trees, .tree-facts, .subscribe, .blog-section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the animation has triggered
            }
        });
    }, options);

    animatedSections.forEach(section => {
        observer.observe(section);
    });

    // Form validation for email subscription
    const form = document.querySelector('.subscribe form');
    const emailInput = document.querySelector('.subscribe input');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const emailValue = emailInput.value;

        if (validateEmail(emailValue)) {
            alert("Thank you for subscribing!");
            form.reset();
        } else {
            alert("Please enter a valid email address.");
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("modeToggle");
    const body = document.body;

    // Function to update classes based on mode
    function updateMode() {
        if (body.classList.contains("dark-mode")) {
            modeToggle.textContent = "Switch to Light Mode";
        } else {
            modeToggle.textContent = "Switch to Dark Mode";
        }
    }

    // Initial mode update
    updateMode();

    // Mode toggle event listener
    modeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");

        // Update mode for all elements
        updateMode();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Remove the #
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Animate sections when scrolling into view
    const animatedSections = document.querySelectorAll('.about-trees, .tree-facts, .subscribe, .blog-section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the animation has triggered
            }
        });
    }, options);

    animatedSections.forEach(section => {
        observer.observe(section);
    });

    // Form validation for email subscription
    const form = document.querySelector('.subscribe form');
    const emailInput = document.querySelector('.subscribe input');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const emailValue = emailInput.value;

        if (validateEmail(emailValue)) {
            alert("Thank you for subscribing!");
            form.reset();
        } else {
            alert("Please enter a valid email address.");
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Add hover effect to buttons and links for more interaction
    const buttons = document.querySelectorAll('button, .section-card a');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.classList.add('hovered');
        });
        button.addEventListener('mouseleave', () => {
            button.classList.remove('hovered');
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("modeToggle");
    const body = document.body;

    // Function to update classes based on mode
    function updateMode() {
        if (body.classList.contains("dark-mode")) {
            modeToggle.textContent = "Switch to Light Mode";
        } else {
            modeToggle.textContent = "Switch to Dark Mode";
        }
    }

    // Initial mode update
    updateMode();

    // Mode toggle event listener
    modeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");

        // Update mode for all elements
        updateMode();

        // Button bounce animation
        modeToggle.classList.add('bounce');
        setTimeout(() => {
            modeToggle.classList.remove('bounce');
        }, 300);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Remove the #
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Animate sections when scrolling into view
    const animatedSections = document.querySelectorAll('.about-trees, .tree-facts, .subscribe, .blog-section, .image-gallery, .contact-form, .faq-section, .event-section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the animation has triggered
            }
        });
    }, options);

    animatedSections.forEach(section => {
        observer.observe(section);
    });

    // Form validation for email subscription in Contact Form
    const contactForm = document.querySelector('.contact-form form');
    const emailInput = document.querySelector('.contact-form input[type="email"]');
    
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const emailValue = emailInput.value;

        if (validateEmail(emailValue)) {
            alert("Thank you for contacting us!");
            contactForm.reset();
        } else {
            alert("Please enter a valid email address.");
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Hover effect to enhance buttons and links interaction
    const buttons = document.querySelectorAll('button, .section-card a');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.classList.add('hovered');
        });
        button.addEventListener('mouseleave', () => {
            button.classList.remove('hovered');
        });
    });

    // Image gallery hover effect for scaling animation
    const galleryImages = document.querySelectorAll('.gallery-container img');
    galleryImages.forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.1)';
        });
        image.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)';
        });
    });

    // FAQ section toggle functionality
    const faqs = document.querySelectorAll('.faq h3');
    faqs.forEach(faq => {
        faq.addEventListener('click', function () {
            const faqContent = this.nextElementSibling;

            if (faqContent.style.display === 'block') {
                faqContent.style.display = 'none';
            } else {
                faqContent.style.display = 'block';
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("modeToggle");
    const body = document.body;

    // Function to update mode and button text
    function updateMode() {
        if (body.classList.contains("dark-mode")) {
            modeToggle.textContent = "Switch to Light Mode";
        } else {
            modeToggle.textContent = "Switch to Dark Mode";
        }
    }

    // Event listener for the mode toggle button
    modeToggle.addEventListener("click", () => {
        // Toggle dark-mode and light-mode classes on the body
        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");

        // Update the button text after toggling the mode
        updateMode();

        // Optional bounce animation for button
        modeToggle.classList.add("bounce");
        setTimeout(() => {
            modeToggle.classList.remove("bounce");
        }, 300);
    });

    // Initial check to set correct mode on page load
    updateMode();
});
document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("modeToggle");
    const body = document.body;
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    const navMenu = document.querySelector("nav ul");

    // Function to update classes based on mode (dark/light)
    function updateMode() {
        if (body.classList.contains("dark-mode")) {
            modeToggle.textContent = "Switch to Light Mode";
        } else {
            modeToggle.textContent = "Switch to Dark Mode";
        }
    }

    // Initial mode update
    updateMode();

    // Mode toggle event listener
    modeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");

        // Update mode for all elements
        updateMode();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Remove the #
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

            // Close the mobile navigation after clicking
            if (window.innerWidth < 768) {
                navMenu.classList.remove("open");
            }
        });
    });

    // Hamburger menu toggle event listener for mobile
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener("click", () => {
            navMenu.classList.toggle("open");
        });
    }

    // Animate sections when scrolling into view
    const animatedSections = document.querySelectorAll('.about-trees, .tree-facts, .subscribe, .blog-section, .image-gallery, .contact-form, .faq-section, .event-section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the animation has triggered
            }
        });
    }, options);

    animatedSections.forEach(section => {
        observer.observe(section);
    });

    // Form validation for email subscription
    const form = document.querySelector('.subscribe form');
    const emailInput = document.querySelector('.subscribe input');
    
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailValue = emailInput.value;

            if (validateEmail(emailValue)) {
                alert("Thank you for subscribing!");
                form.reset();
            } else {
                alert("Please enter a valid email address.");
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Add hover effect to buttons and links for more interaction
    const buttons = document.querySelectorAll('button, .section-card a');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.classList.add('hovered');
        });
        button.addEventListener('mouseleave', () => {
            button.classList.remove('hovered');
        });
    });

    // Disable some heavy animations on very small screens (optional)
    if (window.innerWidth < 768) {
        animatedSections.forEach(section => {
            section.style.transition = 'none'; // Remove transitions on mobile to improve performance
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("modeToggle");
    const body = document.body;

    // Function to update button text based on current mode
    function updateMode() {
        if (body.classList.contains("dark-mode")) {
            modeToggle.textContent = "Switch to Light Mode";
        } else {
            modeToggle.textContent = "Switch to Dark Mode";
        }
    }

    // Initial mode check
    updateMode();

    // Toggle dark and light modes on button click
    modeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");

        // Update the button text after mode change
        updateMode();
    });
});
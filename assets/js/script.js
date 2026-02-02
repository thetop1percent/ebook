// Custom JavaScript for the Thai luxury business course website

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Add animation to elements when they come into view
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements with the fade-in class
    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Initialize FAQ accordion functionality
    const faqItems = document.querySelectorAll('details');
    faqItems.forEach(item => {
        item.addEventListener('toggle', function() {
            // Optional: Add analytics or other functionality when FAQ is opened
            console.log(`FAQ ${this.querySelector('summary').textContent} was ${this.open ? 'opened' : 'closed'}`);
        });
    });
    
    // Add click tracking to buttons
    const buttons = document.querySelectorAll('button, a');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent || this.innerText;
            console.log(`Button clicked: ${buttonText}`);
        });
    });
});

// Utility function to format currency (if needed)
function formatCurrency(amount, currency = 'THB') {
    return new Intl.NumberFormat('th-TH', {
        style: 'currency',
        currency: currency
    }).format(amount);
}

// Function to handle form submissions (if forms are added later)
function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData);
    
    // Process form data
    console.log('Form submitted:', formObject);
    
    // Here you would typically send the data to a server
    // For a static site, you might use a service like Formspree or Netlify Forms
    
    // Show success message
    alert('ขอบคุณสำหรับการสมัคร! เราจะติดต่อกลับเร็วๆ นี้');
}
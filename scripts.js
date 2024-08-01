document.addEventListener("DOMContentLoaded", function() {
    // Form handling
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const interest = document.getElementById("interest").value;
        
        if (!name || !email || !interest) {
            alert("Please fill in all fields.");
        } else {
            alert("Form submitted successfully!");
            form.reset(); // Reset the form after submission
        }
    });

    // Auto-sliding testimonial
    const testimonialWrapper = document.querySelector('.testimonial-wrapper');
    const testimonials = document.querySelectorAll('.testimonial');
    const totalTestimonials = testimonials.length;
    let currentIndex = 0;

    function getTestimonialWidth() {
        return testimonials[0].clientWidth; // Mengambil lebar testimonial pertama
    }

    function showNextTestimonial() {
        const testimonialWidth = getTestimonialWidth();
        currentIndex = (currentIndex + 1) % totalTestimonials;
        const offset = -currentIndex * testimonialWidth;
        testimonialWrapper.style.transform = `translateX(${offset}px)`;
    }

    function startAutoSlide() {
        showNextTestimonial();
        setInterval(showNextTestimonial, 3000); // Adjust interval as needed
    }

// Optionally, adjust for window resize
window.addEventListener('resize', showNextTestimonial);

startAutoSlide();

});

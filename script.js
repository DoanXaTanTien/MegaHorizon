document.addEventListener("DOMContentLoaded", function() {
    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;

            formMessage.innerHTML = `<p>Cảm ơn, ${name}. Chúng tôi đã nhận được tin nhắn của bạn.</p>`;

            // Reset form
            contactForm.reset();
        });
    }

    // Slideshow functionality
    const images = [
        { src: "images/1.png"},
        { src: "images/2.png"},
        { src: "images/3.png" },
        { src: "images/4.png" }
    ];
    let currentSlide = 0;

    function showSlide(index) {
        const slide = document.getElementById('slide');
        if (slide && slideTitle) {
            slide.src = images[index].src;
        }
    }

    function nextImage() {
        currentSlide = (currentSlide + 1) % images.length;
        showSlide(currentSlide);
    }

    function previousImage() {
        currentSlide = (currentSlide - 1 + images.length) % images.length;
        showSlide(currentSlide);
    }

    // Initial slide display
    showSlide(currentSlide);

    document.getElementById('prevButton').addEventListener('click', previousImage);
    document.getElementById('nextButton').addEventListener('click', nextImage);
});

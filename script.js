document.addEventListener("DOMContentLoaded", function() {
    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;

            formMessage.innerHTML = `<p>Cảm ơn, ${name}. Chúng tôi đã nhận được tin nhắn của bạn.</p>`;
             
            const phoneNumber = '0889364685'; 
            const message = encodeURIComponent('Cảm ơn bạn đã liên hệ với chúng tôi.'); 
            const zaloLink = `https://zalo.me/${phoneNumber}?text=${message}`;


            window.location.href = zaloLink;

            contactForm.reset();
                contactForm.reset();
        });
    }

    
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

   
    showSlide(currentSlide);

    document.getElementById('prevButton').addEventListener('click', previousImage);
    document.getElementById('nextButton').addEventListener('click', nextImage);
});

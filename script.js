<script>
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const formMessage = document.getElementById('formMessage');

    formMessage.innerHTML = `<p>Cảm ơn, ${name}. Chúng tôi đã nhận được tin nhắn của bạn.</p>`;

    // Reset form
    document.getElementById('contactForm').reset();
});

// Slideshow functionality
let currentSlide = 0;


function showImage(index) {
    const slide = document.getElementById("slide");
    slide.src = images[index];
}

function nextImage() {
    currentSlide = (currentSlide + 1) % images.length;
    showImage(currentSlide);
}

function previousImage() {
    currentSlide = (currentSlide - 1 + images.length) % images.length;
    showImage(currentSlide);
}

document.addEventListener("DOMContentLoaded", function() {
            showImage(currentSlide);
        });
</script>
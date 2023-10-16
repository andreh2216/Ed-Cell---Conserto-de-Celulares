const slides = document.querySelectorAll(".carousel-slide");
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = "block";
}



function previousSlide() {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
}

setInterval(nextSlide, 8000); // Trocar a imagem a cada 3 segundos (opcional)



    // Função para lidar com a transição de scroll suave
    function scrollToSection(sectionId) {
        const section = document.querySelector(sectionId);
        if (section) {
            window.scrollTo({
                behavior: 'smooth',
                top: section.offsetTop,
            });
        }
    }

    // Adicione um evento de clique aos links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href');
            scrollToSection(sectionId);
        });
    });


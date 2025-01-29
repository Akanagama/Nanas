document.addEventListener("DOMContentLoaded", () => {
    // Inicialización de AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
    });

    // Configuración del carrusel Swiper
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1, // Solo un slide visible
        spaceBetween: 0, // Sin espacio entre slides
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    // Pausar autoplay al interactuar
    swiper.el.addEventListener('mouseenter', () => swiper.autoplay.stop());
    swiper.el.addEventListener('mouseleave', () => swiper.autoplay.start());

    // Contadores animados
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const current = parseInt(counter.innerText) || 0;
            const increment = Math.max(target / 100, 1);

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });

    // Botón para ir arriba
    const scrollTopButton = document.createElement('button');
    scrollTopButton.id = 'scrollTopButton';
    scrollTopButton.innerText = '↑';
    document.body.appendChild(scrollTopButton);

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });
});

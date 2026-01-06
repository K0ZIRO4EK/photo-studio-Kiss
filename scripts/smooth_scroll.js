document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const href = this.getAttribute('href').substring(1);
            const target = document.getElementById(href);

            const topOffset = 97;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy ({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
});

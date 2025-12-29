document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector('.burger');
    const navigation = document.querySelector('.navigation');
    const links = document.querySelectorAll('.navigation-link');
    const blackout = document.querySelector('.blackout-bg');
    const blockScroll = document.querySelector('.page')

    burger.addEventListener("click", function(e) {
        e.stopPropagation();
        burger.classList.toggle('rotate');
        navigation.classList.toggle('open');
        blackout.classList.toggle('active');
        blockScroll.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener("click", function() {
            if (window.innerWidth <= 420) {
                burger.classList.remove('rotate');
                navigation.classList.remove('open');
                blackout.classList.remove('active');
                blockScroll.classList.remove('active');
            }
        });
    });

    document.addEventListener("click", function(e) {
        if (!trigger.contains(e.target) && !navigation.contains(e.target)) {
            burger.classList.remove('rotate');
            navigation.classList.remove('open');
            blackout.classList.remove('active');
            blockScroll.classList.remove('active');
        }
    });
});
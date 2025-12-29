document.addEventListener("DOMContentLoaded", function() {
    const hiddenInput = document.querySelector('.selected-value');
    const trigger = document.querySelector('.select-trigger');
    const placeholder = document.querySelector('.select-placeholder');
    const arrow = document.querySelector('.select-arrow');
    const listOptions = document.querySelector('.select-list-options');
    const optionItems = document.querySelectorAll('.option-item');

    trigger.addEventListener("click", function() {
        arrow.classList.toggle('rotate');
        listOptions.classList.toggle('open');
    });

    optionItems.forEach(option => {
        option.addEventListener("click", function() {
            const value = option.querySelector('.option').textContent;
            hiddenInput.value = value;

            placeholder.textContent = value;
            placeholder.classList.remove('select-placeholder');

            arrow.classList.remove('rotate');
            listOptions.classList.remove('open');
        });
    });

    document.addEventListener("click", function(e) {
        if (!trigger.contains(e.target) && !listOptions.contains(e.target)) {
            arrow.classList.remove('rotate');
            listOptions.classList.remove('open');
        }
    });
});
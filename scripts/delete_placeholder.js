document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.input').forEach(input => {
        const label = input.parentElement.querySelector('.input-placeholder');
        
        input.addEventListener("focus", function() {
            label.classList.add('hidden');
        });
    
        document.addEventListener("click", function(e) {
            if (!input.contains(e.target) && input !== e.target) {
                if (input.value.trim() === '') {
                    label.classList.remove('hidden');
                }
            }
        });
    });
});

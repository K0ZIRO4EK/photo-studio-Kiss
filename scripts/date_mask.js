document.addEventListener("DOMContentLoaded", function() {
    const dateInput = document.querySelector('.input-date');

    var getInputNumbersValue = function(input) {
        return input.value.replace(/\D/g, '');
    }

    var onDateInput = function(e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            formattedInputValue = '';

        if (!inputNumbersValue) {
            input.value = '';
            return;
        }
    
        if (inputNumbersValue.length > 0) {
            formattedInputValue = inputNumbersValue.substring(0, 2);
            
            if (inputNumbersValue.length > 2) {
                formattedInputValue += '.' + inputNumbersValue.substring(2, 4);
                
                if (inputNumbersValue.length > 4) {
                    formattedInputValue += '.' + inputNumbersValue.substring(4, 8);
                }
            }
            
            input.value = formattedInputValue;
        }
    }

    var onDateKeyDown = function(e) {
        var input = e.target;
        var cursorPos = input.selectionStart;
        var value = input.value;
        
        if (e.keyCode == 8) {
            e.preventDefault();
            
            if (cursorPos === 0) return;
            
            if (cursorPos === 3 || cursorPos === 6) {
                cursorPos -= 1;
            }
            
            var newValue = value.split('');
            var maskChar = 'ДД.ММ.ГГГГ'[cursorPos - 1];
            newValue[cursorPos - 1] = maskChar;
            
            input.value = newValue.join('');
            input.setSelectionRange(cursorPos - 1, cursorPos - 1);
        }
        
        if (e.keyCode == 37) {
            e.preventDefault();
            var newPos = cursorPos - 1;
            if (newPos === 2 || newPos === 5) {
                newPos--;
            }
            if (newPos >= 0) {
                input.setSelectionRange(newPos, newPos);
            }
        }
        
        if (e.keyCode == 39) {
            e.preventDefault();
            var newPos = cursorPos + 1;
            if (newPos === 3 || newPos === 6) {
                newPos++;
            }
            if (newPos <= value.length) {
                input.setSelectionRange(newPos, newPos);
            }
        }
    }

    var onDateFocus = function(e) {
        var input = e.target;
        
        if (!input.value.trim() || input.value === 'ДД.ММ.ГГГГ') {
            input.value = 'ДД.ММ.ГГГГ';
            // Ставим курсор в начало
            setTimeout(function() {
                input.setSelectionRange(0, 0);
            }, 0);
        }
    }
    
    var onDateBlur = function(e) {
        var input = e.target;
        
        if (input.value === 'ДД.ММ.ГГГГ') {
            input.value = '';
        }
    }

    var onDateKeyPress = function(e) {
        var input = e.target;
        var cursorPos = input.selectionStart;
        var key = e.key;
        
        if (!/\d/.test(key)) {
            e.preventDefault();
            return;
        }
        
        e.preventDefault();
        
        if (cursorPos === 2 || cursorPos === 5) {
            cursorPos++;
        }
        
        if (cursorPos > 9) {
            cursorPos = 9;
        }
        
        var value = input.value.split('');
        value[cursorPos] = key;
        
        var nextPos = cursorPos + 1;
        if (nextPos === 2 || nextPos === 5) {
            nextPos++;
        }
        
        input.value = value.join('');
        input.setSelectionRange(nextPos, nextPos);
    }

    dateInput.addEventListener("click", function(e) {
        var input = e.target;
        var cursorPos = input.selectionStart;
        
        if (cursorPos === 3 || cursorPos === 6) {
            setTimeout(function() {
                input.setSelectionRange(cursorPos - 1, cursorPos - 1);
            }, 0);
        }
    });

    dateInput.addEventListener("keydown", onDateKeyDown);
    dateInput.addEventListener("keypress", onDateKeyPress);
    dateInput.addEventListener("input", onDateInput);
    dateInput.addEventListener("focus", onDateFocus);
    dateInput.addEventListener("blur", onDateBlur);
    
    if (dateInput.value.trim() === '') {
        dateInput.value = '';
    }
});
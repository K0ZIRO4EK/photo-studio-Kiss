document.addEventListener("DOMContentLoaded", function() {
    const telInput = document.querySelector('.input-tel');

    var getInputNumbersValue = function(input) {
        return input.value.replace(/\D/g, '');
    }

    var onTelPaste = function(e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        var pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            var pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                input.value = inputNumbersValue;
                return;
            }
        }
    }

    var onTelInput = function(e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = '';

        if (!inputNumbersValue) {
            return input.value = '';
        }
    
        if (input.value.length != selectionStart) {
            if (e.data && /\D/g.test(e.data)) {
                input.value = inputNumbersValue;
            }
            return;
        }

        if (['7', '8'].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == '9') {
                inputNumbersValue = '7' + inputNumbersValue;
            }

            var firstSymbol = (inputNumbersValue[0] == '8') ? '8' : '+7';
            formattedInputValue = firstSymbol + ' ';

            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }

            input.value = formattedInputValue;
            
        } else {
            formattedInputValue = '+' + inputNumbersValue;
            input.value = formattedInputValue;
        }
    }

    var onTelKeyDown = function(e) {
        var inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
            e.target.value = '';
        }
    }

    telInput.addEventListener("keydown", onTelKeyDown);
    telInput.addEventListener("input", onTelInput);
    telInput.addEventListener("paste", onTelPaste);
});
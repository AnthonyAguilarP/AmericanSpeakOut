export function ApplyValidation(element, value, index, masterOrder) {
    element.classList.remove('correct', 'incorrect');

    if (value === masterOrder[index]) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}
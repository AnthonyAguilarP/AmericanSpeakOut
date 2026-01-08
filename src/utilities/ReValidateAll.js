import { ApplyValidation } from './ApplyValidation.js';

export function ReValidateAll(currentSelection, masterOrder) {
    currentSelection.forEach((val, index) => {
        const element = document.querySelector(`[data-value="${val}"]`);
        if (element) ApplyValidation(element, val, index, masterOrder);
    });
}
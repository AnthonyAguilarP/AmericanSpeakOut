import { ApplyValidation } from './ApplyValidation.js';
import { ReValidateAll } from './ReValidateAll.js';

export function SetupItemSelection(items, currentSelection, masterOrder) {
    items.forEach(item => {
        item.addEventListener('click', () => {
            const val = item.getAttribute('data-value');
            const index = currentSelection.indexOf(val);

            if (index !== -1) {
                // DESELECCIONAR: Usamos splice para modificar el array original sin crear uno nuevo
                currentSelection.splice(index, 1);
                item.classList.remove('correct', 'incorrect');
                ReValidateAll(currentSelection, masterOrder);
            } else {
                // SELECCIONAR
                currentSelection.push(val);
                ApplyValidation(item, val, currentSelection.length - 1, masterOrder);
            }
        });
    });
}
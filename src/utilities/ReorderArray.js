export function ReorderArray(baseArray, positionsArray) {
    if (baseArray.length !== positionsArray.length) {
        throw new Error("Los arrays deben tener la misma longitud");
    }

    const len = baseArray.length;
    const result = new Array(len).fill(null);
    const usedPositions = new Set();

    for (let i = 0; i < len; i++) {
        const target = positionsArray[i];

        if (target === null) {
            // Si es null, queda en su posición original
            if (result[i] !== null) {
                throw new Error(`Conflicto: posición ${i} ya ocupada`);
            }
            result[i] = baseArray[i];
            usedPositions.add(i);
        } else {
            if (usedPositions.has(target)) {
                throw new Error(`Posición repetida: ${target}`);
            }

            if (result[target] === null) {
                // Si está libre, lo colocamos
                result[target] = baseArray[i];
                usedPositions.add(target);
            } else {
                // Buscar la posición más cercana disponible
                let found = false;
                for (let offset = 1; offset < len; offset++) {
                    let left = target - offset;
                    let right = target + offset;

                    if (left >= 0 && result[left] === null && !usedPositions.has(left)) {
                        result[left] = baseArray[i];
                        usedPositions.add(left);
                        found = true;
                        break;
                    }
                    if (right < len && result[right] === null && !usedPositions.has(right)) {
                        result[right] = baseArray[i];
                        usedPositions.add(right);
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    throw new Error(`No hay espacio disponible para el elemento ${baseArray[i]}`);
                }
            }
        }
    }

    return result;
}

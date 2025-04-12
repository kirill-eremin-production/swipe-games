export const displayEnergy = (count) => {
    const energyContainer = document.querySelector('#js-energy');
    energyContainer.innerHTML = `Энергия: ${count}`;
};

/**
 * @param state {object}
 */
export const addEnergy = (state) => {
    state.energy = state.energy + 1;
    displayEnergy(state.energy);
};

/**
 * @param state {object}
 */
export const decreaseEnergy = (state) => {
    state.energy = state.energy - 1;
    displayEnergy(state.energy);
};

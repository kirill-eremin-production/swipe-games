export const displayHealth = (count) => {
    const healthContainer = document.querySelector('#js-health');
    healthContainer.innerHTML = `Здоровье: ${count}`;
};

/**
 * @param state {object}
 */
export const addHealth = (state) => {
    state.health = state.health + 1;
    displayHealth(state.health);
};

/**
 * @param state {object}
 */
export const decreaseHealth = (state) => {
    state.health = state.health - 1;
    displayHealth(state.health);
};

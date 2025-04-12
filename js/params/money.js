export const displayMoney = (count) => {
    const moneyContainer = document.querySelector('#js-money');
    moneyContainer.innerHTML = `Деньги: ${count}`;
};

/**
 * @param state {object}
 */
export const addMoney = (state) => {
    state.money = state.money + 1;
    displayMoney(state.money);
};

/**
 * @param state {object}
 */
export const decreaseMoney = (state) => {
    state.money = state.money - 1;
    displayMoney(state.money);
};

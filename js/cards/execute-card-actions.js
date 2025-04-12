import { addHealth, decreaseHealth } from '../params/health.js';
import { addMoney, decreaseMoney } from '../params/money.js';
import { addEnergy, decreaseEnergy } from '../params/eneregy.js';

export const actionType = {
    addHealth: 'addHealth',
    decreaseHealth: 'decreaseHealth',
    addMoney: 'addMoney',
    decreaseMoney: 'decreaseMoney',
    addEnergy: 'addEnergy',
    decreaseEnergy: 'decreaseEnergy',
};

export const executeCardActions = ({ state, config }) => {
    if (!config.actions || !config.actions?.length) return;

    config.actions.forEach((action) => {
        switch (action.type) {
            case actionType.addHealth:
                addHealth(state);
                break;
            case actionType.decreaseHealth:
                decreaseHealth(state);
                break;

            case actionType.addMoney:
                addMoney(state);
                break;
            case actionType.decreaseMoney:
                decreaseMoney(state);
                break;

            case actionType.addEnergy:
                addEnergy(state);
                break;
            case actionType.decreaseEnergy:
                decreaseEnergy(state);
                break;
        }
    });

    // Мутирует конфиг, чтобы нельзя было несколько раз получать бонусы от действий
    config.actions = [];
    config.effects = '';
};

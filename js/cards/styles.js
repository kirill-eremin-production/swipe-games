import { leftCard, rightCard } from './selectors.js';

export const selectLeftCard = () => {
    leftCard.style.transform = 'scale(1.5) translateX(35%) translateY(-20%)';
    leftCard.style.zIndex = '1';
};

export const selectRightCard = () => {
    rightCard.style.transform = 'scale(1.5) translateX(-35%) translateY(-20%)';
    rightCard.style.zIndex = '1';
};

export const reduceLeftCard = () => {
    leftCard.style.transform =
        'scale(0.8) rotate(15deg) translateX(-45%) translateY(50%)';
    leftCard.style.zIndex = '';
    leftCard.style.boxShadow = '';
    leftCard.style.opacity = '0';
};

export const reduceRightCard = () => {
    rightCard.style.transform =
        'scale(0.8) rotate(-15deg) translateX(45%) translateY(50%)';
    rightCard.style.zIndex = '';
    rightCard.style.boxShadow = '';
    rightCard.style.opacity = '0';
};

/**
 * @param card {HTMLElement}
 */
export const useDefaultCardStyles = (card) => {
    card.style.transform = '';
    card.style.zIndex = '';
    card.style.boxShadow = '';
    card.style.opacity = '';
};

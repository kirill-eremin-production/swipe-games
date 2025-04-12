import { leftCard, rightCard } from './selectors.js';

export const selectLeftCard = () => {
    leftCard.style.transform = 'scale(1.5) translateX(25%) translateY(-25%)';
    leftCard.style.boxShadow = '0 0 1rem rgba(0, 0, 0, 0.5)';
    leftCard.style.zIndex = '1';
};

export const selectRightCard = () => {
    rightCard.style.transform = 'scale(1.5) translateX(-25%) translateY(-25%)';
    rightCard.style.zIndex = '1';
    rightCard.style.boxShadow = '0 0 1rem rgba(0, 0, 0, 0.5)';
};

export const reduceLeftCard = () => {
    leftCard.style.transform =
        'scale(0.8) rotate(15deg) translateX(-45%) translateY(50%)';
    leftCard.style.zIndex = '';
    leftCard.style.boxShadow = '';
};

export const reduceRightCard = () => {
    rightCard.style.transform =
        'scale(0.8) rotate(-15deg) translateX(45%) translateY(50%)';
    rightCard.style.zIndex = '';
    rightCard.style.boxShadow = '';
};

/**
 * @param card {HTMLElement}
 */
export const useDefaultCardStyles = (card) => {
    card.style.transform = '';
    card.style.zIndex = '';
    card.style.boxShadow = '';
};

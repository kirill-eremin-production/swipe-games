import { leftCard, rightCard } from './js/cards/selectors.js';
import {
    selectRightCard,
    selectLeftCard,
    reduceLeftCard,
    reduceRightCard,
    useDefaultCardStyles,
} from './js/cards/styles.js';

import { storyConfig } from './js/story/config.js';
import { setScreenData } from './js/story/set-screen-data.js';

(async () => {
    let initialTouchX = undefined;
    const swipeController = document.querySelector('#js-swipe-controller');

    let currentConfig = storyConfig;
    let isLeftCardSelected = false;
    let isRightCardSelected = false;
    setScreenData(currentConfig);

    swipeController.addEventListener('touchstart', (event) => {
        event.preventDefault();

        initialTouchX = event.touches[0].clientX;
    });

    swipeController.addEventListener('touchmove', (event) => {
        event.preventDefault();

        const currentTouchX = event.touches[0].clientX;
        const dx = initialTouchX - currentTouchX;
        const isLeftMove = dx > 0;
        const isRightMove = dx < 0;

        isLeftCardSelected = isRightMove && Math.abs(dx) > 100;
        isRightCardSelected = isLeftMove && Math.abs(dx) > 100;

        if (isLeftCardSelected) {
            selectLeftCard();
            reduceRightCard();
        } else if (isRightCardSelected) {
            selectRightCard();
            reduceLeftCard();
        } else {
            useDefaultCardStyles(leftCard);
            useDefaultCardStyles(rightCard);
        }
    });

    swipeController.addEventListener('touchend', (event) => {
        event.preventDefault();
        useDefaultCardStyles(leftCard);
        useDefaultCardStyles(rightCard);

        if (isLeftCardSelected) {
            isLeftCardSelected = false;
            currentConfig = currentConfig.leftCard.next;
            setScreenData(currentConfig);
        } else if (isRightCardSelected) {
            isRightCardSelected = false;
            currentConfig = currentConfig.rightCard.next;
            setScreenData(currentConfig);
        }
    });
})();

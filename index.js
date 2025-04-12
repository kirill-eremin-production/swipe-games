import { leftCard, rightCard } from './js/cards/selectors.js';
import {
    selectRightCard,
    selectLeftCard,
    reduceLeftCard,
    reduceRightCard,
    useDefaultCardStyles,
    fadeScene,
    isSceneInFade,
} from './js/cards/styles.js';
import { storyConfig } from './js/story/config.js';
import { setScreenData } from './js/story/set-screen-data.js';
import { executeCardActions } from './js/cards/execute-card-actions.js';

const state = {
    health: storyConfig.health,
    money: storyConfig.money,
    energy: storyConfig.energy,
};

(async () => {
    let initialTouchX = undefined;
    const swipeController = document.querySelector('#js-swipe-controller');

    let currentConfig = storyConfig;
    let isLeftCardSelected = false;
    let isRightCardSelected = false;
    setScreenData(currentConfig);

    swipeController.addEventListener('touchstart', (event) => {
        event.preventDefault();
        if (isSceneInFade()) return;

        initialTouchX = event.touches[0].clientX;
    });

    swipeController.addEventListener('touchmove', (event) => {
        event.preventDefault();
        if (isSceneInFade()) return;

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
        if (isSceneInFade()) return;

        if (isLeftCardSelected) {
            const leftCardConfig = currentConfig.leftCard.params;

            isLeftCardSelected = false;
            currentConfig = currentConfig.leftCard.nextScene;
            fadeScene(() => {
                setScreenData(currentConfig);
                executeCardActions({
                    state,
                    config: leftCardConfig,
                });
            });
        } else if (isRightCardSelected) {
            const rightCardConfig = currentConfig.rightCard.params;

            isRightCardSelected = false;
            currentConfig = currentConfig.rightCard.nextScene;
            fadeScene(() => {
                setScreenData(currentConfig);
                executeCardActions({
                    state,
                    config: rightCardConfig,
                });
            });
        }

        console.log('>>> config', { storyConfig, currentConfig });
    });
})();

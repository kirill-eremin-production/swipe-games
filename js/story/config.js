import { actionType } from '../cards/execute-card-actions.js';

/**
 * @param currentScene {string}
 * @param nextScene {string}
 */
const setLeftNext = (currentScene, nextScene) => {
    scenes[currentScene].leftCard.nextScene = scenes[nextScene];
};

/**
 * @param currentScene {string}
 * @param nextScene {string}
 */
const setRightNext = (currentScene, nextScene) => {
    scenes[currentScene].rightCard.nextScene = scenes[nextScene];
};

const cards = {
    'Насладиться пением птиц': {
        message: 'Насладиться\nпением\nптиц',
        effects: '+ Здоровье',
        actions: [{ type: actionType.addHealth }],
    },
    'Попробовать свежий хлеб': {
        message: 'Попробовать\nсвежий\nхлеб',
        effects: '+ Здоровье',
        actions: [{ type: actionType.addHealth }],
    },
    'Отправиться на работу в поле': {
        message: 'Отправиться\nна работу\nв поле',
    },
    'Усердно трудиться': {
        message: 'Усердно\nтрудиться',
        effects: '- Энергия',
        actions: [{ type: actionType.decreaseEnergy }],
    },
    'Вздремнуть на сене': {
        message: 'Вздремнуть\nна сене',
        effects: '+ Энергия',
        actions: [{ type: actionType.addEnergy }],
    },
};

const sceneKeys = {
    1: '1. Утро (начало)',
    2: '2. Мелодия надежды (пение птиц)',
    3: '3. Вкус домашнего уюта (столовая с хлебом)',
    4: '4. Заботы фермера',
    5: '5. В поте лица',
    6: '6. Жизнь без забот',
};

const scenes = {
    [sceneKeys['1']]: {
        background:
            'https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/screen-1.png',
        leftCard: {
            params: cards['Насладиться пением птиц'],
        },
        rightCard: {
            params: cards['Попробовать свежий хлеб'],
        },
    },
    [sceneKeys['2']]: {
        background:
            'https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/screen-2.png',
        leftCard: {
            params: cards['Отправиться на работу в поле'],
        },
        rightCard: {
            params: cards['Попробовать свежий хлеб'],
        },
    },
    [sceneKeys['3']]: {
        background:
            'https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/screen-3.png',
        leftCard: {
            params: cards['Насладиться пением птиц'],
        },
        rightCard: {
            params: cards['Отправиться на работу в поле'],
        },
    },
    [sceneKeys['4']]: {
        background:
            'https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/screen-4.png',
        leftCard: {
            params: cards['Усердно трудиться'],
        },
        rightCard: {
            params: cards['Вздремнуть на сене'],
        },
    },
    [sceneKeys['5']]: {
        background:
            'https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/screen-5.png',
    },
    [sceneKeys['6']]: {
        background:
            'https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/screen-6.png',
    },
};

/** === Настройки переходов между сценами === */

setLeftNext(sceneKeys['1'], sceneKeys['2']);
setRightNext(sceneKeys['1'], sceneKeys['3']);

setLeftNext(sceneKeys['2'], sceneKeys['4']);
setRightNext(sceneKeys['2'], sceneKeys['3']);

setLeftNext(sceneKeys['3'], sceneKeys['2']);
setRightNext(sceneKeys['3'], sceneKeys['4']);

setLeftNext(sceneKeys['4'], sceneKeys['5']);
setRightNext(sceneKeys['4'], sceneKeys['6']);

export const storyConfig = {
    health: 1,
    money: 1,
    energy: 1,
    ...scenes[sceneKeys['1']],
};

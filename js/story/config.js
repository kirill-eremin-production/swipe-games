import { actionType } from '../cards/execute-card-actions.js';

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

const screen6 = {
    background:
        'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/screen-6.png")',
};

const screen5 = {
    background:
        'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/screen-5.png")',
};

const screen4 = {
    background:
        'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/screen-4.png")',
    leftCard: {
        params: cards['Усердно трудиться'],
        nextScene: screen5,
    },
    rightCard: {
        params: cards['Вздремнуть на сене'],
        nextScene: screen6,
    },
};

const screen3 = {
    background:
        'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/screen-3.png")',
    leftCard: {
        params: cards['Насладиться пением птиц'],
        nextScene: {},
    },
    rightCard: {
        params: cards['Отправиться на работу в поле'],
        nextScene: screen4,
    },
};

const screen2 = {
    background:
        'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/screen-2.png")',
    leftCard: {
        params: cards['Отправиться на работу в поле'],
        nextScene: screen4,
    },
    rightCard: {
        params: cards['Попробовать свежий хлеб'],
        nextScene: screen3,
    },
};
screen3.leftCard.nextScene = screen2;

const screen1 = {
    health: 1,
    money: 1,
    energy: 1,

    background:
        'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/screen-1.png")',
    title: 'Привет, как дела?',
    leftCard: {
        params: cards['Насладиться пением птиц'],
        nextScene: screen2,
    },
    rightCard: {
        params: cards['Попробовать свежий хлеб'],
        nextScene: screen3,
    },
};

export const storyConfig = screen1;

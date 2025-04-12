export const storyConfig = {
    id: '1',
    background:
        'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/iPhone%20SE%20-%201.png")',
    leftCard: {
        background:
            'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/card.png")',
        next: {
            id: '1.l',
            background: 'url("./assets/2.png")',
            leftCard: {
                id: '1.l.l',
                background: '',
                title: 'Принять предложение Сэра Альберта стать его учеником',
                message: 'Вы решаете обучиться искусству рыцарства',
                next: {},
            },
            rightCard: {
                id: '1.l.r',
                background: '',
                next: {},
            },
        },
    },
    rightCard: {
        background:
            'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/card-1.png")',
        next: {
            id: '1.r',
            background: 'url("./assets/3.png")',
            leftCard: {
                id: '1.r.l',
                background: '',
                next: {},
            },
            rightCard: {
                id: '1.r.r',
                background: '',
                next: {},
            },
        },
    },
};

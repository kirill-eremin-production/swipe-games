const screen6 = {
    background:
        'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/screen-6.png")',
    // leftCard: {
    //     background:
    //         'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/left-card-6.png")',
    //     next: screen3,
    // },
    // rightCard: {
    //     background:
    //         'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/right-card-6.png")',
    //     next: {},
    // },
};

const screen5 = {
    background:
        'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/screen-5.png")',
    // leftCard: {
    //     background:
    //         'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/left-card-5.png")',
    //     next: screen3,
    // },
    // rightCard: {
    //     background:
    //         'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/right-card-5.png")',
    //     next: {},
    // },
};

const screen4 = {
    background:
        'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/screen-4.png")',
    leftCard: {
        background:
            'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/left-card-4.png")',
        next: screen5,
    },
    rightCard: {
        background:
            'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/right-card-4.png")',
        next: screen6,
    },
};

const screen3 = {
    background:
        'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/screen-3.png")',
    leftCard: {
        background:
            'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/left-card-3.png")',
        next: {
            background:
                'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/screen-2.png")',
            leftCard: {
                background:
                    'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/left-card-2.png")',
                next: screen4,
            },
            rightCard: {
                background:
                    'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/right-card-2.png")',
                next: this,
            },
        },
    },
    rightCard: {
        background:
            'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/right-card-3.png")',
        next: screen4,
    },
};

const screen2 = {
    background:
        'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/screen-2.png")',
    leftCard: {
        background:
            'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/left-card-2.png")',
        next: screen4,
    },
    rightCard: {
        background:
            'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/right-card-2.png")',
        next: {
            background:
                'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/screen-3.png")',
            leftCard: {
                background:
                    'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/left-card-3.png")',
                next: this,
            },
            rightCard: {
                background:
                    'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/right-card-3.png")',
                next: screen4,
            },
        },
    },
};

const screen1 = {
    background:
        'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/iPhone%20SE%20-%201.png")',
    leftCard: {
        background:
            'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/card.png")',
        next: screen2,
    },
    rightCard: {
        background:
            'url("https://storage.yandexcloud.net/k-ai-public/swipe-games/12-01-2025/card-1.png")',
        next: screen3,
    },
};

export const storyConfig = screen1;

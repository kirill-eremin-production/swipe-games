export const setScreenData = (data) => {
    if (!data) {
        return;
    }

    const mainBackground = document.querySelector('#js-main-background');
    const mainTitle = document.querySelector('#js-main-title');
    const mainMessage = document.querySelector('#js-main-message');
    const leftCardBackground = document.querySelector('#js-left-swipe-card');
    const leftCardTitle = document.querySelector('#js-left-card-title');
    const leftCardMessage = document.querySelector('#js-left-card-message');
    const rightCardBackground = document.querySelector('#js-right-swipe-card');
    const rightCardTitle = document.querySelector('#js-right-card-title');
    const rightCardMessage = document.querySelector('#js-right-card-message');

    mainBackground.style.backgroundImage = data.background;
    mainTitle.innerHTML = data.title;
    mainMessage.innerHTML = data.message;

    if (data.leftCard) {
        leftCardBackground.style.backgroundImage = data.leftCard.background;
        leftCardTitle.innerHTML = data.leftCard.title;
        leftCardMessage.innerHTML = data.leftCard.message;
    }

    if (data.rightCard) {
        rightCardBackground.style.backgroundImage = data.rightCard.background;
        rightCardTitle.innerHTML = data.rightCard.title;
        rightCardMessage.innerHTML = data.rightCard.message;
    }
};

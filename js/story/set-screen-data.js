const setCSS = (element, property, value) => {
    if (!value) {
        return;
    }

    element.style[property] = value;
};

const setInnerHTML = (element, value) => {
    if (!value) {
        return;
    }

    element.innerHTML = value;
};

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

    setCSS(mainBackground, 'backgroundImage', data.background);
    setInnerHTML(mainTitle, data.title);
    setInnerHTML(mainMessage, data.message);

    if (data.leftCard) {
        setCSS(leftCardBackground, 'backgroundImage', data.leftCard.background);
        setInnerHTML(leftCardTitle, data.leftCard.title);
        setInnerHTML(leftCardMessage, data.leftCard.message);
    }

    if (data.rightCard) {
        setCSS(
            rightCardBackground,
            'backgroundImage',
            data.rightCard.background
        );
        setInnerHTML(rightCardTitle, data.rightCard.title);
        setInnerHTML(rightCardMessage, data.rightCard.message);
    }
};

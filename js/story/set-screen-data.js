const setCSS = (element, property, value, force) => {
    if (!value && !force) {
        return;
    }

    element.style[property] = value;
};

const setInnerHTML = (element, value, force) => {
    if (!value && !force) {
        return;
    }

    element.innerHTML = value;
};

export const setScreenData = (data) => {
    if (!data) {
        return;
    }

    const mainBackground = document.querySelector('#js-main-background');
    const leftCardBackground = document.querySelector('#js-left-swipe-card');
    const leftCardMessage = document.querySelector('#js-left-card-message');
    const leftCardEffects = document.querySelector('#js-left-card-effects');
    const rightCardBackground = document.querySelector('#js-right-swipe-card');
    const rightCardMessage = document.querySelector('#js-right-card-message');
    const rightCardEffects = document.querySelector('#js-right-card-effects');

    setCSS(mainBackground, 'backgroundImage', data.background);

    if (data.leftCard) {
        setCSS(
            leftCardBackground,
            'backgroundImage',
            data.leftCard.params.background
        );
        setInnerHTML(leftCardMessage, data.leftCard.params.message);
        setInnerHTML(leftCardEffects, data.leftCard.params.effects || '', true);
        setCSS(leftCardBackground, 'display', '', true);
    } else {
        setCSS(leftCardBackground, 'display', 'none');
    }

    if (data.rightCard) {
        setCSS(
            rightCardBackground,
            'backgroundImage',
            data.rightCard.params.background
        );
        setInnerHTML(rightCardMessage, data.rightCard.params.message);
        setInnerHTML(
            rightCardEffects,
            data.rightCard.params.effects || '',
            true
        );
        setCSS(rightCardBackground, 'display', '', true);
    } else {
        setCSS(rightCardBackground, 'display', 'none');
    }
};

(async () => {
    let initialTouchX = undefined;
    const swipeController = document.querySelector('#js-swipe-controller');
    const leftCard = document.querySelector('#js-left-swipe-card');
    const rightCard = document.querySelector('#js-right-swipe-card');

    swipeController.addEventListener('touchstart', (event) => {
        initialTouchX = event.touches[0].clientX;
    });

    swipeController.addEventListener('touchmove', (event) => {
        const currentTouchX = event.touches[0].clientX;
        const dx = initialTouchX - currentTouchX;
        const isLeftMove = dx > 0;
        const isRightMove = dx < 0;
        const isLeftCardSelected = isRightMove && Math.abs(dx) > 100;
        const isRightCardSelected = isLeftMove && Math.abs(dx) > 100;

        if (isRightMove) {
            leftCard.style.transform =
                'scale(1.5) translateX(25%) translateY(-25%)';
            leftCard.style.boxShadow = '0 0 1rem rgba(0, 0, 0, 0.5)';
            leftCard.style.zIndex = '1';

            rightCard.style.transform =
                'scale(0.8) rotate(-15deg) translateX(45%) translateY(50%)';
            rightCard.style.zIndex = '';
            rightCard.style.boxShadow = '';
        }

        if (isLeftMove) {
            rightCard.style.transform =
                'scale(1.5) translateX(-25%) translateY(-25%)';
            rightCard.style.zIndex = '1';
            rightCard.style.boxShadow = '0 0 1rem rgba(0, 0, 0, 0.5)';

            leftCard.style.transform =
                'scale(0.8) rotate(15deg) translateX(-45%) translateY(50%)';
            leftCard.style.zIndex = '';
            leftCard.style.boxShadow = '';
        }
    });

    swipeController.addEventListener('touchend', (event) => {
        leftCard.style.transform = '';
        leftCard.style.zIndex = '';
        leftCard.style.boxShadow = '';
        rightCard.style.transform = '';
        rightCard.style.zIndex = '';
        rightCard.style.boxShadow = '';
    });
})();

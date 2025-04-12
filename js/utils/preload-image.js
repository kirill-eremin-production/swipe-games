/**
 * @param imageArray {string[]}
 */
export function preloadImages(imageArray) {
    imageArray.forEach((imageSrc) => {
        const img = new Image();
        img.src = imageSrc;
    });
}

/**
 * @param currentConfig {object}
 */
export function preloadNextSceneImages(currentConfig) {
    preloadImages([
        currentConfig.leftCard.nextScene.background,
        currentConfig.rightCard.nextScene.background,
    ]);
}

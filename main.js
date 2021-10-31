function clickElement(targetElem) {
    if (!targetElem) {
        return;
    }

    targetElem.click();
}

function findElementByKey(keyName) {
    const expectedNumKeys = ['1', '2', '3', '4'];
    let element;

    if (expectedNumKeys.includes(keyName)) {
        // Text answer button.
        element = document.querySelectorAll('.toetsradio-primary label')[Number(keyName) - 1];

        if (!element) {
            // Image answer button
            element = document.querySelector('[data-num="' + keyName + '"]');
        }
    } else if (keyName === 'ArrowRight') {
        // Next question button
        element = document.querySelector('#js-next-btn');
    } else if (keyName === 'ArrowLeft') {
        // Prev question button
        element = document.querySelector('#js-prev-btn');
    }

    return element;
}

function handleKeyDown(event) {
    if (event.key === undefined) {
        return;
    }

    const targetElement = findElementByKey(event.key);
    if (!targetElement) {
        return;
    }

    clickElement(targetElement, event);

    event.preventDefault();
}

window.addEventListener('keydown', handleKeyDown, true);
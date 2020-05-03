// content.js

const openURL = (url, method) => {
    try {
        chrome.runtime.sendMessage({ url, method });
    } catch (e) {
        if (
            e.message.match(/Invocation of form runtime\.connect/) &&
            e.message.match(/doesn't match definition runtime\.connect/)
        ) {
            console.error(
                "Chrome extension, Actson has been reloaded. Please refresh the page"
            );
        } else {
            throw e;
        }
    }
};
let isPaiedContent = document.querySelector('#paywall-background-color');

if (isPaiedContent) {
    openURL(location.href, 'incognito')
}
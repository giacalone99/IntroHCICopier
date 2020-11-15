function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

$(document).ready(function() {
    waitAndRedirect();
});

async function waitAndRedirect() {
    await sleep(2000);
    window.location.replace("menu.html");
}

document.addEventListener('DOMContentLoaded', () => {
    let clickCount = 0;
    const clickBtn = document.getElementById('click-btn');

    clickBtn.addEventListener('click', () => {
        clickCount++;
        console.log(`${clickCount}`);
    });
});

document.addEventListener('DOMContentLoaded', () => {
  let clickCount = 0;
  const clickBtn = document.getElementById('click-btn');
  const clickCtr = document.getElementById('click-ctr');

  clickBtn.addEventListener('click', () => {
    clickCount++;
    clickCtr.textContent = clickCount;
  });
});

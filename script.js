document.addEventListener('DOMContentLoaded', () => {
  let clickCount = 0;
  const clickBtn = document.getElementById('click-btn');
  const clickCtr = document.getElementById('click-ctr');
  
  function updateDisplay() {
    clickCtr.textContent = clickCount;
  }
  
  updateDisplay();
  
  clickBtn.addEventListener('click', () => {
    clickCount++;
    updateDisplay();
  });
});

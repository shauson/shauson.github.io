(function() {
  const container = document.querySelector('.post-content') || document.querySelector('.content');

  if (!container) return;

  const btn = document.createElement('div');
  btn.id = 'toggleWritingMode';
  btn.textContent = '切换竖排';
  document.body.appendChild(btn);

  let mode = localStorage.getItem('writingMode') || 'horizontal';
  setMode(mode);

  btn.addEventListener('click', () => {
    mode = (mode === 'horizontal') ? 'vertical' : 'horizontal';
    localStorage.setItem('writingMode', mode);
    setMode(mode);
  });

  function setMode(mode) {
    if(mode === 'vertical') {
      container.classList.add('vertical-writing');
      container.classList.remove('horizontal-writing');
      btn.textContent = '切换横排';
    } else {
      container.classList.add('horizontal-writing');
      container.classList.remove('vertical-writing');
      btn.textContent = '切换竖排';
    }
  }
})();

// ===== 모바일 햄버거 내비게이션 =====
(() => {
  const toggle = document.querySelector('.nav-toggle');
  const gnb = document.querySelector('.gnb');
  if (!toggle || !gnb) return;

  function setOpen(open) {
    gnb.classList.toggle('open', open);
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    setOpen(!gnb.classList.contains('open'));
  });

  // 메뉴 링크를 누르면 닫기
  gnb.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => setOpen(false));
  });

  // 메뉴 바깥을 누르면 닫기
  document.addEventListener('click', (e) => {
    if (!gnb.classList.contains('open')) return;
    if (gnb.contains(e.target) || toggle.contains(e.target)) return;
    setOpen(false);
  });

  // 데스크톱 폭으로 넓어지면 닫기
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) setOpen(false);
  });
})();

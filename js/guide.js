// ===== 스크롤 등장 애니메이션 =====
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('on');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el, i) => {
  el.style.transitionDelay = `${(i % 3) * 0.12}s`;
  observer.observe(el);
});

// ===== 학업 가이드 책갈피 전환 =====
const bookmarks = document.querySelectorAll('.guide-bookmark');
const panels = document.querySelectorAll('.guide-panel');

bookmarks.forEach((bookmark) => {
  bookmark.addEventListener('click', () => {
    const target = bookmark.dataset.guideTab;

    bookmarks.forEach((item) => {
      item.classList.remove('active');
      const img = item.querySelector('img');
      img.src = item.dataset.src;
    });

    bookmark.classList.add('active');
    bookmark.querySelector('img').src = bookmark.dataset.activeSrc;

    panels.forEach((panel) => {
      panel.classList.toggle('active', panel.dataset.guidePanel === target);
    });
  });
});

// ===== FAQ 아코디언 =====
document.querySelectorAll('.guide-item > button').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const list = item.parentElement;
    list.querySelectorAll('.guide-item').forEach((other) => {
      if (other !== item) other.classList.remove('open');
    });
    item.classList.toggle('open');
  });
});

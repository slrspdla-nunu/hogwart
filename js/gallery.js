// ===== 스크롤 등장 애니메이션 (IntersectionObserver) =====
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

// ===== 탭 메뉴 전환 =====
document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// ===== 작은 카드 클릭 → 대표 이미지와 서로 자리 교체 =====
const featuredImg = document.querySelector('.featured-img');

document.querySelectorAll('.g-card').forEach((card) => {
  card.addEventListener('click', () => {
    const gImg = card.querySelector('.g-img');
    const newSrc = gImg.getAttribute('src');
    const oldSrc = featuredImg.getAttribute('src');
    if (oldSrc === newSrc) return;

    // 두 이미지를 페이드시킨 뒤 서로 교체 (원래 대표 이미지는 작은 카드 자리로)
    featuredImg.classList.add('fade');
    gImg.classList.add('fade');
    setTimeout(() => {
      featuredImg.setAttribute('src', newSrc);
      gImg.setAttribute('src', oldSrc);
      featuredImg.classList.remove('fade');
      gImg.classList.remove('fade');
    }, 350);

    // 대표 이미지가 보이도록 스크롤
    document.querySelector('.featured').scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});

// ===== 더보기 버튼 =====
document.querySelector('.more-btn').addEventListener('click', (e) => {
  e.preventDefault();
});

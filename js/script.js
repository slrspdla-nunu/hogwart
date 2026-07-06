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
  el.style.transitionDelay = `${(i % 4) * 0.12}s`;
  observer.observe(el);
});

// ===== 부드러운 앵커 스크롤 =====
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (targetId.length > 1) {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      e.preventDefault();
    }
  });
});

// ===== 히어로 패럴랙스 효과 =====
const hero = document.getElementById('hero');
const heroInner = document.querySelector('.hero-inner');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y < hero.offsetHeight) {
    heroInner.style.transform = `translateY(${y * 0.18}px)`;
    heroInner.style.opacity = 1 - y / (hero.offsetHeight * 0.9);
  }
});

// ===== 도트 내비게이션 (섹션 인디케이터) =====
const dots = document.querySelectorAll('.dot-nav li');
const sections = [...dots].map((dot) => document.querySelector(dot.dataset.target));

// 클릭 시 해당 섹션으로 이동
dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    document.querySelector(dot.dataset.target).scrollIntoView({ behavior: 'smooth' });
  });
});

// 스크롤 위치에 따라 현재 섹션 표시
function updateDots() {
  const mid = window.scrollY + window.innerHeight / 2;
  let current = 0;
  sections.forEach((sec, i) => {
    const top = sec.getBoundingClientRect().top + window.scrollY; // 문서 기준 위치
    if (top <= mid) current = i;
  });
  dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
}
window.addEventListener('scroll', updateDots);
window.addEventListener('load', updateDots);

// ===== 기숙사 배정 테스트 =====
(() => {
  const houseSection = document.getElementById('house');
  if (!houseSection) return;

  const houseData = {
    gryffindor: {
      eng: 'GRYFFINDOR', kr: '그리핀도르', img: 'image/GRYFFINDOR.png',
      traits: ['용기', '대담함', '기사도'],
      text: '용맹한 마법사 고드릭 그리핀도르가 세운 기숙사입니다. 사자를 상징으로 삼고 진홍과 금빛을 띠며, 용기와 대담함, 그리고 옳다고 믿는 일에 망설임 없이 뛰어드는 기사도를 가장 귀하게 여깁니다. 성의 높은 탑에 자리한 휴게실에는 모험과 정의를 사랑하는 이들이 모입니다.'
    },
    slytherin: {
      eng: 'SLYTHERIN', kr: '슬리데린', img: 'image/SLYTHERIN.png',
      traits: ['야망', '지략', '결단력'],
      text: '영민한 마법사 살라자르 슬리데린이 세운 기숙사입니다. 뱀을 상징으로 삼고 초록과 은빛을 띠며, 원대한 야망과 뛰어난 지략, 목표를 향한 결단력을 높이 평가합니다. 호수 아래 지하에 자리한 휴게실에는 자신의 길을 스스로 개척하는 이들이 모입니다.'
    },
    ravenclaw: {
      eng: 'RAVENCLAW', kr: '래번클로', img: 'image/RAVENCLAW.png',
      traits: ['지혜', '기지', '호기심'],
      text: '지혜로운 마법사 로위너 래번클로가 세운 기숙사입니다. 독수리를 상징으로 삼고 파랑과 청동빛을 띠며, 날카로운 기지와 끝없는 호기심, 배움을 향한 열정을 가장 귀하게 여깁니다. 별이 잘 보이는 탑 위 휴게실에는 사색과 창의를 즐기는 이들이 모입니다.'
    },
    hufflepuff: {
      eng: 'HUFFLEPUFF', kr: '후플푸프', img: 'image/HUFFLEPUFF.png',
      traits: ['성실', '충성', '공정'],
      text: '다정한 마법사 헬가 후플푸프가 세운 기숙사입니다. 오소리를 상징으로 삼고 노랑과 검정빛을 띠며, 성실함과 변함없는 충성심, 누구에게나 공정한 마음과 인내를 소중히 여깁니다. 따뜻한 부엌 근처에 자리한 휴게실에는 정직하고 헌신적인 이들이 모입니다.'
    }
  };

  const questions = [
    { q: '위험에 빠진 동료를 발견했을 때, 당신은?', options: [
      { t: '앞뒤 재지 않고 곧장 뛰어들어 돕는다', h: 'gryffindor' },
      { t: '가장 확실하고 효율적인 방법부터 찾는다', h: 'slytherin' },
      { t: '상황을 빠르게 분석해 현명한 해결책을 낸다', h: 'ravenclaw' },
      { t: '끝까지 곁을 지키며 함께 헤쳐 나간다', h: 'hufflepuff' }
    ]},
    { q: '새로운 마법을 배운다면 가장 끌리는 것은?', options: [
      { t: '화려하고 강력한 전투 주문', h: 'gryffindor' },
      { t: '남들이 모르는 희귀하고 비밀스러운 주문', h: 'slytherin' },
      { t: '원리를 깊이 이해해야 하는 복잡한 주문', h: 'ravenclaw' },
      { t: '누군가를 돕고 치유하는 따뜻한 주문', h: 'hufflepuff' }
    ]},
    { q: '친구들이 말하는 당신의 가장 큰 매력은?', options: [
      { t: '두려움을 모르는 패기', h: 'gryffindor' },
      { t: '목표를 끝내 이루는 추진력', h: 'slytherin' },
      { t: '무엇이든 꿰뚫는 영리함', h: 'ravenclaw' },
      { t: '변함없이 따뜻한 다정함', h: 'hufflepuff' }
    ]},
    { q: '모처럼 주어진 자유 시간, 당신의 선택은?', options: [
      { t: '아직 가보지 않은 곳을 탐험하러 떠난다', h: 'gryffindor' },
      { t: '사람들을 만나 인맥을 넓히고 계획을 세운다', h: 'slytherin' },
      { t: '도서관에서 새로운 지식을 파고든다', h: 'ravenclaw' },
      { t: '친구들과 어울리며 함께 시간을 보낸다', h: 'hufflepuff' }
    ]},
    { q: '목표를 이루는 당신만의 방식은?', options: [
      { t: '정면으로 부딪혀 직접 길을 만든다', h: 'gryffindor' },
      { t: '필요한 모든 수단을 동원해 반드시 해낸다', h: 'slytherin' },
      { t: '치밀하게 분석하고 전략을 세운다', h: 'ravenclaw' },
      { t: '서두르지 않고 꾸준히 끝까지 해낸다', h: 'hufflepuff' }
    ]},
    { q: '당신이 가장 듣고 싶은 한마디는?', options: [
      { t: '"정말 용감하구나."', h: 'gryffindor' },
      { t: '"네 야망은 정말 대단해."', h: 'slytherin' },
      { t: '"넌 어쩜 이렇게 똑똑하니."', h: 'ravenclaw' },
      { t: '"너는 믿을 수 있는 사람이야."', h: 'hufflepuff' }
    ]}
  ];

  const views = {
    intro: houseSection.querySelector('.house-intro'),
    quiz: houseSection.querySelector('.house-quiz'),
    result: houseSection.querySelector('.house-result'),
    all: houseSection.querySelector('.house-all')
  };

  function showView(name) {
    Object.values(views).forEach((v) => v.classList.remove('is-active'));
    views[name].classList.add('is-active');
  }

  const qEl = views.quiz.querySelector('.quiz-question');
  const optEl = views.quiz.querySelector('.quiz-options');
  const curEl = views.quiz.querySelector('.quiz-cur');
  const barEl = views.quiz.querySelector('.quiz-bar-fill');
  const backBtn = views.quiz.querySelector('.quiz-back');

  let qIndex = 0;
  let answers = [];

  function startQuiz() {
    qIndex = 0;
    answers = [];
    showView('quiz');
    renderQuestion();
  }

  function renderQuestion() {
    const q = questions[qIndex];
    curEl.textContent = qIndex + 1;
    barEl.style.width = `${(qIndex / questions.length) * 100}%`;
    qEl.textContent = q.q;
    backBtn.textContent = qIndex === 0 ? '‹ 처음으로' : '‹ 이전으로';
    optEl.innerHTML = '';
    q.options.forEach((opt) => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = opt.t;
      if (answers[qIndex] === opt.h) btn.classList.add('chosen');
      btn.addEventListener('click', () => choose(opt.h));
      li.appendChild(btn);
      optEl.appendChild(li);
    });
  }

  function choose(house) {
    answers[qIndex] = house;
    qIndex += 1;
    if (qIndex < questions.length) {
      renderQuestion();
    } else {
      barEl.style.width = '100%';
      finish();
    }
  }

  function goBack() {
    if (qIndex === 0) {
      showView('intro');
      return;
    }
    qIndex -= 1;
    renderQuestion();
  }

  function finish() {
    const order = ['gryffindor', 'slytherin', 'ravenclaw', 'hufflepuff'];
    const scores = { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 0 };
    answers.forEach((h) => { if (h in scores) scores[h] += 1; });
    let best = order[0];
    order.forEach((h) => { if (scores[h] > scores[best]) best = h; });
    showResult(best, true);
  }

  function showResult(house, isQuizResult) {
    const h = houseData[house];
    views.result.querySelector('.result-label').style.display = isQuizResult ? '' : 'none';
    const img = views.result.querySelector('.result-img');
    img.src = h.img;
    img.alt = h.kr;
    views.result.querySelector('.result-eng').textContent = h.eng;
    views.result.querySelector('.result-kr').textContent = h.kr;
    views.result.querySelector('.result-traits').innerHTML = h.traits.map((t) => `<li>${t}</li>`).join('');
    views.result.querySelector('.result-text').textContent = h.text;
    showView('result');
  }

  // 버튼 연결
  backBtn.addEventListener('click', goBack);
  views.intro.querySelector('.house-start').addEventListener('click', startQuiz);
  const skipBtn = views.intro.querySelector('.house-skip-all');
  if (skipBtn) skipBtn.addEventListener('click', () => showView('all'));
  views.result.querySelector('.house-show-all').addEventListener('click', () => showView('all'));
  houseSection.querySelectorAll('.house-retry').forEach((b) => b.addEventListener('click', startQuiz));
  views.all.querySelectorAll('.house-item').forEach((item) => {
    item.addEventListener('click', () => showResult(item.dataset.house, false));
  });
})();

// ===== 골든 스니치 : 화면 전체를 불규칙하게 날아다니기 =====
const snitch = document.getElementById('snitch');
const SNITCH_W = 120;
const SNITCH_H = 80;

let sx = window.innerWidth / 2;   // 현재 위치
let sy = window.innerHeight / 2;
let tx = 0, ty = 0;               // 목표 지점
let caught = false;
let rafId = null;
let lastSparkle = 0;

// 화면 안의 무작위 목표 지점 선택
function newTarget() {
  tx = Math.random() * (window.innerWidth - SNITCH_W);
  ty = Math.random() * (window.innerHeight - SNITCH_H);
}

// 화면 밖의 목표 지점 선택 (탈출용)
function offscreenTarget() {
  const edge = Math.floor(Math.random() * 4); // 0:왼쪽 1:오른쪽 2:위 3:아래
  if (edge === 0)      { tx = -300; ty = Math.random() * window.innerHeight; }
  else if (edge === 1) { tx = window.innerWidth + 300; ty = Math.random() * window.innerHeight; }
  else if (edge === 2) { tx = Math.random() * window.innerWidth; ty = -300; }
  else                 { tx = Math.random() * window.innerWidth; ty = window.innerHeight + 300; }
}

// 화면 밖 가장자리의 무작위 등장 위치
function edgeSpawn() {
  const edge = Math.floor(Math.random() * 4);
  if (edge === 0)      { sx = -150; sy = Math.random() * window.innerHeight; }
  else if (edge === 1) { sx = window.innerWidth + 150; sy = Math.random() * window.innerHeight; }
  else if (edge === 2) { sx = Math.random() * window.innerWidth; sy = -150; }
  else                 { sx = Math.random() * window.innerWidth; sy = window.innerHeight + 150; }
}

// 금빛 반짝이 생성
function dropSparkle(x, y) {
  const s = document.createElement('span');
  s.className = 'gold-sparkle';
  s.style.left = `${x + SNITCH_W / 2 + (Math.random() - 0.5) * 40}px`;
  s.style.top = `${y + SNITCH_H / 2 + (Math.random() - 0.5) * 30}px`;
  s.style.setProperty('--sx', `${(Math.random() - 0.5) * 50}px`);
  s.style.setProperty('--sy', `${20 + Math.random() * 50}px`);
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 1000);
}

// ===== 비행 모드 (다양한 행동 패턴) =====
// cruise: 보통 비행 / hover: 제자리에서 날개만 파닥이며 멈춤 / dash: 후다다닥 질주
let mode = 'cruise';
let modeUntil = 0; // 현재 모드 유지 시간 (timestamp)

function pickMode(now) {
  const r = Math.random();
  if (r < 0.22) {
    mode = 'hover';                          // 잠시 멈춰서 날개만 흔들기
    modeUntil = now + 800 + Math.random() * 1700;
  } else if (r < 0.44) {
    mode = 'dash';                           // 갑자기 빠르게 도망가기
    newTarget();
    modeUntil = now + 400 + Math.random() * 600;
  } else if (r < 0.56) {
    mode = 'exit';                           // 화면 밖으로 날아가기
    offscreenTarget();
    modeUntil = now + 99999;                 // 나갈 때까지 유지
  } else {
    mode = 'cruise';                         // 평범한 불규칙 비행
    modeUntil = now + 1200 + Math.random() * 2000;
  }
}

// 비행 루프
function fly(now) {
  if (caught) return;

  if (now >= modeUntil) pickMode(now);

  const dx = tx - sx;
  const dy = ty - sy;
  const dist = Math.hypot(dx, dy);
  if (dist < 30 && mode !== 'exit') newTarget(); // 목표 근처 도달 → 새 목표

  let flip = dx < 0 ? -1 : 1;

  // 행운의 물약 효과: 속도 절반
  const luckFactor = document.body.classList.contains('lucky') ? 0.5 : 1;

  if (mode === 'hover') {
    // 제자리에서 살짝 떠 있는 미세한 흔들림만
    sx += (Math.random() - 0.5) * 1.6;
    sy += Math.sin(now / 90) * 0.9;
  } else if (mode === 'dash') {
    // 후다다닥! 매우 빠른 직진 + 큰 흔들림
    const speed = 0.18 + Math.random() * 0.08;
    sx += (dx * speed + (Math.random() - 0.5) * 10) * luckFactor;
    sy += (dy * speed + (Math.random() - 0.5) * 10) * luckFactor;
  } else if (mode === 'exit') {
    // 화면 밖으로 시원하게 날아가기
    const speed = 0.08 + Math.random() * 0.04;
    sx += (dx * speed + (Math.random() - 0.5) * 6) * luckFactor;
    sy += (dy * speed + (Math.random() - 0.5) * 6) * luckFactor;

    // 완전히 화면 밖으로 나가면 → 잠시 후 다른 가장자리에서 재등장
    const out =
      sx < -SNITCH_W - 20 || sx > window.innerWidth + 20 ||
      sy < -SNITCH_H - 20 || sy > window.innerHeight + 20;
    if (out) {
      cancelAnimationFrame(rafId);
      setTimeout(() => {
        if (caught) return;
        edgeSpawn();      // 다른 가장자리에서 등장
        newTarget();      // 화면 안쪽 목표
        mode = 'dash';    // 들어올 땐 후다닥
        modeUntil = performance.now() + 700;
        rafId = requestAnimationFrame(fly);
      }, 800 + Math.random() * 1800);
      return;
    }
  } else {
    // 보통 비행
    const speed = 0.05 + Math.random() * 0.04;
    sx += (dx * speed + (Math.random() - 0.5) * 6) * luckFactor;
    sy += (dy * speed + (Math.random() - 0.5) * 6) * luckFactor;
  }

  snitch.style.transform = `translate(${sx}px, ${sy}px) scaleX(${flip})`;

  // 반짝이: 멈춰 있을 땐 드물게, 질주할 땐 더 자주
  const gap = mode === 'dash' ? 40 : mode === 'hover' ? 240 : 70;
  if (now - lastSparkle > gap) {
    dropSparkle(sx, sy);
    lastSparkle = now;
  }

  rafId = requestAnimationFrame(fly);
}

// ===== 루모스 / 녹스 토글 =====
const wandToggle = document.getElementById('wandToggle');
const spellText = document.getElementById('spellText');
const lumosLight = document.getElementById('lumosLight');

let typeTimer = null;
let hideTimer = null;

// 주문 텍스트 타이핑 효과
function typeSpell(word) {
  clearInterval(typeTimer);
  clearTimeout(hideTimer);
  spellText.textContent = '';
  spellText.classList.add('show');

  let i = 0;
  typeTimer = setInterval(() => {
    spellText.textContent += word[i];
    i++;
    if (i >= word.length) {
      clearInterval(typeTimer);
      hideTimer = setTimeout(() => spellText.classList.remove('show'), 1800);
    }
  }, 110);
}

// 어둠 속 손전등 효과: 마우스 주변 300px만 원래 화면이 보이고 나머지는 깜깜함
function updateLumosLight(x, y) {
  lumosLight.style.background = `radial-gradient(circle 300px at ${x}px ${y}px,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.75) 88%,
    rgba(0, 0, 0, 0.99) 100%)`;
}

wandToggle.addEventListener('click', (e) => {
  e.stopPropagation(); // 스니치 잡기 판정과 겹치지 않게
  const isLumos = document.body.classList.toggle('lumos');
  typeSpell(isLumos ? 'Lumos!' : 'Nox!');
  if (isLumos) updateLumosLight(window.innerWidth / 2, window.innerHeight / 2);
});

document.addEventListener('mousemove', (e) => {
  if (document.body.classList.contains('lumos')) {
    updateLumosLight(e.clientX, e.clientY);
  }
});

// ===== 마우스 뒤를 따라다니는 반짝이 (평소: 금빛 / 행운 상태: 파란빛) =====
let lastMouseSparkle = 0;
document.addEventListener('mousemove', (e) => {
  const now = performance.now();
  if (now - lastMouseSparkle < 45) return; // 너무 많이 생기지 않게 제한
  lastMouseSparkle = now;

  const s = document.createElement('span');
  s.className = document.body.classList.contains('lucky') ? 'blue-sparkle' : 'gold-sparkle';
  s.style.left = `${e.clientX + (Math.random() - 0.5) * 16}px`;
  s.style.top = `${e.clientY + (Math.random() - 0.5) * 16}px`;
  s.style.setProperty('--sx', `${(Math.random() - 0.5) * 40}px`);
  s.style.setProperty('--sy', `${15 + Math.random() * 35}px`);
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 1000);
});

// ===== 펠릭스 펠리시스 (행운의 물약) =====
const potionBtn = document.getElementById('potionBtn');
const luckToast = document.getElementById('luckToast');

const LUCK_DURATION = 30000; // 행운 지속 시간 30초
let luckTimer = null;
let toastTimer = null;

function showToast(msg) {
  clearTimeout(toastTimer);
  luckToast.textContent = msg;
  luckToast.classList.add('show');
  toastTimer = setTimeout(() => luckToast.classList.remove('show'), 2500);
}

potionBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // 스니치 잡기 판정과 겹치지 않게
  if (document.body.classList.contains('lucky')) return; // 이미 마신 상태

  document.body.classList.add('lucky');
  potionBtn.classList.add('drunk');
  showToast('행운의 물약을 마셨습니다');

  clearTimeout(luckTimer);
  luckTimer = setTimeout(() => {
    document.body.classList.remove('lucky');
    potionBtn.classList.remove('drunk');
    showToast('행운의 효과가 사라졌습니다');
  }, LUCK_DURATION);
});

// 금빛 폭죽 효과 (행운 상태면 2배 크기)
function goldFirework(cx, cy) {
  const lucky = document.body.classList.contains('lucky');
  const sizeFactor = lucky ? 2 : 1;
  const count = lucky ? 40 : 28;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('span');
    p.className = 'firework';
    p.style.left = `${cx}px`;
    p.style.top = `${cy}px`;
    p.style.width = `${8 * sizeFactor}px`;
    p.style.height = `${8 * sizeFactor}px`;
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
    const radius = (60 + Math.random() * 90) * sizeFactor;
    p.style.setProperty('--fx', `${Math.cos(angle) * radius}px`);
    p.style.setProperty('--fy', `${Math.sin(angle) * radius}px`);
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 900);
  }
}

// 스니치를 잡았을 때 (판정 너그럽게: 중심에서 110px 안이면 잡힌 것으로 처리)
const CATCH_RADIUS = 110;

function catchSnitch() {
  caught = true;
  cancelAnimationFrame(rafId);

  goldFirework(sx + SNITCH_W / 2, sy + SNITCH_H / 2); // 폭죽 팡!
  snitch.style.display = 'none';                       // 즉시 사라짐

  // 약 15초 뒤 다시 등장
  setTimeout(() => {
    edgeSpawn();
    newTarget();
    mode = 'cruise';
    modeUntil = 0;
    snitch.style.display = 'block';
    caught = false;
    rafId = requestAnimationFrame(fly);
  }, 15000);
}

document.addEventListener('click', (e) => {
  if (caught || snitch.style.display === 'none') return;
  const cx = sx + SNITCH_W / 2;
  const cy = sy + SNITCH_H / 2;
  if (Math.hypot(e.clientX - cx, e.clientY - cy) <= CATCH_RADIUS) {
    catchSnitch();
  }
});

// 시작
newTarget();
rafId = requestAnimationFrame(fly);

const posts = [
  { title: '새로운 친구를 찾고 있어요!', author: '아이리스 펜로즈 · 20분 전', body: '오늘 막 호그와트에 도착했어요. 같이 퀘스트를 돌거나 성 안의 숨은 장소를 찾아볼 친구를 구합니다. 초보 마법사도 환영이에요!', meta: '♥ 12   💬 12' },
  { title: '비밀 수업에서 숨겨진 장소!', author: '헤이즐 모스 · 1시간 전', body: '북쪽 탑으로 이어지는 복도 끝에서 조용한 방을 발견했어요. 밤에 가면 촛불이 켜지고 작은 퍼즐이 나타납니다.', meta: '♥ 23   💬 3' },
  { title: '마법약 재료 구하는 방법', author: '테오 라이트풋 · 3시간 전', body: '희귀 재료는 한 번에 모으려 하지 말고 수업 사이에 조금씩 챙기는 게 좋아요. 호그스미드 상점도 자주 확인해보세요.', meta: '♥ 18   💬 15' },
  { title: '호그와트 야경 감상', author: '익명 마법사 · 5시간 전', body: '오늘 밤 호그와트 성 위로 떠오른 달빛이 정말 아름다웠어요. 천문탑 근처에서 바라보는 풍경을 추천합니다.', meta: '♥ 15   💬 3' },
  { title: '던전 탐험 파티 모집', author: '데미안 코스그로브 · 6시간 전', body: '함께 던전 탐험하실 분을 찾습니다. 회복 물약과 방어 주문을 준비해오면 좋아요. 레벨 25 이상이면 편합니다.', meta: '♥ 9   💬 1' },
  { title: '퀴디치 팀원 모집', author: '노라 윈터스 · 6시간 전', body: '가볍게 빗자루 비행 연습을 함께할 팀원을 모아요. 포지션은 상관없고 즐겁게 참여할 분이면 됩니다.', meta: '♥ 11   💬 14' },
  { title: '호그와트의 숨겨진 방을 발견했어요!', author: '아이리스 펜로즈 · 1일 전', body: '연회장 뒤쪽 계단을 오르다 벽에 숨겨진 통로를 찾았어요. 마법으로 봉인된 문을 열면 오래된 책과 촛불로 가득한 작은 방이 나옵니다. 탐험을 좋아한다면 꼭 들러보세요!', meta: '♥ 128   💬 24' },
  { title: '그레이트홀에서 건진 최고의 후기', author: '헤이즐 모스 · 1일 전', body: '그레이트홀 천장에 떠 있는 촛불과 별빛 가득한 마법 천장은 꼭 한 번 올려다보세요. 식사 시간마다 풍경이 바뀌는 게 정말 매력적이에요.', meta: '♥ 97   💬 18' },
  { title: '금지된 숲에서 만난 신비한 생명체', author: '테오 라이트풋 · 2일 전', body: '금지된 숲 깊은 곳에서 은빛 털을 가진 생명체를 마주쳤어요. 조심스럽게 다가가면 도망가지 않고 잠시 곁을 지켜준답니다. 너무 깊이 들어가진 마세요!', meta: '♥ 86   💬 30' },
  { title: '오늘의 마법 수업 일지', author: '노라 윈터스 · 2일 전', body: '오늘 변환 마법 수업에서 처음으로 깃털을 완벽하게 띄웠어요! 손목 스냅이 핵심이라는 걸 깨달았습니다. 다음 수업이 벌써 기대돼요.', meta: '♥ 74   💬 9' },
  { title: '호그스미드 축제 소식', author: '데미안 코스그로브 · 3일 전', body: '이번 주말 호그스미드 광장에서 작은 축제가 열린대요. 빗자루 경주와 마법약 시음 부스가 준비된다니 다들 놀러 오세요!', meta: '♥ 65   💬 21' }
];

const modal = document.querySelector('.guest-modal');
const title = modal.querySelector('h3');
const author = modal.querySelector('.modal-author');
const body = modal.querySelector('.modal-body');
const meta = modal.querySelector('.modal-meta');
const postGrid = document.querySelector('.post-grid');
const writeButton = document.querySelector('.write-btn');
const writeModal = document.querySelector('.write-modal');
const writeForm = document.querySelector('.write-form');

function openPost(index) {
  const post = posts[index] || posts[0];
  title.textContent = post.title;
  const counts = post.meta.match(/\d+/g) || ['0', '0'];
  author.textContent = post.author;
  body.textContent = post.body;
  meta.innerHTML = `<span class="modal-like">${counts[0]}</span><span class="modal-comment">${counts[1] || '0'}</span>`;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closePost() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

document.addEventListener('click', (event) => {
  const postButton = event.target.closest('[data-post]');
  if (!postButton) return;
  openPost(Number(postButton.dataset.post));
});

modal.querySelector('.modal-close').addEventListener('click', closePost);
modal.querySelector('.guest-modal-backdrop').addEventListener('click', closePost);

function openWrite() {
  writeModal.classList.add('open');
  writeModal.setAttribute('aria-hidden', 'false');
  writeForm.title.focus();
}

function closeWrite() {
  writeModal.classList.remove('open');
  writeModal.setAttribute('aria-hidden', 'true');
}

function createPostCard(post, index) {
  const counts = post.meta.match(/\d+/g) || ['0', '0'];
  const [name, time = '방금 전'] = post.author.split(' · ');
  const shortBody = post.body.length > 38 ? `${post.body.slice(0, 38)}...` : post.body;
  const item = document.createElement('li');
  item.innerHTML = `<button class="post-card" type="button" data-post="${index}"><img src="image/guest-card.png" alt=""><span class="post-pin"></span><b>${post.title}</b><p>${shortBody}</p><em>${name}<br>${time}</em><span class="post-meta"><span class="stat-like">${counts[0]}</span><span class="stat-comment">${counts[1] || '0'}</span></span></button>`;
  return item;
}

writeButton.addEventListener('click', openWrite);
writeModal.querySelector('.write-close').addEventListener('click', closeWrite);
writeModal.querySelector('.guest-modal-backdrop').addEventListener('click', closeWrite);
writeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(writeForm);
  const post = {
    title: formData.get('title').trim(),
    author: `${formData.get('author').trim()} · 방금 전`,
    body: formData.get('body').trim(),
    meta: '♥ 0   💬 0'
  };
  if (!post.title || !post.author || !post.body) return;
  const index = posts.push(post) - 1;
  postGrid.prepend(createPostCard(post, index));
  writeForm.reset();
  closeWrite();
  openPost(index);
});
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  closePost();
  closeWrite();
});

const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('on');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach((el, i) => {
  el.style.transitionDelay = `${(i % 3) * 0.12}s`;
  observer.observe(el);
});

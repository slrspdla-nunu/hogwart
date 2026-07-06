const articles = [
  {
    category: '공지사항',
    title: '서비스 점검 안내',
    date: '2024.05.20',
    image: 'image/sub1_card1.png',
    body: [
      '보다 안정적인 게임 환경을 제공하기 위해 정기 점검이 진행될 예정입니다. 점검은 2024년 5월 22일 수요일 오전 2시부터 오전 6시까지 약 4시간 동안 진행되며, 작업 상황에 따라 시간이 단축되거나 연장될 수 있습니다.',
      '점검이 진행되는 동안에는 게임 접속을 포함한 일부 서비스 이용이 제한됩니다. 마법사 여러분께서는 점검 시작 전 진행 중이던 모험을 안전한 장소에서 저장해 주시기 바랍니다.',
      '이번 점검을 통해 서버 안정화 작업과 함께 접속 지연 현상을 개선하고, 일부 지역에서 보고된 오류를 정비할 예정입니다. 점검이 완료되면 한층 쾌적한 환경에서 호그와트를 누비실 수 있습니다.',
      '점검으로 불편을 끼쳐 드린 점 양해 부탁드리며, 정상화 이후 접속하신 모든 마법사분께 소정의 보상을 우편으로 전해 드릴 예정입니다. 앞으로도 더 나은 경험을 위해 최선을 다하겠습니다.'
    ]
  },
  {
    category: '이벤트',
    title: '새로운 이벤트: 마법사의 도전',
    date: '2024.05.18',
    image: 'image/sub1_card2.png',
    body: [
      '특별한 보상을 획득할 수 있는 새로운 이벤트 "마법사의 도전"이 시작되었습니다. 이번 이벤트는 5월 18일부터 6월 1일까지 약 2주간 진행되며, 누구나 별도의 신청 없이 참여하실 수 있습니다.',
      '이벤트 기간 동안 매일 갱신되는 도전 과제가 주어집니다. 정해진 주문을 일정 횟수 시전하거나, 지정된 지역을 탐험하고, 마법 생명체를 돌보는 등 다양한 미션을 완료하면 도전 점수가 쌓입니다.',
      '누적한 도전 점수에 따라 한정 빗자루 장식, 희귀 마법약 재료, 그리고 이벤트 전용 의상 등 풍성한 보상을 단계별로 받을 수 있습니다. 최종 단계까지 달성한 마법사에게는 특별 칭호가 함께 주어집니다.',
      '호그와트 곳곳에서 펼쳐지는 미션에 참여하고, 친구들과 함께 기록을 공유해 보세요. 한정 기간에만 만날 수 있는 보상인 만큼, 잊지 말고 매일 도전에 참여하시길 바랍니다.'
    ]
  },
  {
    category: '업데이트',
    title: '5월 업데이트 패치 노트',
    date: '2024.05.16',
    image: 'image/sub1_card3.png',
    body: [
      '5월 정기 업데이트가 적용되었습니다. 이번 패치에는 전반적인 플레이 경험을 개선하기 위한 다양한 변경 사항과 안정성 향상 작업이 포함되어 있습니다.',
      '탐험 중 특정 지역에서 캐릭터가 지형에 끼이던 문제와, 일부 퀘스트가 정상적으로 완료되지 않던 현상을 수정했습니다. 또한 인벤토리와 지도 화면에서 간헐적으로 발생하던 UI 표시 오류도 함께 정비되었습니다.',
      '전투 밸런스도 일부 조정되었습니다. 몇몇 주문의 재사용 대기 시간이 자연스럽게 다듬어졌고, 마법약 효과 표시가 더욱 명확해졌습니다. 더불어 환경 설정에 화면 흔들림 조절 옵션이 새롭게 추가되었습니다.',
      '보다 쾌적한 플레이를 위해 게임을 최신 버전으로 업데이트한 뒤 이용해 주시기 바랍니다. 적용되지 않은 경우 게임을 완전히 종료한 후 다시 실행하면 자동으로 갱신됩니다.'
    ]
  },
  {
    category: '소식',
    title: '커뮤니티 아트 콘테스트 결과 발표',
    date: '2024.05.14',
    image: 'image/sub1_card4.png',
    body: [
      '지난 한 달간 진행된 커뮤니티 아트 콘테스트의 결과가 발표되었습니다. 예상을 뛰어넘는 많은 참여와 멋진 작품들을 보내주신 모든 마법사 여러분께 진심으로 감사드립니다.',
      '이번 콘테스트에는 자신만의 마법사를 그린 일러스트부터, 호그와트의 풍경과 직접 만든 마법 도구를 담은 작품까지 다채로운 응모작이 모였습니다. 저마다의 개성과 상상력이 담긴 작품 하나하나가 깊은 인상을 남겼습니다.',
      '심사는 작품의 완성도와 독창성, 그리고 마법 세계를 향한 애정을 기준으로 신중하게 진행되었습니다. 수상작은 다음 주부터 공식 채널을 통해 순차적으로 소개될 예정이며, 작가님의 짧은 코멘트도 함께 전해 드립니다.',
      '입상하신 분들께는 기념 보상이 우편으로 지급되며, 참여해 주신 모든 분께도 감사의 의미로 소정의 선물을 드립니다. 다음 콘테스트는 여름 시즌에 새로운 주제로 다시 찾아뵐 예정이니 많은 기대 부탁드립니다.'
    ]
  },
  {
    category: '보도자료',
    title: '호그와트 레거시, 전 세계 판매량 2,000만 장 돌파',
    date: '2024.05.10',
    image: 'image/sub1_card5.png',
    body: [
      '호그와트 레거시가 출시 이후 전 세계 누적 판매량 2,000만 장을 돌파했습니다. 전 세계 마법사 여러분의 변함없는 성원과 사랑에 진심으로 감사의 말씀을 전합니다.',
      '광활한 오픈 월드와 자유로운 마법 성장, 그리고 자신만의 이야기를 써 내려가는 경험이 많은 분들께 깊은 즐거움을 드린 것으로 보입니다. 출시 초기부터 꾸준히 이어진 관심은 새로운 기록으로 이어졌습니다.',
      '이번 성과는 다양한 언어와 지역에서 고르게 사랑받은 결과로, 마법 세계가 국경을 넘어 폭넓게 공감을 얻고 있음을 보여 줍니다. 커뮤니티에서 공유되는 수많은 모험 이야기 역시 큰 힘이 되었습니다.',
      '앞으로도 마법 세계를 더욱 풍성하게 경험하실 수 있도록 새로운 콘텐츠와 소식을 꾸준히 전해 드리겠습니다. 변함없는 관심과 응원 부탁드리며, 여러분의 모험은 계속됩니다.'
    ]
  },
  {
    category: '공지사항',
    title: '공식 웹사이트 리뉴얼 안내',
    date: '2024.05.08',
    image: 'image/sub1_card6.png',
    body: [
      '더 나은 소식과 정보 제공을 위해 공식 웹사이트가 새롭게 단장되었습니다. 한층 정돈된 화면과 빨라진 탐색을 통해 원하는 소식을 더욱 쉽게 찾아보실 수 있습니다.',
      '주요 소식과 자료를 한눈에 확인할 수 있도록 메뉴 구조가 개선되었습니다. 주문 도감실, 학업 가이드, 예언자 일보, 방명록 등 각 공간이 명확하게 구분되어 원하는 정보로 바로 이동할 수 있습니다.',
      '게시글 상세 페이지도 가독성을 높이는 방향으로 개선되었습니다. 기사 본문은 더욱 읽기 편하게 다듬어졌고, 목록과 이전·다음 글 사이를 자유롭게 오갈 수 있도록 이동 동선도 정비했습니다.',
      '새로워진 웹사이트에서 마법 세계의 다양한 소식을 편리하게 만나 보세요. 이용 중 불편한 점이나 제안하고 싶은 의견이 있다면 언제든 들려주시기 바랍니다.'
    ]
  }
];

const listView = document.querySelector('.prophet-list-view');
const detailView = document.querySelector('.prophet-detail-view');
const article = document.querySelector('.prophet-article');
const prevButton = document.querySelector('.article-prev');
const nextButton = document.querySelector('.article-next');
const revealEls = document.querySelectorAll('.reveal');

let currentIndex = 0;

function openArticle(index) {
  currentIndex = (index + articles.length) % articles.length;
  const item = articles[currentIndex];
  article.querySelector('.article-category').textContent = item.category;
  article.querySelector('h2').textContent = item.title;
  article.querySelector('.article-meta span').textContent = item.date;
  article.querySelector('figure img').src = item.image;
  article.querySelector('figure img').alt = item.title;
  article.querySelector('.article-body').innerHTML = item.body.map((text) => `<p>${text}</p>`).join('');
  listView.classList.remove('is-active');
  detailView.classList.add('is-active');
  detailView.setAttribute('aria-hidden', 'false');
  window.scrollTo({ top: document.querySelector('.prophet-stage').offsetTop - 80, behavior: 'smooth' });
}

function closeArticle() {
  detailView.classList.remove('is-active');
  detailView.setAttribute('aria-hidden', 'true');
  listView.classList.add('is-active');
  window.scrollTo({ top: document.querySelector('.prophet-stage').offsetTop - 80, behavior: 'smooth' });
}

document.addEventListener('click', (event) => {
  const button = event.target.closest('[data-article]');
  if (button) openArticle(Number(button.dataset.article));
});

document.querySelector('.prophet-back').addEventListener('click', closeArticle);
if (prevButton) prevButton.addEventListener('click', () => openArticle(currentIndex - 1));
if (nextButton) nextButton.addEventListener('click', () => openArticle(currentIndex + 1));

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

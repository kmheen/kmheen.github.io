// ===== Preloader =====
const preloader = document.getElementById('preloader');
const preloaderCount = document.getElementById('preloaderCount');
let pct = 0;
const loadTimer = setInterval(() => {
  pct += Math.floor(Math.random() * 18) + 6;
  if (pct >= 100) {
    pct = 100;
    preloaderCount.textContent = '100%';
    clearInterval(loadTimer);
    setTimeout(() => {
      preloader.classList.add('done');
      document.body.classList.add('loaded');
      triggerHeroReveal();
    }, 350);
  } else {
    preloaderCount.textContent = pct + '%';
  }
}, 110);

// ===== Custom cursor =====
const cursor = document.getElementById('cursor');
let mouseX = 0, mouseY = 0, curX = 0, curY = 0;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor(){
  curX += (mouseX - curX) * 0.18;
  curY += (mouseY - curY) * 0.18;
  cursor.style.transform = `translate(${curX}px, ${curY}px) translate(-50%,-50%)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('[data-hover]').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hovering');
    cursor.querySelector('span').textContent = el.classList.contains('card') || el.closest('.card') ? 'VIEW' : '';
  });
  el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
});

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('in'), i * 60);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

function triggerHeroReveal(){
  document.querySelectorAll('.hero .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('in'), i * 130);
  });
}

// ===== Project data =====
const projects = {
  p1: {
    number: '01',
    client: '[CJ] OLIVE YOUNG · 2024',
    title: 'OLIVEYOUNG BLACKFRIDAY',
    images: ['images/project-01.png'],
    wide: true,
    meta: [
      ['역할', '2D·3D 작업 · 모션 · 아카이빙 영상'],
      ['사용툴', 'Cinema4D · Octane · After Effects · Photoshop'],
      ['기여도', '90%'],
      ['제작 기간', '5주'],
    ],
    strategyTitle: '시선을 사로잡는 비주얼 시스템 설계',
    desc: '기존 2D 캐릭터를 3D로 재해석하고, 반복과 확장이 가능한 구조로 설계하여 다양한 채널에서 일관된 브랜드 경험을 구축했습니다.',
    points: [
      '캐릭터의 시스템화 — 단일 캐릭터를 반복 활용 가능한 브랜드 자산으로 확장',
      '캠페인 확장성 확보 — 다양한 채널에서 일관된 경험 제공',
      '브랜드 임팩트 강화 — 입체감과 움직임으로 시각적 주목도 상승',
    ]
  },
  p2: {
    number: '02',
    client: '[동아제약] 오쏘몰 · 2025',
    title: '오쏘몰 3D 키비주얼 & 쇼츠',
    images: ['images/project-02.png'],
    meta: [
      ['역할', '3D 그래픽 에셋 제작'],
      ['사용툴', 'Cinema4D · Octane · Photoshop'],
      ['기여도', '100%'],
      ['제작 기간', '4주'],
    ],
    strategyTitle: '제품을 빠르게 구분하고 에너지를 전달하는 시각 시스템',
    desc: '핑크(F)·블루(M) 컬러를 분리한 듀얼 키비주얼로 라인업을 직관적으로 인지하도록 설계하고, 3D 그래픽과 리듬감 있는 모션으로 생생한 에너지와 기능성을 효과적으로 전달합니다.',
    points: [
      '직관적인 기능 구분 — 여성은 핑크, 남성은 블루로 구분해 빠른 인지와 선택을 도움',
      '에너지와 활력을 시각적으로 전달 — 3D 그래픽 모티프와 컬러 조합',
      '일관된 브랜드 경험 — 온·오프라인 다양한 채널에 적용 가능한 시스템',
    ]
  },
  p3: {
    number: '03',
    client: '[오세븐] 인터널 브랜딩 · 2024',
    title: 'OHSEVEN INTERNAL BRANDING',
    images: ['images/project-03.png'],
    meta: [
      ['역할', '3D 그래픽 에셋 제작'],
      ['사용툴', 'Cinema4D · Octane · Photoshop'],
      ['기여도', '100%'],
      ['제작 기간', '2주'],
    ],
    strategyTitle: '일관된 브랜드 경험을 위한 3D 에셋 시스템 설계',
    desc: '조직의 커뮤니케이션 방식과 브랜드 특성을 기반으로, 다양한 상황에서 일관되게 활용 가능한 3D 에셋 시스템을 설계했습니다.',
    points: [
      '문화 기반 시각 언어 정의 — 브랜드 커뮤니케이션을 시각 요소로 구조화',
      '조합 가능한 에셋 구조 — 상황에 따라 유연하게 조합·활용 가능한 시스템',
      '제작 효율 향상 — 반복 제작을 줄이고 다양한 접점으로 확장 가능한 비주얼 시스템',
    ]
  },
  p4: {
    number: '05',
    client: '[해피프린스] · 2025',
    title: 'HAPPY PRINCE 3D ASSET & MOTION',
    images: ['images/project-04.png'],
    wide: true,
    meta: [
      ['역할', '3D 그래픽 에셋 제작'],
      ['사용툴', 'Cinema4D · Octane · Photoshop'],
      ['기여도', '100%'],
      ['제작 기간', '2주'],
    ],
    strategyTitle: '일상의 감성을 시각화한 3D 에셋 디자인',
    desc: "'선물 같은 순간'이라는 브랜드 컨셉을 기반으로, 텍스처와 형태를 통해 일관된 시각 언어로 확장한 프로젝트입니다.",
    points: [
      '브랜드 감성의 시각화 — 선물 같은 일상이라는 개념을 시각적으로 구체화',
      '일관된 시각 언어 구축 — 소재와 컬러를 기반으로 브랜드 인상을 유지',
      '확장 가능한 에셋 — 다양한 콘텐츠와 환경에서 유연하게 활용 가능한 시스템',
    ]
  },
  p5: {
    number: '06',
    client: '[삼립] · [동아제약] · [오세븐] · 2026',
    title: 'AI WORKFLOW',
    images: ['images/project-05.jpg'],
    meta: [
      ['역할', '비주얼 디자인 및 AI 기반 콘텐츠 제작'],
      ['사용툴', 'ChatGPT · Gemini · Midjourney · Sora'],
      ['기여도', '100%'],
    ],
    strategyTitle: 'AI와 수작업을 결합한 확장 가능한 디자인 프로세스',
    desc: 'AI를 단순 생성 도구가 아닌, 아이디어 탐색부터 결과 제작까지 확장 가능한 디자인 도구로 활용합니다. 프로젝트의 목적에 따라 AI와 수작업을 결합해 효율성과 완성도를 동시에 확보합니다.',
    points: [
      '[벳플] 캐릭터 리디자인 — AI로 다양한 포즈와 상황을 빠르게 구현해 작업 효율 향상',
      '[오세븐] AI 기반 브랜드 영상 — 3D 구조 설계와 AI 모션 생성을 결합한 제작 프로세스 최적화',
      '[삼립] AI Creative Video — 3가지 비주얼 컨셉 기반 어워드 제출용 영상 프로젝트',
    ]
  },
  p6: {
    number: '07',
    client: '[동아제약] 벳플 · 2025',
    title: 'VETPLE CHARACTER DESIGN',
    images: ['images/project-06.png'],
    meta: [
      ['역할', '캐릭터 디자인 및 일러스트'],
      ['사용툴', 'Adobe Illustrator · ChatGPT'],
      ['기여도', '100%'],
      ['제작 기간', '1개월'],
    ],
    strategyTitle: '반려동물 브랜드를 위한 친근한 캐릭터 시스템',
    desc: '강아지와 고양이 캐릭터를 중심으로, 다양한 포즈와 상황에서 활용 가능한 일러스트 세트를 디자인했습니다. SNS 콘텐츠와 브랜드 캠페인 전반에서 일관되게 사용할 수 있는 캐릭터 시스템을 구축했습니다.',
    points: [
      '캐릭터 포즈 라이브러리 구축 — 일상, 이벤트, 시즌 콘텐츠에 두루 활용 가능한 세트 구성',
      'SNS 콘텐츠 확장 — 인스타그램 카드뉴스, 이벤트 배너 등 다양한 접점에 적용',
      '브랜드 톤 정립 — 친근하고 사랑스러운 무드로 반려동물 브랜드 정체성 강화',
    ]
  },
  p7: {
    number: '04',
    client: '[CJ] 올리브영 · 2026',
    title: 'OLIVE MEMBERS 3D VISUAL SYSTEM',
    images: ['images/project-07.png'],
    meta: [
      ['역할', '통일된 비주얼·레이아웃 가이드 수립, 3D 에셋 제작'],
      ['사용툴', 'Cinema4D · Octane · AI Tool'],
      ['기여도', '90%'],
      ['제작 기간', '1개월'],
    ],
    strategyTitle: '멤버십 등급별로 확장 가능한 3D 비주얼 가이드',
    desc: '올리브영 멤버십 등급(올리브 멤버스, 올리브 하이틴 멤버스 등)별로 일관된 톤을 유지하면서도 구분되는 3D 비주얼 시스템을 설계했습니다. 레이아웃 가이드를 함께 수립해 다양한 채널에서 반복 제작이 가능하도록 했습니다.',
    points: [
      '등급별 컬러 시스템 — 멤버십 단계에 따라 컬러 톤을 구분해 직관적으로 인지 가능',
      '레이아웃 가이드 수립 — 배너, 팝업, 클래스 콘텐츠 등에 반복 적용 가능한 구조 설계',
      '3D 마스코트 활용 — 올리브 캐릭터를 다양한 상황에 맞춰 확장 제작',
    ]
  },
  p8: {
    number: '08',
    client: '스코그 · 2024',
    title: 'SKOG BRAND MOTION',
    images: ['images/project-08.png'],
    meta: [
      ['역할', '3D 그래픽 에셋 제작 및 모션'],
      ['사용툴', 'Cinema4D · Octane · Photoshop · After Effects'],
      ['기여도', '90%'],
      ['제작 기간', '3주'],
    ],
    strategyTitle: '브런치·베이커리 브랜드를 위한 감각적인 3D 모션',
    desc: '브랜드 로고를 3D 오브젝트로 재해석하고, 공간과 재질감을 살린 모션 콘텐츠를 제작했습니다. SNS 스토리 포맷에 맞춰 몰입감 있는 브랜드 경험을 전달합니다.',
    points: [
      '로고의 입체적 재해석 — 워드마크를 3D 오브젝트로 확장해 브랜드 인상을 강화',
      '재질·조명 디테일 — 유리·금속 등 다양한 재질감으로 고급스러운 무드 연출',
      'SNS 스토리 최적화 — 세로형 포맷에 맞춘 몰입감 있는 콘텐츠 구성',
    ]
  },
  p9: {
    number: '09',
    client: '오흐뒤구떼 · 2024',
    title: 'HEURE DU GOÛTER 3D MOTION',
    images: ['images/project-09.png'],
    meta: [
      ['역할', '3D 그래픽 에셋 제작 및 모션'],
      ['사용툴', 'Cinema4D · Octane · Photoshop · After Effects'],
      ['기여도', '100%'],
      ['제작 기간', '4주'],
    ],
    strategyTitle: '프렌치 디저트 브랜드를 위한 고급스러운 비주얼',
    desc: "'간식의 시간(Heure du Goûter)'이라는 브랜드 컨셉에 맞춰, 다크 톤과 골드 디테일을 활용한 고급스러운 3D 무드를 연출했습니다. 디저트의 질감을 살린 클로즈업 연출로 제품의 매력을 강조했습니다.",
    points: [
      '브랜드 무드 정립 — 다크 그린·골드 컬러로 프렌치 디저트 브랜드의 고급스러움을 표현',
      '제품 질감 클로즈업 — 마들렌·초콜릿 등 디저트의 재질감을 세밀하게 연출',
      '아치·공간 연출 — 브랜드 세계관을 담은 공간감 있는 배경 디자인',
    ]
  },
  p10: {
    number: '10',
    client: '[신세계L&B] · 2024',
    title: 'EVAN WILLIAMS HIGHBALL 3D MOTION',
    images: ['images/project-10.png'],
    meta: [
      ['역할', '3D 그래픽 에셋 제작 및 모션'],
      ['사용툴', 'Cinema4D · Octane · Photoshop · After Effects'],
      ['기여도', '90%'],
      ['제작 기간', '2주'],
    ],
    strategyTitle: '하이볼 제품의 청량감을 살린 3D 비주얼',
    desc: '제품과 과일 소재를 함께 배치한 3D 스틸 컷을 제작해, 하이볼의 청량하고 시원한 무드를 시각적으로 전달했습니다. 다양한 맛의 라인업을 동일한 톤으로 일관되게 구성했습니다.',
    points: [
      '라인업별 비주얼 통일 — 맛(애플·레몬 등)이 달라도 동일한 구도와 톤으로 일관성 유지',
      '청량감 있는 연출 — 얼음·과즙 디테일로 시원한 무드를 강조',
      '커튼·조명 연출 — 따뜻한 배경 조명과 커튼 질감으로 고급스러운 분위기 조성',
    ]
  },
};

// ===== Modal =====
const modal = document.getElementById('modal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const modalTrack = document.getElementById('modalTrack');
const modalStrategyTitle = document.getElementById('modalStrategyTitle');
const modalDesc = document.getElementById('modalDesc');
const modalPoints = document.getElementById('modalPoints');
const modalDotsWrap = document.getElementById('modalDots');
let modalDots = [];

function buildImageSlides(p){
  // Remove any previously injected image slides
  modalTrack.querySelectorAll('.slide-split').forEach(el => el.remove());

  const metaHtml = p.meta.map(([label, val]) =>
    `<div><span>${label}</span><strong>${val}</strong></div>`
  ).join('');

  const slidesHtml = p.images.map((src) => `
    <section class="modal-slide slide-split">
      <div class="split-left">
        <span class="modal-number">${p.number}</span>
        <p class="modal-client">${p.client}</p>
        <h2 class="modal-title">${p.title}</h2>
        <p class="split-desc">${p.desc}</p>
        <div class="split-meta">${metaHtml}</div>
      </div>
      <div class="split-right">
        <img src="${src}" alt="${p.title}">
      </div>
    </section>`
  ).join('');

  modalTrack.insertAdjacentHTML('afterbegin', slidesHtml);

  // Detect each image's orientation once loaded: wide images bleed to the
  // panel edge, tall/portrait images stay boxed with margin.
  // A project can force this with `wide: true` regardless of actual ratio.
  modalTrack.querySelectorAll('.slide-split .split-right img').forEach(img => {
    if (p.wide) {
      img.closest('.split-right').classList.add('is-wide');
      return;
    }
    const applyOrientation = () => {
      const wide = img.naturalWidth / img.naturalHeight > 1.15;
      img.closest('.split-right').classList.toggle('is-wide', wide);
    };
    if (img.complete) applyOrientation();
    else img.addEventListener('load', applyOrientation);
  });
}

function buildDots(count){
  modalDotsWrap.innerHTML = Array.from({ length: count })
    .map((_, i) => `<span class="modal-dot${i === 0 ? ' active' : ''}"></span>`)
    .join('');
  modalDots = modalDotsWrap.querySelectorAll('.modal-dot');
}

function openModal(key){
  const p = projects[key];
  if (!p) return;

  buildImageSlides(p);
  buildDots(p.images.length + 1); // + strategy slide

  modalStrategyTitle.textContent = p.strategyTitle;
  modalDesc.textContent = p.desc;
  modalPoints.innerHTML = p.points.map(pt => `<li>${pt}</li>`).join('');

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalTrack.scrollLeft = 0;
  updateDots();
}

function closeModal(){
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function updateDots(){
  const slideWidth = modalTrack.clientWidth;
  const index = Math.round(modalTrack.scrollLeft / slideWidth);
  modalDots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.project));
});
modalBackdrop.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Convert vertical wheel input into horizontal slide movement
modalTrack.addEventListener('wheel', (e) => {
  if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
    e.preventDefault();
    modalTrack.scrollLeft += e.deltaY;
  }
}, { passive: false });

modalTrack.addEventListener('scroll', () => {
  updateDots();
}, { passive: true });

// Arrow button navigation — a reliable fallback alongside wheel/drag
const modalPrev = document.getElementById('modalPrev');
const modalNext = document.getElementById('modalNext');

function goToSlide(direction){
  const slideWidth = modalTrack.clientWidth;
  modalTrack.scrollTo({
    left: modalTrack.scrollLeft + slideWidth * direction,
    behavior: 'smooth'
  });
}

modalPrev.addEventListener('click', () => goToSlide(-1));
modalNext.addEventListener('click', () => goToSlide(1));

document.addEventListener('keydown', (e) => {
  if (!modal.classList.contains('open')) return;
  if (e.key === 'ArrowRight') goToSlide(1);
  if (e.key === 'ArrowLeft') goToSlide(-1);
});

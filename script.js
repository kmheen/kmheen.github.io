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
    image: 'images/project-01.jpg',
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
    image: 'images/project-02.jpg',
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
    image: 'images/project-03.jpg',
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
    number: '04',
    client: '[해피프린스] · 2025',
    title: 'HAPPY PRINCE 3D ASSET & MOTION',
    image: 'images/project-04.jpg',
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
    number: '05',
    client: '[삼립] · [동아제약] · [오세븐] · 2026',
    title: 'AI WORKFLOW',
    image: 'images/project-05.jpg',
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
};

// ===== Modal =====
const modal = document.getElementById('modal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const modalNumber = document.getElementById('modalNumber');
const modalClient = document.getElementById('modalClient');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalMeta = document.getElementById('modalMeta');
const modalStrategyTitle = document.getElementById('modalStrategyTitle');
const modalDesc = document.getElementById('modalDesc');
const modalPoints = document.getElementById('modalPoints');

function openModal(key){
  const p = projects[key];
  if (!p) return;
  modalNumber.textContent = p.number;
  modalClient.textContent = p.client;
  modalTitle.textContent = p.title;
  modalImage.src = p.image;
  modalImage.alt = p.title;
  modalMeta.innerHTML = p.meta.map(([label, val]) =>
    `<div><span>${label}</span><strong>${val}</strong></div>`
  ).join('');
  modalStrategyTitle.textContent = p.strategyTitle;
  modalDesc.textContent = p.desc;
  modalPoints.innerHTML = p.points.map(pt => `<li>${pt}</li>`).join('');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal-scroll').scrollTop = 0;
}

function closeModal(){
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.project));
});
modalBackdrop.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

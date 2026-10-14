/* LinguaAI · front-end demo interactions */
(function () {
  'use strict';

  const icons = {
    close: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    menu: '<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    grid: '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/></svg>',
    mic: '<svg viewBox="0 0 24 24"><rect x="8" y="3" width="8" height="12" rx="4"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6"/></svg>',
    pen: '<svg viewBox="0 0 24 24"><path d="M4 20l4.4-1 9.9-9.9a2.2 2.2 0 0 0-3.1-3.1L5.3 15.9 4 20zM13.5 7.5l3 3"/></svg>',
    calendar: '<svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 10h16M8 14h2M14 14h2M8 17h2"/></svg>',
    chart: '<svg viewBox="0 0 24 24"><path d="M4 19V5M4 19h17"/><path d="M7 15l3-4 3 2 5-7"/></svg>',
    spark: '<svg viewBox="0 0 24 24"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2zM19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16z"/></svg>',
    settings: '<svg viewBox="0 0 24 24"><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-2.6V20a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H6v-2.6h.2a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6V6h2.6v.2a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v2.6h-.2a1.7 1.7 0 0 0-1.6 1z"/></svg>',
    logout: '<svg viewBox="0 0 24 24"><path d="M10 5H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4M14 16l4-4-4-4M9 12h9"/></svg>',
    arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6"/></svg>',
    arrowUp: '<svg viewBox="0 0 24 24"><path d="M12 19V5M6 11l6-6 6 6"/></svg>',
    'arrow-up': '<svg viewBox="0 0 24 24"><path d="M12 19V5M6 11l6-6 6 6"/></svg>',
    bell: '<svg viewBox="0 0 24 24"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg>',
    chevron: '<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>',
    user: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3"/><path d="M5 20a7 7 0 0 1 14 0"/></svg>',
    sun: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    play: '<svg viewBox="0 0 24 24"><path d="M8 5l11 7-11 7V5z"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="M5 12l4 4L19 6"/></svg>',
    trend: '<svg viewBox="0 0 24 24"><path d="M4 16l5-5 4 3 7-8M15 6h5v5"/></svg>',
    more: '<svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/></svg>',
    sound: '<svg viewBox="0 0 24 24"><path d="M5 10v4h3l4 3V7l-4 3H5zM16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11"/></svg>',
    file: '<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6zM14 3v5h5M9 13h6M9 17h5"/></svg>',
    bulb: '<svg viewBox="0 0 24 24"><path d="M9 18h6M10 21h4M8.4 14.5A6 6 0 1 1 16 14.4c-.8.7-1 1.5-1 2.6H9.4c0-1.1-.3-1.8-1-2.5z"/></svg>',
    book: '<svg viewBox="0 0 24 24"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16zM4 18a2.5 2.5 0 0 1 2.5-2.5H20"/></svg>',
    clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/></svg>',
    eye: '<svg viewBox="0 0 24 24"><path d="M3 12s3.2-5 9-5 9 5 9 5-3.2 5-9 5-9-5-9-5z"/><circle cx="12" cy="12" r="2"/></svg>'
  };

  document.querySelectorAll('[data-icon]').forEach((node) => {
    const key = node.dataset.icon;
    const markup = icons[key] || icons[key.replace('-', '')];
    if (markup) node.innerHTML = markup;
  });

  const titles = {
    home: '学习总览', speaking: 'AI 口语陪练', writing: 'AI 作文批改', plan: '智能学习计划', analytics: '学习数据', settings: '偏好设置'
  };
  const sidebar = document.getElementById('sidebar');
  const pageTitle = document.getElementById('pageTitle');
  const navItems = document.querySelectorAll('[data-route]');
  const pages = document.querySelectorAll('.page-view');

  function updateRoute() {
    const requested = window.location.hash.replace('#', '') || 'home';
    const route = titles[requested] ? requested : 'home';
    pages.forEach((page) => page.classList.toggle('active', page.dataset.page === route));
    navItems.forEach((item) => item.classList.toggle('active', item.dataset.route === route));
    pageTitle.textContent = titles[route];
    sidebar.classList.remove('open');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  window.addEventListener('hashchange', updateRoute);
  updateRoute();

  document.getElementById('menuBtn').addEventListener('click', () => sidebar.classList.add('open'));
  document.getElementById('sidebarClose').addEventListener('click', () => sidebar.classList.remove('open'));

  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toastText');
  let toastTimer;
  function showToast(message) {
    toastText.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
  }
  document.querySelectorAll('[data-toast]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      showToast(button.dataset.toast);
    });
  });

  const profile = document.getElementById('topProfile');
  const profileMenu = document.getElementById('profileMenu');
  profile.addEventListener('click', (event) => {
    if (event.target.closest('button')) return;
    profileMenu.classList.toggle('open');
  });
  document.addEventListener('click', (event) => {
    if (!profile.contains(event.target)) profileMenu.classList.remove('open');
  });
  document.getElementById('notifyBtn').addEventListener('click', () => showToast('你有 1 条学习提醒：今晚继续保持！'));
  document.getElementById('tourBtn').addEventListener('click', () => showToast('欢迎体验 LinguaAI：从口语开始你的学习旅程。'));

  const loginModal = document.getElementById('loginModal');
  function openLogin() { loginModal.classList.add('open'); loginModal.setAttribute('aria-hidden', 'false'); }
  function closeLogin() { loginModal.classList.remove('open'); loginModal.setAttribute('aria-hidden', 'true'); }
  document.getElementById('logoutBtn').addEventListener('click', openLogin);
  document.getElementById('profileLogout').addEventListener('click', (event) => { event.stopPropagation(); profileMenu.classList.remove('open'); openLogin(); });
  document.getElementById('loginClose').addEventListener('click', closeLogin);
  loginModal.addEventListener('click', (event) => { if (event.target === loginModal) closeLogin(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { closeLogin(); profileMenu.classList.remove('open'); sidebar.classList.remove('open'); } });
  document.getElementById('togglePassword').addEventListener('click', () => {
    const input = document.querySelector('.password-field input');
    input.type = input.type === 'password' ? 'text' : 'password';
  });
  document.getElementById('loginForm').addEventListener('submit', (event) => { event.preventDefault(); closeLogin(); showToast('登录成功，欢迎回来，Lin！'); });

  // Speaking practice demo
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');
  const responseBank = [
    'That is a thoughtful answer! Try adding one specific detail so your story feels even more vivid.',
    'I love that idea. You could connect the sentences with “because” or “so that” to sound more natural.',
    'Great expression, Lin! Your meaning is clear. Let’s try one richer adjective together: “unforgettable.”',
    'That sounds exciting! Can you tell me how you would feel in that moment?'
  ];
  function addMessage(text, type) {
    const row = document.createElement('div');
    row.className = `message-row ${type === 'user' ? 'user-row' : 'ai-row'}`;
    if (type === 'ai') row.innerHTML = `<div class="chat-mini-avatar">${icons.spark}</div>`;
    const time = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
    row.insertAdjacentHTML('beforeend', `<div class="bubble ${type === 'user' ? 'user-bubble' : 'ai-bubble'}"><p>${escapeHtml(text)}</p><span class="message-time">${time}${type === 'user' ? ' · 已发送' : ''}</span></div>`);
    chatMessages.appendChild(row);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  chatForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = chatInput.value.trim();
    if (!value) { showToast('先输入一句英文，再发送给 AI 吧'); chatInput.focus(); return; }
    addMessage(value, 'user');
    chatInput.value = '';
    const typing = document.createElement('div');
    typing.className = 'message-row ai-row';
    typing.innerHTML = `<div class="chat-mini-avatar">${icons.spark}</div><div class="bubble ai-bubble"><p class="typing-dots"><span></span><span></span><span></span></p></div>`;
    chatMessages.appendChild(typing);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    setTimeout(() => {
      typing.remove();
      const response = value.toLowerCase().includes('because') ? responseBank[2] : responseBank[Math.floor(Math.random() * responseBank.length)];
      addMessage(response, 'ai');
      const score = document.getElementById('speakingScore');
      score.textContent = String(Math.min(99, Number(score.textContent) + 1));
      showToast('AI 已完成本轮口语反馈');
    }, 850);
  });
  document.querySelectorAll('.suggestion').forEach((button) => button.addEventListener('click', () => { chatInput.value = button.dataset.suggestion; chatInput.focus(); }));
  document.getElementById('voiceBtn').addEventListener('click', () => { showToast('正在聆听你的声音…（演示模式）'); chatInput.value = 'I am ready to practice speaking with LinguaAI.'; });

  // Writing analysis demo
  const essayInput = document.getElementById('essayInput');
  const wordCount = document.getElementById('wordCount');
  essayInput.addEventListener('input', () => {
    const count = essayInput.value.trim() ? essayInput.value.trim().split(/\s+/).length : 0;
    wordCount.textContent = `${count} words`;
  });
  document.getElementById('analyzeBtn').addEventListener('click', () => {
    const text = essayInput.value.trim() || 'I have always wanted to visit Iceland. I like its quiet nature and beautiful northern lights.';
    if (!essayInput.value.trim()) { essayInput.value = text; wordCount.textContent = `${text.split(/\s+/).length} words`; }
    renderWritingResult(text);
    showToast('分析完成：发现 3 个可提升点');
  });
  function renderWritingResult(text) {
    const result = document.getElementById('writingResult');
    result.innerHTML = `<div class="analysis-result card-surface"><div class="analysis-top"><div><p class="section-kicker">AI WRITING REVIEW</p><h3>一份清晰的表达报告</h3></div><div class="analysis-score"><strong>88</strong><span>整体表现</span></div></div><div class="result-section"><h4>${icons.file} 原文</h4><div class="original-text">${escapeHtml(text)}</div></div><div class="result-section"><h4>${icons.spark} AI 修改版本</h4><div class="revised-text">I have always dreamed of visiting Iceland because I am fascinated by its peaceful landscapes and magical northern lights.</div></div><div class="result-section"><h4>${icons.check} 错误分析</h4><div class="error-list"><div class="error-row"><i></i><span><b>beautiful northern lights</b> → 建议使用 <b>magical northern lights</b>，让情绪更具体。</span></div><div class="error-row"><i></i><span>补充连接词 <b>because</b>，让两个句子的逻辑关系更自然。</span></div><div class="error-row"><i></i><span>“quiet nature”可以升级为 <b>peaceful landscapes</b>，表达更地道。</span></div></div></div><div class="result-section"><h4>${icons.book} 高级词汇替换</h4><div class="vocab-chips"><span class="vocab-chip">be fascinated by</span><span class="vocab-chip">peaceful landscapes</span><span class="vocab-chip">unforgettable</span></div></div></div>`;
  }

  // Learning plan demo
  let selectedTime = '30';
  document.querySelectorAll('#timeOptions button').forEach((button) => button.addEventListener('click', () => { selectedTime = button.dataset.time; document.querySelectorAll('#timeOptions button').forEach((item) => item.classList.toggle('selected', item === button)); }));
  document.getElementById('planForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const level = document.getElementById('levelSelect').value;
    const goal = document.getElementById('goalSelect').selectedOptions[0].textContent.split('·').pop().trim();
    document.getElementById('planSummaryText').textContent = `围绕“${goal}”，每天${selectedTime}分钟，循序提升。`;
    showToast(`已生成 ${level} 阶段的个性化学习计划`);
  });

  document.querySelectorAll('.date-filter button').forEach((button) => button.addEventListener('click', () => { document.querySelectorAll('.date-filter button').forEach((item) => item.classList.remove('active')); button.classList.add('active'); showToast(`已切换到${button.textContent}数据视图`); }));

  function escapeHtml(value) {
    return value.replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[char]));
  }
})();

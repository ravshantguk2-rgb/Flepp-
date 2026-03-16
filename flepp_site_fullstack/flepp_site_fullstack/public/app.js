const state = {
  page: "home",
  settings: null,
  applications: [],
  adminAuthorized: false,
  teacherModal: null,
};

const teacherPhotos = {
  "Фузайлов Р. К.": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4////fwAJ+wP9K8K2GQAAAABJRU5ErkJggg==",
  "Точибоева М.": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4////fwAJ+wP9K8K2GQAAAABJRU5ErkJggg==",
  "Мукаррамова З. Х.": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4////fwAJ+wP9K8K2GQAAAABJRU5ErkJggg==",
  "Фузайлова Махина Равшановна": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4////fwAJ+wP9K8K2GQAAAABJRU5ErkJggg==",
  "Ахмедова Р. М.": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4////fwAJ+wP9K8K2GQAAAABJRU5ErkJggg==",
  "Олимова З.": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4////fwAJ+wP9K8K2GQAAAABJRU5ErkJggg==",
  "Абдувалиева Д.": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4////fwAJ+wP9K8K2GQAAAABJRU5ErkJggg==",
  "Эхсонзода": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4////fwAJ+wP9K8K2GQAAAABJRU5ErkJggg==",
  "Кобилов Ч. Ш.": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4////fwAJ+wP9K8K2GQAAAABJRU5ErkJggg==",
  "Гавхар Батировна": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4////fwAJ+wP9K8K2GQAAAABJRU5ErkJggg==",
  "Рузиев К. Н.": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4////fwAJ+wP9K8K2GQAAAABJRU5ErkJggg==",
  "Бегмахмадов А. Б.": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4////fwAJ+wP9K8K2GQAAAABJRU5ErkJggg=="
};

const branches = [
  { name: "Бустон", address: "Шерози 1", phone: "+992929730052", director: "Точибоева М." },
  { name: "Конибодом", address: "центр", phone: "+992927332202", director: "Мукаррамова З. Х." },
  { name: "Унчи", address: "н. Б. Гафуров, Мастура Авезова 87", phone: "+992927483008", director: "Фузайлова Махина Равшановна" },
  { name: "Овчикалача", address: "н. Б. Гафуров, Азамов", phone: "+992926123040", director: "Ахмедова Р. М." }
];

const teachers = [
  ["Фузайлов Р. К.", "Генеральный директор центра, преподаватель английского языка"],
  ["Точибоева М.", "Директор филиала г. Бустон"],
  ["Мукаррамова З. Х.", "Директор филиала Конибодом, преподаватель английского языка"],
  ["Фузайлова Махина Равшановна", "Директор филиала Унчи"],
  ["Ахмедова Р. М.", "Директор филиала Овчикалача, преподаватель английского языка"],
  ["Олимова З.", "Преподаватель английского языка"],
  ["Абдувалиева Д.", "Преподаватель русского языка"],
  ["Эхсонзода", "Преподаватель английского языка"],
  ["Кобилов Ч. Ш.", "Преподаватель английского языка"],
  ["Гавхар Батировна", "Преподаватель русского языка"],
  ["Рузиев К. Н.", "Преподаватель английского языка"],
  ["Бегмахмадов А. Б.", "Преподаватель английского языка"],
  ["Зиеева М. П.", "Преподаватель"],
  ["Насриддинова Ш. З.", "Преподаватель китайского языка"],
  ["Тухтаева Н. Я.", "Преподаватель русского языка"],
  ["Джураева Ш.", "Преподаватель английского языка"]
];

const courses = [
  { title: "Английский язык", price: "от 220 сомон", description: "General English по уровням, разговорная практика, грамматика, чтение и развитие уверенного общения.", tags: ["Speaking","Grammar","Reading"] },
  { title: "Русский язык", price: "от 220 сомон", description: "Практический курс русского языка для школьников, студентов и взрослых с упором на речь и грамотность.", tags: ["Речь","Грамотность","Практика"] },
  { title: "Китайский, немецкий и корейский", price: "от 280 сомон", description: "Современные языковые направления для учёбы, карьеры, коммуникации и международного развития.", tags: ["Китайский","Немецкий","Корейский"] },
  { title: "IELTS и академические предметы", price: "от 250 сомон", description: "Подготовка к IELTS, а также занятия по математике, химии, биологии, физике, правоведению и истории.", tags: ["IELTS","Математика","Физика"] }
];

function initials(name) {
  return name.split(" ").filter(Boolean).slice(0,2).map(p => p[0]).join("").toUpperCase();
}

async function api(url, options = {}) {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(await res.text());
  return await res.json();
}

async function loadData() {
  state.settings = await api("/api/settings");
  state.applications = await api("/api/applications");
  render();
}

function setPage(page) {
  state.page = page;
  render();
}

function escapeHtml(str) {
  return String(str ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function teacherPhotoHtml(name) {
  const src = teacherPhotos[name];
  if (src) {
    return `<img class="teacher-photo" src="${src}" alt="${escapeHtml(name)}">`;
  }
  return `<div class="teacher-fallback">${escapeHtml(initials(name))}</div>`;
}

function heroHtml() {
  const s = state.settings;
  return `
  <section class="hero">
    <div class="container hero-grid">
      <div>
        <div class="badge">Рабочий сайт с серверной формой</div>
        <h1>${escapeHtml(s.centerName)} — ${escapeHtml(s.heroTitle)}</h1>
        <div class="slogan-en">${escapeHtml(s.sloganEn)}</div>
        <div class="slogan-ru">${escapeHtml(s.sloganRu)}</div>
        <div class="lead">${escapeHtml(s.heroText)}</div>
        <div class="actions">
          <button class="btn primary" onclick="setPage('contacts')">Подать заявку</button>
          <button class="btn" onclick="setPage('courses')">Открыть программы</button>
        </div>
        <div class="stats">
          <div class="card pad"><strong>4</strong><div class="small">филиала</div></div>
          <div class="card pad"><strong>11+</strong><div class="small">направлений обучения</div></div>
          <div class="card pad"><strong>15+</strong><div class="small">преподавателей</div></div>
          <div class="card pad"><strong>от 220 сомон</strong><div class="small">стоимость обучения</div></div>
        </div>
      </div>
      <div class="card pad">
        <div class="panel-dark">
          <p>Следующий уровень</p>
          <h3 style="margin:10px 0 0;font-size:30px">Сайт + серверная форма</h3>
          <div class="panel-grid">
            <div class="mini-pill">Заявки на сервер</div>
            <div class="mini-pill">Уведомление в Telegram</div>
            <div class="mini-pill">Админ-панель</div>
            <div class="mini-pill">Готовность к хостингу</div>
          </div>
        </div>
        <div class="stack" style="margin-top:14px">
          <div class="card pad" style="background:#f8fafc">
            <strong>Что уже работает</strong>
            <div class="stack" style="margin-top:12px">
              <div class="notice">Сайт с отдельными разделами</div>
              <div class="notice">Сохранение заявок на сервере</div>
              <div class="notice">Пересылка заявок в Telegram при наличии токена</div>
              <div class="notice">Редактирование настроек из админ-панели</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function aboutHtml() {
  return `
  <section class="section">
    <div class="container">
      <div class="section-title">
        <div class="badge">О центре</div>
        <h2>Образовательный центр FLEPP имени профессора Фузайлова</h2>
        <p>Мы открываем двери к знаниям, языкам и будущему. Центр основан в 2016 году и объединяет филиалы в Бустоне, Унчи, Конибодоме и Овчикалаче.</p>
      </div>
      <div class="grid-2" style="margin-top:32px">
        <div class="card pad">
          <h3 style="margin:0">История и развитие</h3>
          <p class="lead" style="font-size:16px">Первый филиал центра открылся в городе Бустон. Сегодня FLEPP — это образовательная среда международного уровня в регионе, где тысячи студентов сделали первые шаги к новым возможностям.</p>
          <div class="chips">
            <span class="chip">Основан в 2016 году</span>
            <span class="chip">4 филиала</span>
            <span class="chip">Языки и дисциплины</span>
            <span class="chip">Современная методика</span>
          </div>
        </div>
        <div class="card pad" style="background:#f8fafc">
          <h3 style="margin:0">Наша миссия</h3>
          <div class="stack" style="margin-top:16px">
            <div class="notice">повысить уровень языковой грамотности</div>
            <div class="notice">развивать академические знания учащихся</div>
            <div class="notice">формировать уверенность и лидерские качества</div>
            <div class="notice">готовить к международным образовательным стандартам</div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function coursesHtml() {
  return `
  <section class="section soft">
    <div class="container">
      <div class="section-title">
        <div class="badge">Программы</div>
        <h2>Курсы, которые легко выбрать и хочется изучать</h2>
        <p>Языки мирового уровня и академическая подготовка по ключевым дисциплинам.</p>
      </div>
      <div class="grid-2" style="margin-top:32px">
        ${courses.map(course => `
          <div class="card pad">
            <div style="display:flex;justify-content:space-between;gap:14px;align-items:start">
              <h3 style="margin:0">${escapeHtml(course.title)}</h3>
              <span class="chip">${escapeHtml(course.price)}</span>
            </div>
            <p class="lead" style="font-size:16px">${escapeHtml(course.description)}</p>
            <div class="chips">
              ${course.tags.map(tag => `<span class="chip">${escapeHtml(tag)}</span>`).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  </section>`;
}

function branchesHtml() {
  return `
  <section class="section dark">
    <div class="container">
      <div class="section-title">
        <div class="badge">Филиалы</div>
        <h2>Сеть филиалов</h2>
        <p>Каждый филиал показан как самостоятельная точка связи с руководителем, адресом и телефоном.</p>
      </div>
      <div class="grid-4" style="margin-top:32px">
        ${branches.map(branch => `
          <div class="card pad" style="background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.1);box-shadow:none">
            <h3 style="margin:0;color:#fff">${escapeHtml(branch.name)}</h3>
            <p class="small" style="color:#cbd5e1">${escapeHtml(branch.address)}</p>
            <p class="small" style="color:#cbd5e1">${escapeHtml(branch.phone)}</p>
            <p class="small" style="color:#94a3b8">${escapeHtml(branch.director)}</p>
          </div>
        `).join("")}
      </div>
    </div>
  </section>`;
}

function teamHtml() {
  return `
  <section class="section">
    <div class="container">
      <div class="section-title">
        <div class="badge">Команда</div>
        <h2>Руководство и преподаватели</h2>
        <p>Карточки преподавателей открываются. Для отправленных сотрудников выводятся фото, для остальных — аккуратный аватар.</p>
      </div>
      <div class="grid-3" style="margin-top:32px">
        ${teachers.map(([name, role], i) => `
          <div class="card pad">
            <div class="teacher-row">
              ${teacherPhotoHtml(name)}
              <div style="min-width:0">
                <h3 style="margin:0;font-size:20px">${escapeHtml(name)}</h3>
                <div class="small" style="margin-top:8px">${escapeHtml(role)}</div>
                <div class="small" style="margin-top:8px">${teacherPhotos[name] ? "Фото добавлено" : "Без фото"}</div>
              </div>
            </div>
            <button class="btn" style="width:100%;margin-top:18px" onclick="openTeacher(${i})">Открыть карточку</button>
          </div>
        `).join("")}
      </div>
    </div>
  </section>`;
}

function contactsHtml() {
  const s = state.settings;
  const whatsappHref = `https://wa.me/${(s.whatsapp || "").replace(/[^\d]/g, "")}`;
  return `
  <section class="section">
    <div class="container">
      <div class="section-title">
        <div class="badge">Контакты и заявки</div>
        <h2>Работа с заявкой через серверную форму</h2>
        <p>Теперь заявка сохраняется на сервере. При наличии TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID она автоматически отправляется в Telegram.</p>
      </div>
      <div class="grid-2" style="margin-top:32px">
        <div class="card pad" style="background:linear-gradient(135deg,#020617,#0f172a,#083344);color:#fff">
          <div class="badge" style="background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.1);color:#fff">Связь с центром</div>
          <h3 style="margin-top:16px;font-size:34px">Быстрая заявка и быстрые мессенджеры</h3>
          <p style="color:#cbd5e1;line-height:1.8">Используйте серверную форму, Telegram и WhatsApp для оперативной связи.</p>
          <div class="stack" style="margin-top:16px">
            <a class="btn" href="${escapeHtml(s.telegram)}" target="_blank">Telegram</a>
            <a class="btn" href="${escapeHtml(whatsappHref)}" target="_blank">WhatsApp</a>
            <a class="btn" href="${escapeHtml(s.instagram)}" target="_blank">Instagram</a>
          </div>
        </div>
        <div class="card pad">
          <h3 style="margin:0">Оставить заявку</h3>
          <p class="small" style="margin-top:8px">Заявка сохраняется на сервере и отображается в админ-панели.</p>
          <form class="stack" style="margin-top:18px" onsubmit="submitApplication(event)">
            <input class="input" name="name" placeholder="Ваше имя" required>
            <input class="input" name="phone" placeholder="Телефон" required>
            <input class="input" name="course" placeholder="Интересующий курс">
            <input class="input" name="branch" placeholder="Филиал">
            <button class="btn primary" type="submit">Сохранить заявку</button>
          </form>
          <div id="formMessage" class="small" style="margin-top:12px"></div>
        </div>
      </div>
    </div>
  </section>`;
}

function adminHtml() {
  if (!state.adminAuthorized) {
    return `
    <section class="section">
      <div class="container" style="max-width:560px">
        <div class="card pad">
          <h2 style="margin:0">Вход в админ-панель</h2>
          <p class="lead" style="font-size:16px">Здесь можно менять настройки сайта и просматривать заявки.</p>
          <div class="stack" style="margin-top:16px">
            <input id="adminPin" class="input" placeholder="Введите PIN">
            <button class="btn primary" onclick="adminLogin()">Войти</button>
          </div>
          <div id="adminLoginMessage" class="small" style="margin-top:12px">Стартовый PIN: 1234</div>
        </div>
      </div>
    </section>`;
  }

  const s = state.settings;
  return `
  <section class="section">
    <div class="container">
      <div class="section-title">
        <div class="badge">Админ-панель</div>
        <h2>Управление сайтом и заявками</h2>
        <p>Можно менять контакты, тексты и получать обращения от посетителей.</p>
      </div>
      <div class="grid-2" style="margin-top:32px">
        <div class="card pad">
          <h3 style="margin:0">Настройки сайта</h3>
          <div class="stack" style="margin-top:16px">
            <input id="setCenterName" class="input" value="${escapeHtml(s.centerName)}" placeholder="Название центра">
            <input id="setHeroTitle" class="input" value="${escapeHtml(s.heroTitle)}" placeholder="Главный заголовок">
            <input id="setHeroText" class="input" value="${escapeHtml(s.heroText)}" placeholder="Главный текст">
            <input id="setSloganEn" class="input" value="${escapeHtml(s.sloganEn)}" placeholder="Слоган EN">
            <input id="setSloganRu" class="input" value="${escapeHtml(s.sloganRu)}" placeholder="Слоган RU">
            <input id="setDirectorPhone" class="input" value="${escapeHtml(s.directorPhone)}" placeholder="Телефон директора">
            <input id="setWhatsapp" class="input" value="${escapeHtml(s.whatsapp)}" placeholder="WhatsApp">
            <input id="setTelegram" class="input" value="${escapeHtml(s.telegram)}" placeholder="Telegram">
            <input id="setInstagram" class="input" value="${escapeHtml(s.instagram)}" placeholder="Instagram">
            <input id="setWorkTime" class="input" value="${escapeHtml(s.workTime)}" placeholder="Время работы">
            <input id="setAdminPin" class="input" value="${escapeHtml(s.adminPin)}" placeholder="PIN">
            <button class="btn primary" onclick="saveSettings()">Сохранить настройки</button>
            <div id="settingsMessage" class="small"></div>
          </div>
        </div>
        <div class="card pad">
          <h3 style="margin:0">Заявки</h3>
          <div class="stack" style="margin-top:16px">
            ${state.applications.length ? state.applications.map(app => `
              <div class="notice">
                <strong>${escapeHtml(app.name)}</strong><br>
                ${escapeHtml(app.phone)}<br>
                Курс: ${escapeHtml(app.course || "не указан")}<br>
                Филиал: ${escapeHtml(app.branch || "не указан")}<br>
                <span class="small">${escapeHtml(app.createdAt)}</span><br>
                <button class="btn" style="margin-top:8px" onclick="deleteApplication('${escapeHtml(app.id)}')">Удалить</button>
              </div>
            `).join("") : `<div class="notice">Пока заявок нет.</div>`}
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function teacherModalHtml() {
  if (!state.teacherModal) return "";
  const [name, role] = teachers[state.teacherModal];
  return `
  <div class="modal" onclick="closeTeacher(event)">
    <div class="modal-card" onclick="event.stopPropagation()">
      <div style="display:flex;justify-content:space-between;gap:16px;align-items:start">
        <div class="teacher-row">
          ${teacherPhotoHtml(name)}
          <div>
            <h3 style="margin:0">${escapeHtml(name)}</h3>
            <div class="small" style="margin-top:8px">${escapeHtml(role)}</div>
          </div>
        </div>
        <button class="btn" onclick="state.teacherModal=null;render()">Закрыть</button>
      </div>
      <div class="notice" style="margin-top:18px">Подробная карточка преподавателя. Здесь можно позже добавить достижения, стаж, график, сертификаты и описание.</div>
    </div>
  </div>`;
}

function layout(content) {
  const page = state.page;
  return `
    <header class="topbar">
      <div class="container nav">
        <div class="brand">
          <div class="logo">F</div>
          <div>
            <div style="font-weight:700">FLEPP</div>
            <div class="small">имени профессора Фузайлова</div>
          </div>
        </div>
        <nav class="menu">
          ${[
            ["home","Главная"],["courses","Программы"],["branches","Филиалы"],["team","Команда"],["contacts","Контакты"],["admin","Админ"]
          ].map(([k,l]) => `<button class="${page===k?'active':''}" onclick="setPage('${k}')">${l}</button>`).join("")}
        </nav>
      </div>
    </header>
    ${content}
    <footer class="footer">
      <div class="container grid-2">
        <div>
          <div class="brand">
            <div class="logo">F</div>
            <div>
              <div style="font-weight:700">FLEPP</div>
              <div class="small">имени профессора Фузайлова</div>
            </div>
          </div>
          <p class="small" style="margin-top:14px">Рабочий сайт с серверной формой и возможностью отправки уведомлений в Telegram через backend.</p>
        </div>
        <div class="stack">
          <div class="notice">Телефон директора: ${escapeHtml(state.settings?.directorPhone || "")}</div>
          <div class="notice">Время работы: ${escapeHtml(state.settings?.workTime || "")}</div>
        </div>
      </div>
    </footer>
    ${teacherModalHtml()}
  `;
}

function render() {
  if (!state.settings) return;
  const app = document.getElementById("app");
  let content = "";
  if (state.page === "home") content = heroHtml() + aboutHtml();
  if (state.page === "courses") content = coursesHtml();
  if (state.page === "branches") content = branchesHtml();
  if (state.page === "team") content = teamHtml();
  if (state.page === "contacts") content = contactsHtml();
  if (state.page === "admin") content = adminHtml();
  app.innerHTML = layout(content);
}

async function submitApplication(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const payload = Object.fromEntries(fd.entries());
  const msg = document.getElementById("formMessage");
  msg.textContent = "Отправка...";
  try {
    const res = await api("/api/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    state.applications = await api("/api/applications");
    msg.textContent = res.telegram?.sent
      ? "Заявка сохранена и отправлена в Telegram."
      : "Заявка сохранена на сервере.";
    e.target.reset();
  } catch (err) {
    msg.textContent = "Ошибка отправки заявки.";
  }
}

function adminLogin() {
  const pin = document.getElementById("adminPin").value;
  const msg = document.getElementById("adminLoginMessage");
  if (pin === state.settings.adminPin) {
    state.adminAuthorized = true;
    render();
  } else {
    msg.textContent = "Неверный PIN.";
  }
}

async function saveSettings() {
  const payload = {
    centerName: document.getElementById("setCenterName").value,
    heroTitle: document.getElementById("setHeroTitle").value,
    heroText: document.getElementById("setHeroText").value,
    sloganEn: document.getElementById("setSloganEn").value,
    sloganRu: document.getElementById("setSloganRu").value,
    directorPhone: document.getElementById("setDirectorPhone").value,
    whatsapp: document.getElementById("setWhatsapp").value,
    telegram: document.getElementById("setTelegram").value,
    instagram: document.getElementById("setInstagram").value,
    workTime: document.getElementById("setWorkTime").value,
    adminPin: document.getElementById("setAdminPin").value
  };

  await api("/api/settings", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  state.settings = await api("/api/settings");
  document.getElementById("settingsMessage").textContent = "Настройки сохранены.";
}

async function deleteApplication(id) {
  await api(`/api/applications/${id}`, { method: "DELETE" });
  state.applications = await api("/api/applications");
  render();
}

function openTeacher(index) {
  state.teacherModal = index;
  render();
}

function closeTeacher(e) {
  if (e.target.classList.contains("modal")) {
    state.teacherModal = null;
    render();
  }
}

window.setPage = setPage;
window.submitApplication = submitApplication;
window.adminLogin = adminLogin;
window.saveSettings = saveSettings;
window.deleteApplication = deleteApplication;
window.openTeacher = openTeacher;
window.closeTeacher = closeTeacher;
window.state = state;

loadData();

'use strict';

const CONTENT = {
  nav: ['Home', 'Couple', 'Events', 'Contact'],
  hero: {
    tagline: 'UK',
    names: ['Komal', 'Uday'],
    date: 'November 21, 2025',
    button: 'View Details'
  },
  intro: {
    heading: "WE'RE GETTING MARRIED!",
    bride: {
      name: 'Komal',
      role: 'The Bride',
      bio: 'Lorem ipsum consectetur adipiscing elit eiusmod tempor incididunt labore dolore magna minim veniam exercitation.',
      social: ['facebook', 'instagram', 'dribbble']
    },
    groom: {
      name: 'Uday',
      role: 'The Groom',
      bio: 'Lorem ipsum consectetur adipiscing elit eiusmod tempor incididunt labore dolore magna minim veniam exercitation.',
      social: ['facebook', 'instagram', 'behance']
    }
  },
  countdown: {
    heading: 'Start Celebration',
    labels: ['Days', 'Hours', 'Minutes', 'Seconds'],
    target: '2025-11-21T00:00:00'
  },
  collage: {
    main: 'assets/images/collage-main.jpg',
    left: 'assets/images/collage-polaroid-left.jpg',
    right: 'assets/images/collage-polaroid-right.jpg'
  },
  events: [
    {
      date: '24 March',
      title: 'The Ceremony',
      details: 'St. Anthony Church, 780 Ocean Drive, Miami, USA',
      photo: 'assets/images/event-ceremony.jpg'
    },
    {
      date: '24 March',
      title: 'The Reception',
      details: 'The Seaside Lounge, 900 Beach Ave, Miami, USA',
      photo: 'assets/images/event-reception.jpg'
    },
    {
      date: '25 March',
      title: 'The After Party',
      details: 'The Palm Diner, 122 Ocean Blvd, Miami, USA',
      photo: 'assets/images/event-afterparty.jpg'
    }
  ],
  footer: {
    phoneLabel: 'Call us directly',
    phone: '+00 252 365',
    emailLabel: 'Send a message',
    email: 'hello@udayandkomal.com',
    monogram: 'U ♥ K',
    credit: 'ThemeZee'
  }
};

const SECTION_IDS = {
  Home: 'home',
  Couple: 'couple',
  Events: 'events',
  Contact: 'contact'
};

function renderHeader(content) {
  const navItems = content.nav
    .map(item => `<li><a href="#${SECTION_IDS[item]}">${item}</a></li>`);
  navItems.splice(2, 0, `<li class="header__monogram-item">U <span class="monogram-heart">♥</span> K</li>`);

  return `
    <header class="site-header" id="top">
      <div class="container header__inner">
        <nav class="header__nav" aria-label="Primary">
          <ul class="header__menu">
            ${navItems.join('')}
          </ul>
        </nav>
      </div>
    </header>
  `;
}

function renderHero(hero) {
  return `
    <section class="hero" id="${SECTION_IDS.Home}">
      <div class="hero__media">
        <div class="hero__image" role="presentation"></div>
        <div class="hero__torn-edge" aria-hidden="true"></div>
      </div>
      <div class="container hero__inner">
        <div class="hero__card">
          <span class="hero__tag">${hero.tagline}</span>
          <div class="hero__names">
            <span class="hero__name hero__name--bride">${hero.names[0]}</span>
            <span class="hero__amp">and</span>
            <span class="hero__name hero__name--groom">${hero.names[1]}</span>
          </div>
          <p class="hero__date">${hero.date}</p>
          <button class="button hero__cta">${hero.button}</button>
        </div>
      </div>
    </section>
  `;
}

function renderIntro(intro) {
  const renderSocial = items =>
    items
      .map(
        icon => `
      <li>
        <a class="profile-card__social" href="#" aria-label="${icon}">
          <span class="profile-card__social-icon profile-card__social-icon--${icon}"></span>
        </a>
      </li>`
      )
      .join('');

  const profileCard = (person, modifier) => `
    <article class="profile-card profile-card--${modifier}">
      <span class="eyebrow profile-card__role">${person.role}</span>
      <h3 class="profile-card__name">${person.name}</h3>
      <p class="profile-card__bio">${person.bio}</p>
      <ul class="profile-card__social-list">
        ${renderSocial(person.social)}
      </ul>
    </article>`;

  return `
    <section class="intro section" id="${SECTION_IDS.Couple}">
      <div class="container">
        <header class="section-heading intro__heading">
          <h2>${intro.heading}</h2>
        </header>
        <div class="intro__grid">
          ${profileCard(intro.bride, 'bride')}
          <figure class="intro__photo">
            <img src="assets/images/intro-couple.jpg" alt="Komal and Uday" loading="lazy">
          </figure>
          ${profileCard(intro.groom, 'groom')}
        </div>
      </div>
    </section>
  `;
}

function renderCountdown(countdown) {
  return `
    <section class="countdown section" id="countdown">
      <div class="container countdown__inner">
        <header class="countdown__heading">
          <span class="eyebrow">${countdown.heading}</span>
        </header>
        <div class="countdown__grid" data-countdown data-target="${countdown.target}">
          ${countdown.labels
            .map(
              label => `
            <div class="countdown__item">
              <span class="countdown__value" data-count="${label.toLowerCase()}">000</span>
              <span class="countdown__label">${label}</span>
            </div>`
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}

function renderCollage(collage) {
  return `
    <section class="collage section" id="collage">
      <div class="container collage__inner">
        <div class="collage__photo">
          <img src="${collage.main}" alt="Komal hugging Uday" loading="lazy">
          <div class="collage__overlay">Forever</div>
        </div>
        <div class="collage__polaroids">
          <figure class="collage__polaroid collage__polaroid--left">
            <img src="${collage.left}" alt="Laughing together" loading="lazy">
            <figcaption>Emotion</figcaption>
          </figure>
          <figure class="collage__polaroid collage__polaroid--right">
            <img src="${collage.right}" alt="Kiss on the cheek" loading="lazy">
            <figcaption>Forever</figcaption>
          </figure>
        </div>
      </div>
    </section>
  `;
}

function renderEvents(events) {
  return `
    <section class="events section section--cream" id="${SECTION_IDS.Events}">
      <div class="container">
        <header class="section-heading">
          <span class="eyebrow">The Big Day</span>
          <h2>When And Where</h2>
        </header>
        <div class="events__grid">
          ${events
            .map(
              event => `
            <article class="event-card">
              <div class="event-card__media">
                <img src="${event.photo}" alt="${event.title}" loading="lazy">
                <span class="event-card__badge">${event.date}</span>
              </div>
              <div class="event-card__body">
                <h3 class="event-card__title">${event.title}</h3>
                <p class="event-card__details">${event.details}</p>
              </div>
            </article>`
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}

function renderFooter(footer) {
  return `
    <footer class="site-footer" id="${SECTION_IDS.Contact}">
      <div class="container site-footer__bar">
        <div class="site-footer__item">
          <span class="site-footer__label">${footer.phoneLabel}</span>
          <a href="tel:${footer.phone.replace(/[^0-9+]/g, '')}" class="site-footer__link">${footer.phone}</a>
        </div>
        <div class="site-footer__monogram">
          ${footer.monogram}
        </div>
        <div class="site-footer__item">
          <span class="site-footer__label">${footer.emailLabel}</span>
          <a href="mailto:${footer.email}" class="site-footer__link">${footer.email}</a>
        </div>
      </div>
      <div class="site-footer__credit">
        © ${new Date().getFullYear()} ${footer.credit}
      </div>
    </footer>
  `;
}

function renderApp(target) {
  target.innerHTML = `
    ${renderHeader(CONTENT)}
    <main>
      ${renderHero(CONTENT.hero)}
      ${renderIntro(CONTENT.intro)}
      ${renderCountdown(CONTENT.countdown)}
      ${renderCollage(CONTENT.collage)}
      ${renderEvents(CONTENT.events)}
    </main>
    ${renderFooter(CONTENT.footer)}
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');
  renderApp(root);
  initCountdown();
});

function initCountdown() {
  const countdownEl = document.querySelector('[data-countdown]');
  if (!countdownEl) return;

  const targetDate = new Date(countdownEl.dataset.target);
  const values = {
    days: countdownEl.querySelector('[data-count="days"]'),
    hours: countdownEl.querySelector('[data-count="hours"]'),
    minutes: countdownEl.querySelector('[data-count="minutes"]'),
    seconds: countdownEl.querySelector('[data-count="seconds"]')
  };

  const update = () => {
    const now = new Date();
    const diff = Math.max(0, targetDate - now);
    const seconds = Math.floor(diff / 1000);
    const d = Math.floor(seconds / (24 * 60 * 60));
    const h = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const m = Math.floor((seconds % (60 * 60)) / 60);
    const s = seconds % 60;

    values.days.textContent = String(d);
    values.hours.textContent = String(h).padStart(2, '0');
    values.minutes.textContent = String(m).padStart(2, '0');
    values.seconds.textContent = String(s).padStart(2, '0');
  };

  update();
  setInterval(update, 1000);
}

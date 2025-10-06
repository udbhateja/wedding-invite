'use strict';

const CONTENT = {
  nav: ["Home", "Timeline", "Gallery", "Party", "Events", "RSVP"],
  hero: {
    tagline: "SO RO",
    names: ["Sophia", "Robert"],
    date: "March 28, 2025",
    button: "View Details"
  },
  intro: {
    heading: "WE'RE GETTING MARRIED!",
    bride: {
      name: "Lorene Sophia",
      role: "The Bride",
      bio: "Lorem ipsum consectetur adipiscing elit eiusmod tempor incididunt labore dolore magna minim veniam exercitation.",
      social: ["facebook", "instagram", "dribbble"]
    },
    groom: {
      name: "Robert Bieber",
      role: "The Groom",
      bio: "Lorem ipsum consectetur adipiscing elit eiusmod tempor incididunt labore dolore magna minim veniam exercitation.",
      social: ["facebook", "instagram", "behance"]
    }
  },
  timeline: [
    {
      title: "First time we met",
      description: "Lorem ipsum consectetur adipiscing elit eiusmod tempor incididunt labore dolore magna minim veniam exercitation.",
      year: "2018"
    },
    {
      title: "Our first date",
      description: "Lorem ipsum consectetur adipiscing elit eiusmod tempor incididunt labore dolore magna minim veniam exercitation.",
      year: "2019"
    },
    {
      title: "Our marriage proposal",
      description: "Lorem ipsum consectetur adipiscing elit eiusmod tempor incididunt labore dolore magna minim veniam exercitation.",
      year: "2020"
    },
    {
      title: "Our engagement",
      description: "Lorem ipsum consectetur adipiscing elit eiusmod tempor incididunt labore dolore magna minim veniam exercitation.",
      year: "2023"
    }
  ],
  gallery: [
    { src: 'assets/images/gallery-cake.jpg', alt: 'Wedding cake' },
    { src: 'assets/images/gallery-couple-smile.jpg', alt: 'Couple smiling' },
    { src: 'assets/images/gallery-bouquet.jpg', alt: 'Flower bouquet' },
    { src: 'assets/images/gallery-kiss.jpg', alt: 'Couple kiss' },
    { src: 'assets/images/gallery-hands.jpg', alt: 'Wedding rings' },
    { src: 'assets/images/gallery-ceremony.jpg', alt: 'Ceremony moment' }
  ],
  countdown: {
    heading: "Start Celebration",
    labels: ["Days", "Hours", "Minutes", "Seconds"],
    target: "2025-03-28T00:00:00"
  },
  collage: {
    main: 'assets/images/collage-main.jpg',
    left: 'assets/images/collage-polaroid-left.jpg',
    right: 'assets/images/collage-polaroid-right.jpg'
  },
  party: [
    { name: 'Caroline Smith', role: 'Bridesmaid', photo: 'assets/images/party-1.jpg' },
    { name: 'Evan Thomson', role: 'Groomsman', photo: 'assets/images/party-2.jpg' },
    { name: 'Bryce Harrison', role: 'Groomsman', photo: 'assets/images/party-3.jpg' },
    { name: 'Paula Osuna', role: 'Bridesmaid', photo: 'assets/images/party-4.jpg' },
    { name: 'Andre Morales', role: 'Groomsman', photo: 'assets/images/party-5.jpg' },
    { name: 'Samantha Jones', role: 'Bridesmaid', photo: 'assets/images/party-6.jpg' },
    { name: 'Nick Temperance', role: 'Groomsman', photo: 'assets/images/party-7.jpg' },
    { name: 'Lorence Lomas', role: 'Groomsman', photo: 'assets/images/party-8.jpg' }
  ],
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
  rsvp: {
    heading: 'Are You Attending?',
    note: 'Please let us know as soon as possible. You can email us directly at hello@crafto.com',
    button: 'Send Message'
  },
  footer: {
    phoneLabel: 'Call us directly',
    phone: '+00 252 365',
    emailLabel: 'Send a message',
    email: 'info@soro.com',
    monogram: 'SO ♥ RO',
    credit: 'ThemeZee'
  }
};

const SECTION_IDS = {
  Home: 'home',
  Timeline: 'timeline',
  Gallery: 'gallery',
  Party: 'party',
  Events: 'events',
  RSVP: 'rsvp'
};

function renderHeader(content) {
  return `
    <header class="site-header" id="top">
      <div class="container header__inner">
        <div class="header__logo">
          <span class="logo-mark">crafto</span>
          <span class="logo-tagline">ai-powered wordpress theme</span>
        </div>
        <nav class="header__nav" aria-label="Primary">
          <ul class="header__menu">
            ${content.nav.map(item => `<li><a href="#${SECTION_IDS[item]}">${item}</a></li>`).join('')}
          </ul>
        </nav>
        <div class="header__monogram">
          <span class="monogram">SO <span class="monogram-heart">♥</span> RO</span>
        </div>
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
  const renderSocial = (items) => items.map(icon => `
      <li>
        <a class="profile-card__social" href="#" aria-label="${icon}">
          <span class="profile-card__social-icon profile-card__social-icon--${icon}"></span>
        </a>
      </li>`).join('');

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
    <section class="intro section" id="couple">
      <div class="intro__background" aria-hidden="true">${intro.heading}</div>
      <div class="container">
        <header class="section-heading intro__heading">
          <h2>${intro.heading}</h2>
        </header>
        <div class="intro__grid">
          ${profileCard(intro.bride, 'bride')}
          <figure class="intro__photo">
            <img src="assets/images/intro-couple.jpg" alt="Sophia and Robert" loading="lazy">
          </figure>
          ${profileCard(intro.groom, 'groom')}
        </div>
      </div>
    </section>
  `;
}

function renderTimeline(items) {
  const milestones = items.map((item, index) => `
      <div class="timeline__item">
        <div class="timeline__marker" aria-hidden="true">
          <span class="timeline__dot"></span>
          ${index < items.length - 1 ? '<span class="timeline__line"></span>' : ''}
        </div>
        <div class="timeline__content">
          <span class="eyebrow timeline__eyebrow">${item.title}</span>
          <p class="timeline__text">${item.description}</p>
          <span class="timeline__year">${item.year}</span>
        </div>
      </div>
  `).join('');

  return `
    <section class="timeline section section--tight" id="${SECTION_IDS.Timeline}">
      <div class="timeline__background" aria-hidden="true">WE'RE GETTING MARRIED</div>
      <div class="container timeline__container">
        ${milestones}
      </div>
    </section>
  `;
}

function renderGallery(items) {
  return `
    <section class="gallery section section--cream" id="${SECTION_IDS.Gallery}">
      <div class="container">
        <header class="section-heading">
          <span class="eyebrow">Photo Album</span>
          <h2>Captured Moments</h2>
        </header>
        <div class="gallery__grid">
          ${items.map((item, index) => `
            <figure class="gallery__item gallery__item--${index + 1}">
              <img src="${item.src}" alt="${item.alt}" loading="lazy">
              <figcaption class="sr-only">${item.alt}</figcaption>
            </figure>
          `).join('')}
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
          ${countdown.labels.map(label => `
            <div class="countdown__item">
              <span class="countdown__value" data-count="${label.toLowerCase()}">000</span>
              <span class="countdown__label">${label}</span>
            </div>
          `).join('')}
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
          <img src="${collage.main}" alt="Sophia hugging Robert" loading="lazy">
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

function renderParty(members) {
  return `
    <section class="party section" id="${SECTION_IDS.Party}">
      <div class="container">
        <header class="section-heading">
          <span class="eyebrow">Best Friends</span>
          <h2>Groomsman & Bridesmaid</h2>
        </header>
        <div class="party__grid">
          ${members.map(member => `
            <article class="party-card">
              <div class="party-card__photo">
                <img src="${member.photo}" alt="${member.name}" loading="lazy">
              </div>
              <h3 class="party-card__name">${member.name}</h3>
              <p class="party-card__role">${member.role}</p>
            </article>
          `).join('')}
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
          ${events.map(event => `
            <article class="event-card">
              <div class="event-card__media">
                <img src="${event.photo}" alt="${event.title}" loading="lazy">
                <span class="event-card__badge">${event.date}</span>
              </div>
              <div class="event-card__body">
                <h3 class="event-card__title">${event.title}</h3>
                <p class="event-card__details">${event.details}</p>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderRSVP(rsvp) {
  return `
    <section class="rsvp section" id="${SECTION_IDS.RSVP}">
      <div class="rsvp__background" aria-hidden="true"></div>
      <div class="container rsvp__container">
        <header class="section-heading rsvp__heading">
          <h2>${rsvp.heading}</h2>
        </header>
        <form class="rsvp__form" novalidate>
          <div class="rsvp__field">
            <label for="rsvp-name">Enter your name</label>
            <input id="rsvp-name" name="name" type="text" placeholder="Your full name" required>
          </div>
          <div class="rsvp__field">
            <label for="rsvp-email">Your email address</label>
            <input id="rsvp-email" name="email" type="email" placeholder="example@email.com" required>
          </div>
          <div class="rsvp__field">
            <label for="rsvp-guests">Number of guests</label>
            <select id="rsvp-guests" name="guests" required>
              <option value="" disabled selected>Select guests</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div class="rsvp__field">
            <label for="rsvp-attend">Will you attend?</label>
            <select id="rsvp-attend" name="attend" required>
              <option value="" disabled selected>Select an option</option>
              <option value="yes">Yes, can't wait!</option>
              <option value="no">Sadly, can't make it</option>
            </select>
          </div>
          <div class="rsvp__field rsvp__field--wide">
            <label for="rsvp-message">Your message</label>
            <textarea id="rsvp-message" name="message" rows="5" placeholder="Leave us a note"></textarea>
          </div>
          <div class="rsvp__actions">
            <p class="rsvp__note">${rsvp.note}</p>
            <button class="button" type="submit">${rsvp.button}</button>
          </div>
          <p class="rsvp__success" role="status" aria-live="polite"></p>
        </form>
      </div>
    </section>
  `;
}

function renderFooter(footer) {
  return `
    <footer class="site-footer">
      <div class="container site-footer__bar">
        <div class="site-footer__item">
          <span class="site-footer__label">${footer.phoneLabel}</span>
          <a href="tel:${footer.phone.replace(/[^\d+]/g, '')}" class="site-footer__link">${footer.phone}</a>
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
      ${renderTimeline(CONTENT.timeline)}
      ${renderGallery(CONTENT.gallery)}
      ${renderCountdown(CONTENT.countdown)}
      ${renderCollage(CONTENT.collage)}
      ${renderParty(CONTENT.party)}
      ${renderEvents(CONTENT.events)}
      ${renderRSVP(CONTENT.rsvp)}
    </main>
    ${renderFooter(CONTENT.footer)}
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');
  renderApp(root);
  initCountdown();
  initRSVP();
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

    values.days.textContent = String(d).padStart(3, '0');
    values.hours.textContent = String(h).padStart(2, '0');
    values.minutes.textContent = String(m).padStart(2, '0');
    values.seconds.textContent = String(s).padStart(2, '0');
  };

  update();
  setInterval(update, 1000);
}

function initRSVP() {
  const form = document.querySelector('.rsvp__form');
  if (!form) return;

  const successEl = form.querySelector('.rsvp__success');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const name = formData.get('name');

    successEl.textContent = `Thank you, ${name || 'friend'}! Your RSVP has been noted.`;
    successEl.classList.add('rsvp__success--visible');
    form.reset();
  });
}

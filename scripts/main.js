'use strict';

// Detect which person's page this is based on URL path, hash, or query parameter
const getPersonFromPath = () => {
  // Check query parameter first (easiest for local testing)
  const urlParams = new URLSearchParams(window.location.search);
  const person = urlParams.get('person');
  if (person === 'komal' || person === 'uday') return person;
  
  // Check hash for file:// URLs (local testing)
  const hash = window.location.hash.toLowerCase().replace('#', '');
  if (hash === 'komal' || hash === 'uday') return hash;
  
  // Check path (for server-based URLs)
  const path = window.location.pathname.toLowerCase();
  if (path.includes('/komal')) return 'komal';
  if (path.includes('/uday')) return 'uday';
  
  return 'uday'; // default to uday
};

const currentPerson = getPersonFromPath();

const CONTACTS = {
  uday: {
    numbers: ['8284085451', '9418205451'],
    label: "Groom's Family"
  },
  komal: {
    numbers: ['7982738639', '9313599539'],
    label: "Bride's Family"
  }
};

const CONTENT = {
  nav: ['Home', 'Couple', 'Events', 'Contact'],
  hero: {
    tagline: 'UD-KO',
    names: ['Komal', 'Uday'],
    date: 'November 21, 2025',
    button: 'View Details'
  },
  intro: {
    heading: "WE'RE GETTING MARRIED!",
    bride: {
      name: 'Komal',
      role: 'The Bride',
      social: ['facebook', 'instagram', 'dribbble']
    },
    groom: {
      name: 'Uday',
      role: 'The Groom',
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
      date: '21 Nov',
      title: 'ANAND KARAJ',
      details: 'Gurudwara Gadori Sahib, Shamshi, Kullu (HP)',
      time: '10 AM',
      photo: 'assets/images/event-ceremony.jpg'
    },
    {
      date: '21 Nov',
      title: 'THE LUNCH/RECEPTION',
      details: 'Smile Resorts, Mohal, Kullu (HP)',
      time: '1 PM',
      photo: 'assets/images/event-reception.jpg'
    },
    {
      date: '22 Nov',
      title: 'DHAM/PRITIBHOJ',
      details: 'Smile Resorts, Mohal, Kullu (HP)',
      time: '1 PM onwards',
      photo: 'assets/images/event-afterparty.jpg'
    }
  ],
  footer: {
    contacts: CONTACTS[currentPerson],
    emailLabel: 'Send a message',
    email: 'hello@udayandkomal.com',
    monogram: 'U <span class="monogram-heart">♥</span> K',
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

  // Split navigation items to place monogram in the center
  const leftItems = navItems.slice(0, 2);
  const rightItems = navItems.slice(2);

  return `
    <header class="site-header" id="top">
      <div class="container header__inner">
        <nav class="header__nav" aria-label="Primary">
          <ul class="header__menu">
            ${leftItems.join('')}
            <li class="header__monogram-spacer"></li>
            ${rightItems.join('')}
          </ul>
        </nav>
        <div class="header__monogram">U <span class="monogram-heart">♥</span> K</div>
      </div>
    </header>
  `;
}

function renderHero(hero) {
  return `
    <section class="hero" id="${SECTION_IDS.Home}">
      <div class="hero__media">
        <div class="hero__image" role="presentation"></div>
      </div>
      <div class="container hero__inner">
        <div class="hero__content">
        </div>
      </div>
    </section>
  `;
}

function renderIntro(intro) {
  return `
    <section class="intro section" id="${SECTION_IDS.Couple}">
      <div class="container">
        <header class="intro__heading">
          <h2>${intro.heading}</h2>
          <p class="intro__subtitle">Two hearts becoming one</p>
        </header>
        <div class="intro__content">
          <div class="intro__couple-info">
            <div class="couple-card couple-card--bride" style="animation-delay: 200ms">
              <div class="couple-card__content">
                <span class="couple-card__role">${intro.bride.role}</span>
                <h3 class="couple-card__name">${intro.bride.name}</h3>
              </div>
            </div>
            <div class="intro__divider">
              <div class="intro__heart">♥</div>
            </div>
            <div class="couple-card couple-card--groom" style="animation-delay: 600ms">
              <div class="couple-card__content">
                <span class="couple-card__role">${intro.groom.role}</span>
                <h3 class="couple-card__name">${intro.groom.name}</h3>
              </div>
            </div>
          </div>
          <figure class="intro__photo" style="animation-delay: 400ms">
            <img src="assets/images/intro-couple.jpg" alt="Komal and Uday" loading="lazy">
          </figure>
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
        (event, index) => `
            <article class="event-card" data-event-id="${index}">
              <div class="event-card__media">
                <img src="${event.photo}" alt="${event.title}" loading="lazy">
                <div class="event-card__date-badge">
                  <div class="event-card__date">
                    <span class="event-card__date-day">${event.date.split(' ')[0]}</span>
                    <span class="event-card__date-month">${event.date.split(' ')[1]}</span>
                  </div>
                </div>
                <div class="event-card__expand-hint">
                  <svg class="event-card__expand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </div>
              </div>
              <div class="event-card__details" data-details>
                <div class="event-card__details-content">
                  <h3 class="event-card__title">${event.title}</h3>
                  <div class="event-card__location" data-location="${event.details}">
                    <svg class="event-card__location-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span class="event-card__address">${event.details}</span>
                  </div>
                  <div class="event-card__time">
                    <svg class="event-card__time-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                    <span>${event.time}</span>
                  </div>
                </div>
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
  const contactNumbers = footer.contacts.numbers.map(number => {
    const cleanNumber = number.replace(/[^0-9]/g, '');
    const displayNumber = number.replace(/(\d{5})(\d{5})/, '$1 $2'); // Format as 12345 67890
    return `
      <a href="tel:+91${cleanNumber}" class="site-footer__link">
        +91 ${displayNumber}
      </a>
    `;
  }).join('');

  return `
    <footer class="site-footer" id="${SECTION_IDS.Contact}">
      <div class="container site-footer__bar">
        <div class="site-footer__item">
          <span class="site-footer__label">${footer.contacts.label}</span>
          <div class="site-footer__contacts">
            ${contactNumbers}
          </div>
        </div>
        <div class="site-footer__monogram">
          ${footer.monogram}
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
      ${renderEvents(CONTENT.events)}
    </main>
    ${renderFooter(CONTENT.footer)}
  `;
}

function initApp() {
  const root = document.getElementById('app');
  renderApp(root);
  initCountdown();
  initEventCards();
}

document.addEventListener('DOMContentLoaded', initApp);

// Listen for hash changes (for local testing)
window.addEventListener('hashchange', () => {
  // Re-detect person and re-render
  window.location.reload();
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

function initEventCards() {
  const eventCards = document.querySelectorAll('.event-card');
  
  eventCards.forEach(card => {
    // Handle card expansion on click/hover
    const handleExpand = () => {
      // Close other expanded cards
      eventCards.forEach(otherCard => {
        if (otherCard !== card) {
          otherCard.classList.remove('expanded');
        }
      });
      
      // Toggle current card
      card.classList.toggle('expanded');
    };

    // Mobile: click to expand
    card.addEventListener('click', (e) => {
      // Don't expand if clicking on location (for map)
      if (!e.target.closest('.event-card__location')) {
        handleExpand();
      }
    });

    // Desktop: hover to expand
    if (window.innerWidth > 768) {
      card.addEventListener('mouseenter', () => {
        card.classList.add('expanded');
      });
      
      card.addEventListener('mouseleave', () => {
        card.classList.remove('expanded');
      });
    }

    // Handle map opening
    const locationElement = card.querySelector('.event-card__location');
    if (locationElement) {
      locationElement.addEventListener('click', (e) => {
        e.stopPropagation();
        const address = locationElement.dataset.location;
        openMap(address);
      });
    }
  });
}

function openMap(address) {
  const encodedAddress = encodeURIComponent(address);
  
  // Try to open in native maps app first, fallback to Google Maps
  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // For mobile devices, try native maps first
    const mapsUrl = `maps://maps.google.com/maps?q=${encodedAddress}`;
    const googleMapsUrl = `https://maps.google.com/maps?q=${encodedAddress}`;
    
    // Try to open native maps app
    window.location.href = mapsUrl;
    
    // Fallback to Google Maps in browser after a short delay
    setTimeout(() => {
      window.open(googleMapsUrl, '_blank');
    }, 500);
  } else {
    // For desktop, open Google Maps in new tab
    const googleMapsUrl = `https://maps.google.com/maps?q=${encodedAddress}`;
    window.open(googleMapsUrl, '_blank');
  }
}

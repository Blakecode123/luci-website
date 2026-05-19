(function () {
  // ==========================================================
  // CONTENT — edit these to add gallery images / FAQ images
  // ==========================================================

  // Past Events — most recent first.
  var PAST_EVENTS = [
    {
      name: 'Gong Bath on Govindas Recliners',
      date: '17 April 2025', location: 'Govindas, Darlinghurst NSW',
      url: 'https://www.eventbrite.co.uk/e/gong-bath-on-govindas-recliners-tickets-1984448474808',
      img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1126520263%2F254819168838%2F1%2Foriginal.20250917-030640?w=600&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C171%2C2730%2C1365&s=9ae5831d501f65b065d6e395382aa4bd'
    },
    {
      name: 'Yoga with Cats!',
      date: '13–25 March 2025', location: 'YUMIAO Cat Cafe, Waterloo NSW',
      url: 'https://www.eventbrite.co.uk/e/yoga-with-cats-tickets-1983048950794',
      img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1177433065%2F254819168838%2F1%2Foriginal.20260213-010112?w=600&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C1140%2C2736%2C1368&s=69760542252a0706757f07b4819c9951'
    },
    {
      name: 'Gong Bath at Govindas Movie Room',
      date: '13 February 2025', location: 'Govindas, Darlinghurst NSW',
      url: 'https://www.eventbrite.co.uk/e/gong-bath-at-govindas-movie-room-tickets-1977354450390',
      img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1126520263%2F254819168838%2F1%2Foriginal.20250917-030640?w=600&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C171%2C2730%2C1365&s=9ae5831d501f65b065d6e395382aa4bd'
    },
    {
      name: 'Gong Bath at Soul Agenda Yoga & Pilates',
      date: '8 February 2025', location: 'Soul Agenda Yoga & Pilates, Balmain NSW',
      url: 'https://www.eventbrite.co.uk/e/gong-bath-at-soul-agenda-yoga-pilates-tickets-1979957821142',
      img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1170183369%2F254819168838%2F1%2Foriginal.20251105-070947?w=600&auto=format%2Ccompress&q=75&sharp=10&s=b5e94ae1987c910e05b1c0ed07f04eac'
    },
    {
      name: 'Gong Bath at Soul Agenda Yoga & Pilates',
      date: '7 December 2025', location: 'Soul Agenda Yoga & Pilates, Balmain NSW',
      url: 'https://www.eventbrite.co.uk/e/gong-bath-at-soul-agenda-yoga-pilates-tickets-1962978108364',
      img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1170183369%2F254819168838%2F1%2Foriginal.20251105-070947?w=600&auto=format%2Ccompress&q=75&sharp=10&s=b5e94ae1987c910e05b1c0ed07f04eac'
    },
    {
      name: 'Gong Bath at Soul Agenda Yoga & Pilates',
      date: '2 November 2025', location: 'Soul Agenda Yoga & Pilates, Balmain NSW',
      url: 'https://www.eventbrite.co.uk/e/gong-bath-at-soul-agenda-yoga-pilates-tickets-1783260844189',
      img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1147504173%2F254819168838%2F1%2Foriginal.20251008-025740?w=600&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C969%2C4032%2C2016&s=22399ab93e4fa6b201030f0a61d54d8b'
    },
    {
      name: 'Gong Bath at Yoga Nilaya in Leichhardt',
      date: '17 October 2025', location: 'Yoga Nilaya, Leichhardt NSW',
      url: 'https://www.eventbrite.co.uk/e/gong-bath-at-yoga-nilaya-in-leichardt-tickets-1671230448259',
      img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1073608653%2F254819168838%2F1%2Foriginal.20250715-030703?w=600&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C859%2C4032%2C2016&s=a39d56b80c575c5e7aa8a5d36cc65cac'
    },
    {
      name: 'Gong Bath at Govindas Movie Room',
      date: '15 October 2025', location: 'Govindas, Darlinghurst NSW',
      url: 'https://www.eventbrite.co.uk/e/gong-bath-at-govindas-movie-room-tickets-1708954391589',
      img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1126520263%2F254819168838%2F1%2Foriginal.20250917-030640?w=600&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C171%2C2730%2C1365&s=9ae5831d501f65b065d6e395382aa4bd'
    },
    {
      name: 'Sound Bath with Cats',
      date: '19 September 2025', location: 'YUMIAO Cat Cafe, Waterloo NSW',
      url: 'https://www.eventbrite.co.uk/e/sound-bath-with-cats-tickets-1482219752179',
      img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1097756123%2F254819168838%2F1%2Foriginal.20250817-112541?w=600&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C1185%2C3024%2C1512&s=3645a6beea7079e2cb1ceb1b1e95eca0'
    },
    {
      name: 'Palm Reading & Sound Bath',
      date: '12 September 2025', location: 'Redfern Yoga Space, Redfern NSW',
      url: 'https://www.eventbrite.co.uk/e/palm-reading-gong-bath-night-tickets-1482204486519',
      img: 'https://cdn.evbuc.com/images/1071231913/254819168838/1/original.20250711-000731'
    },
    {
      name: 'Gong Bath at Yoga Nilaya in Leichhardt',
      date: '28 August 2025', location: 'Yoga Nilaya, Leichhardt NSW',
      url: 'https://www.eventbrite.co.uk/e/gong-bath-at-yoga-nilaya-in-leichardt-tickets-1489948268379',
      img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1073608653%2F254819168838%2F1%2Foriginal.20250715-030703?w=600&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C859%2C4032%2C2016&s=a39d56b80c575c5e7aa8a5d36cc65cac'
    },
  ];

  // Gallery — drop image files into assets/gallery/ and list them here.
  // Caption is optional. Example:
  //   { src: 'assets/gallery/session-1.jpg', caption: 'Group gong bath' }
  var GALLERY_IMAGES = [
    // { src: 'assets/gallery/photo-1.jpg', caption: 'Add a caption' },
  ];

  // FAQ + Private Events session copy (single source).
  // To add an image to an FAQ item, drop a file at:
  //   assets/faq/gong.jpg          (or .png / .webp — update FAQ_IMAGE_EXT below)
  //   assets/faq/singingbowls.jpg
  //   assets/faq/yoga.jpg
  //   assets/faq/breathwork.jpg
  var FAQ_IMAGE_EXT = 'jpg';

  var MODALITY_CONTENT = {
    gong: {
      heading: 'Gong Bath',
      paragraphs: [
        'Simply lie down, close your eyes and let the gong do the work for you. Within minutes, the mind quiets and the body drops into deep relaxation.',
        'People come for many reasons: better sleep, relief from constant overthinking, curiosity about deeper states of consciousness, or simply to experience something powerful and unusual.',
        'Some drift into profound calm, while others experience vivid imagery or a slightly psychedelic state. Leave feeling deeply relaxed, clear-headed and surprised by how powerful sound alone can be.'
      ]
    },
    yoga: {
      heading: 'Yoga',
      paragraphs: [
        'Yoga in The Anxi Method uses science backed movement, breathwork and meditation, allowing you to finally switch off and gain control over your mind. What starts as a way to loosen tight shoulders or improve mobility leaves you feeling clearer, calmer and far more settled than when you arrived.',
        'People book for many reasons: injuries, stiffness, mental health support, or a personal wellness experience with friends. Most say the same thing afterwards: they expected a yoga class, but experienced something far more powerful.',
        'Each private session helps you move better, breathe deeper and leave feeling noticeably lighter.'
      ]
    },
    singingbowls: {
      heading: 'Singing Bowls',
      paragraphs: [
        'Sessions are gentler than the intensive depths of a gong bath. Instead of the large, immersive waves of sound from a gong, the bowls create ethereal and varied tones and are better to use in smaller spaces.',
        'You lie down, close your eyes and let the layered tones guide your nervous system into a calm, balanced state. People often describe feeling centred, emotionally lighter and deeply settled afterwards.',
        'Book these sessions for stress relief, to feel blissful in your mind and body or a quieter and soft sound experience.'
      ]
    },
    breathwork: {
      heading: 'Breathwork / Meditation',
      paragraphs: [
        "The Anxi Method meditation and breathwork sessions are accessible even if you have limited mobility, have space constraints or don't feel like moving. Experience stress and anxiety relief, quieting of an overactive mind, improve digestion and reduce exhaustion.",
        'Learn the most effective ways to not have constant thoughts in your head, even as a beginner, for the long term. Strengthening your internal state is the key to everyday life feeling noticeably calmer, no matter what lies externally in front of you.'
      ]
    }
  };

  var FAQ_ORDER = ['gong', 'yoga', 'breathwork', 'singingbowls'];

  // ==========================================================
  // NAV + FOOTER — single source of truth across every page
  // ==========================================================

  var NAV_LINKS = [
    { href: 'index.html',          label: 'Home',            key: 'home' },
    { href: 'buy-tickets.html',    label: 'Upcoming events', key: 'tickets' },
    { href: 'private-events.html', label: 'Private Events',  key: 'private' },
    // { href: 'gallery.html',        label: 'Gallery',         key: 'gallery' },
    { href: 'faq.html',            label: 'FAQ',             key: 'faq' },
    { href: 'about.html',          label: 'About Me',        key: 'about' },
    { href: 'testimonials.html',   label: 'Testimonials',    key: 'testimonials' },
    { href: 'contact.html',        label: 'Contact',         key: 'contact' }
  ];

  function renderNav() {
    var slot = document.querySelector('[data-nav]');
    if (!slot) return;
    var active = document.body.getAttribute('data-page') || '';
    var links = NAV_LINKS.map(function (l) {
      if (l.key === 'home') {
        var cls = 'brand-logo' + (active === 'home' ? ' active' : '');
        return '<a href="' + l.href + '" class="' + cls + '" aria-label="Anxi home"><img src="assets/logo.png" alt="Anxi"></a>';
      }
      var cls = l.key === active ? 'active' : '';
      return '<a href="' + l.href + '" class="' + cls + '">' + l.label + '</a>';
    }).join('');
    var html =
      '<div class="nav nav-solid">' +
        '<div class="container nav-shell">' +
          '<button class="nav-toggle" type="button" data-nav-toggle aria-label="Toggle menu" aria-expanded="false">' +
            '<span class="bars"></span>' +
          '</button>' +
          '<div class="menu menu-left">' + links + '</div>' +
        '</div>' +
      '</div>';
    slot.outerHTML = html;
  }

  function renderFooter() {
    var slot = document.querySelector('[data-footer]');
    if (!slot) return;
    var year = new Date().getFullYear();
    var links = NAV_LINKS.map(function (l) {
      return '<a href="' + l.href + '">' + l.label + '</a>';
    }).join('') +
      '<a href="https://instagram.com/anxi_relief" target="_blank" rel="noopener">Instagram</a>';
    slot.outerHTML =
      '<footer class="footer">' +
        '<div class="container footer-links-wrap">' +
          '<div>&copy; ' + year + ' Anxi Gong Baths &amp; Yoga</div>' +
          '<div class="footer-links">' + links + '</div>' +
        '</div>' +
      '</footer>';
  }

  // ==========================================================
  // Hero slider
  // ==========================================================

  var heroSliderInterval = null;

  function initHeroSlider() {
    var root = document.querySelector('[data-hero-slider]');
    if (!root) return;
    var layers = root.querySelectorAll('.hero-slide-layer');
    if (layers.length < 2) return;
    var h1 = root.querySelector('.hero-copy h1');
    var sub = root.querySelector('.hero-copy .hero-subcopy');
    var copy = root.querySelector('.hero-copy');
    var learnMore = root.querySelector('.hero-learn-more');

    // Check for ?banner=N — if present, lock to that banner and skip rotation
    var bannerParam = new URLSearchParams(window.location.search).get('banner');
    if (bannerParam !== null) {
      var lockIndex = Math.min(Math.max(parseInt(bannerParam, 10) - 1, 0), layers.length - 1);
      layers.forEach(function (l) { l.classList.remove('active'); });
      layers[lockIndex].classList.add('active');
      var lockTitle = layers[lockIndex].getAttribute('data-title');
      var lockSub = layers[lockIndex].getAttribute('data-sub');
      if (h1 && lockTitle) h1.textContent = lockTitle;
      if (sub && lockSub) sub.textContent = lockSub;
      return; // no rotation
    }

    var index = 0;

    function applySlideText(i) {
      var layer = layers[i];
      var title = layer.getAttribute('data-title');
      var subText = layer.getAttribute('data-sub');
      var link = layer.getAttribute('data-link');
      if (!title && !subText) return;
      if (copy) copy.classList.add('hero-copy--fade');
      setTimeout(function () {
        if (h1 && title) h1.textContent = title;
        if (sub && subText) sub.textContent = subText;
        if (learnMore && link) learnMore.href = link;
        if (copy) copy.classList.remove('hero-copy--fade');
      }, 500);
    }

    function goToSlide(newIndex) {
      layers[index].classList.remove('active');
      index = (newIndex + layers.length) % layers.length;
      layers[index].classList.add('active');
      applySlideText(index);
    }

    function startAutoPlay() {
      if (heroSliderInterval) clearInterval(heroSliderInterval);
      heroSliderInterval = setInterval(function () {
        goToSlide(index + 1);
      }, 6000);
    }

    var prevBtn = root.querySelector('.hero-arrow-prev');
    var nextBtn = root.querySelector('.hero-arrow-next');
    if (prevBtn) prevBtn.addEventListener('click', function () {
      goToSlide(index - 1);
      startAutoPlay();
    });
    if (nextBtn) nextBtn.addEventListener('click', function () {
      goToSlide(index + 1);
      startAutoPlay();
    });

    startAutoPlay();
  }

  // ==========================================================
  // Mobile nav
  // ==========================================================

  function initMobileNav() {
    var toggles = document.querySelectorAll('[data-nav-toggle]');
    toggles.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var nav = btn.closest('.nav');
        if (!nav) return;
        var open = nav.classList.toggle('nav-open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
  }

  // ==========================================================
  // Private Events — modality toggle
  // ==========================================================

  function renderModality(type) {
    var data = MODALITY_CONTENT[type];
    var target = document.getElementById('modality-description');
    if (!data || !target) return;
    var imgSrc = 'assets/faq/' + type + '.' + FAQ_IMAGE_EXT;
    var html =
      '<h2 class="modality-heading">' + data.heading + '</h2>' +
      '<img src="' + imgSrc + '" alt="' + data.heading + '" ' +
        'style="width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:14px;margin:12px 0 16px;display:block;" ' +
        'onerror="this.style.display=\'none\'">';
    data.paragraphs.forEach(function (text) {
      html += '<p>' + text + '</p>';
    });
    target.innerHTML = html;
  }

  function initModalityToggle() {
    var buttons = document.querySelectorAll('.toggle-btn[data-price-type]');
    if (!buttons.length) return;
    var hidden = document.getElementById('eventTypeHidden');
    var initial = document.querySelector('.toggle-btn.active[data-price-type]');
    var initialType = initial ? initial.getAttribute('data-price-type') : 'gong';
    renderModality(initialType);
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var type = btn.getAttribute('data-price-type');
        buttons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        renderModality(type);
        if (hidden) hidden.value = type;
      });
    });
  }

  // ==========================================================
  // FAQ
  // ==========================================================

  function renderFaq() {
    var root = document.querySelector('[data-faq]');
    if (!root) return;
    var html = FAQ_ORDER.map(function (key) {
      var d = MODALITY_CONTENT[key];
      var paragraphs = d.paragraphs.map(function (p) { return '<p>' + p + '</p>'; }).join('');
      var imgSrc = 'assets/faq/' + key + '.' + FAQ_IMAGE_EXT;
      return '<article class="faq-item" id="faq-' + key + '">' +
        '<div class="faq-image">' +
          '<img src="' + imgSrc + '" alt="' + d.heading + '" loading="lazy" ' +
            'onerror="this.parentNode.classList.add(\'is-placeholder\'); this.style.display=\'none\';">' +
          '<span class="faq-image-placeholder">' +
            '<strong>Image placeholder</strong>' +
            '<span class="hint">Drop a file at <code>' + imgSrc + '</code></span>' +
          '</span>' +
        '</div>' +
        '<div class="faq-body">' +
          '<h2>' + d.heading + '</h2>' +
          paragraphs +
        '</div>' +
      '</article>';
    }).join('');
    root.innerHTML = html;
  }

  // ==========================================================
  // Past Events
  // ==========================================================

  function renderPastEvents() {
    var root = document.querySelector('[data-past-events]');
    if (!root) return;
    if (!PAST_EVENTS.length) {
      root.innerHTML = '<p style="opacity:.6;font-size:15px;">No past events listed yet.</p>';
      return;
    }
    var html = PAST_EVENTS.map(function (ev) {
      var img = ev.img ? '<img class="past-event-img" src="' + ev.img + '" alt="' + ev.name + '" loading="lazy">' : '';
      var inner =
        img +
        '<div class="past-event-body">' +
          '<div class="past-event-name">' + ev.name + '</div>' +
          '<div class="past-event-meta">' + ev.date + (ev.location ? ' &nbsp;·&nbsp; ' + ev.location : '') + '</div>' +
          (ev.url ? '<span class="past-event-link">View event &rarr;</span>' : '') +
        '</div>';
      if (ev.url) {
        return '<a class="past-event-card" href="' + ev.url + '" target="_blank" rel="noopener">' + inner + '</a>';
      }
      return '<div class="past-event-card">' + inner + '</div>';
    }).join('');
    root.innerHTML = html;
  }

  // Gallery + Lightbox
  // ==========================================================

  function renderGallery() {
    var root = document.querySelector('[data-gallery]');
    if (!root) return;

    if (!GALLERY_IMAGES.length) {
      root.innerHTML =
        '<div class="gallery-empty card">' +
          '<h3>The gallery is ready for your photos</h3>' +
          '<p>To add an image:</p>' +
          '<ol>' +
            '<li>Drop the file into <code>assets/gallery/</code> (e.g. <code>session-1.jpg</code>).</li>' +
            '<li>Open <code>app.js</code> and add an entry to <code>GALLERY_IMAGES</code> near the top:</li>' +
          '</ol>' +
          '<pre>var GALLERY_IMAGES = [\n  { src: \'assets/gallery/session-1.jpg\', caption: \'Optional caption\' },\n];</pre>' +
        '</div>';
      return;
    }

    var html = GALLERY_IMAGES.map(function (img, i) {
      var caption = img.caption ? '<figcaption>' + img.caption + '</figcaption>' : '';
      var alt = (img.caption || 'Gallery image').replace(/"/g, '&quot;');
      return '<figure class="gallery-item" data-lightbox-index="' + i + '" tabindex="0" role="button" aria-label="Open image">' +
        '<img src="' + img.src + '" alt="' + alt + '" loading="lazy">' +
        caption +
      '</figure>';
    }).join('');
    root.innerHTML = html;
    initLightbox(root);
  }

  function initLightbox(root) {
    var overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.innerHTML =
      '<button class="lightbox-close" aria-label="Close (Esc)">&times;</button>' +
      '<button class="lightbox-prev" aria-label="Previous image">&#10094;</button>' +
      '<figure class="lightbox-figure">' +
        '<img class="lightbox-img" alt="">' +
        '<figcaption class="lightbox-caption"></figcaption>' +
      '</figure>' +
      '<button class="lightbox-next" aria-label="Next image">&#10095;</button>';
    document.body.appendChild(overlay);

    var imgEl = overlay.querySelector('.lightbox-img');
    var capEl = overlay.querySelector('.lightbox-caption');
    var current = 0;

    function show(i) {
      current = (i + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
      var data = GALLERY_IMAGES[current];
      imgEl.src = data.src;
      imgEl.alt = data.caption || '';
      capEl.textContent = data.caption || '';
      capEl.style.display = data.caption ? 'block' : 'none';
      overlay.classList.add('is-open');
      document.body.classList.add('no-scroll');
    }
    function close() {
      overlay.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    }

    root.addEventListener('click', function (e) {
      var item = e.target.closest('[data-lightbox-index]');
      if (!item) return;
      show(parseInt(item.getAttribute('data-lightbox-index'), 10));
    });
    root.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      var item = e.target.closest('[data-lightbox-index]');
      if (!item) return;
      e.preventDefault();
      show(parseInt(item.getAttribute('data-lightbox-index'), 10));
    });

    overlay.querySelector('.lightbox-close').addEventListener('click', close);
    overlay.querySelector('.lightbox-prev').addEventListener('click', function () { show(current - 1); });
    overlay.querySelector('.lightbox-next').addEventListener('click', function () { show(current + 1); });
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay || e.target.classList.contains('lightbox-figure')) close();
    });
    document.addEventListener('keydown', function (e) {
      if (!overlay.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(current - 1);
      else if (e.key === 'ArrowRight') show(current + 1);
    });
  }

  // ==========================================================
  // Hero image positioner (mobile)
  // Always applies a saved position from localStorage.
  // Add ?adjust to the URL to open the slider panel.
  // ==========================================================

  function initHeroPositioner() {
    var hero = document.querySelector('[data-hero-slider]');
    if (!hero) return;

    var KEYS = ['anxiHeroPosMobile', 'anxiHeroPosMobile2', 'anxiHeroPosMobile3'];
    var CSS_VARS = ['--hero-pos-mobile', '--hero-pos-mobile-2', '--hero-pos-mobile-3'];
    var DEFAULTS = ['78% 47%', '70% 50%', '50% 50%'];
    var LABELS = ['Banner 1', 'Banner 2', 'Banner 3'];

    KEYS.forEach(function (key, i) {
      try {
        var s = localStorage.getItem(key);
        if (s) document.documentElement.style.setProperty(CSS_VARS[i], s);
      } catch (e) {}
    });

    var enabled = /[?&]adjust(=|&|$)/.test(location.search) || /(^|#)adjust\b/.test(location.hash);
    if (!enabled) return;

    // Pause the slider so it doesn't override positioner changes
    if (heroSliderInterval) { clearInterval(heroSliderInterval); heroSliderInterval = null; }

    var active = 0;

    function getStartVals(i) {
      var saved = null;
      try { saved = localStorage.getItem(KEYS[i]); } catch (e) {}
      var x = parseFloat(DEFAULTS[i]), y = parseFloat(DEFAULTS[i].split(' ')[1]);
      if (saved) {
        var m = saved.match(/(-?\d+(?:\.\d+)?)%\s+(-?\d+(?:\.\d+)?)%/);
        if (m) { x = parseFloat(m[1]); y = parseFloat(m[2]); }
      }
      return { x: x, y: y };
    }

    var v0 = getStartVals(0), v1 = getStartVals(1);

    var panel = document.createElement('div');
    panel.className = 'hero-pos-panel';
    panel.innerHTML =
      '<h3>Hero image position (mobile)</h3>' +
      '<p class="hero-pos-sub">Switch between banners, drag to position. Resize window to mobile width to see effect.</p>' +
      '<div class="hero-pos-actions" style="margin-bottom:10px;">' +
        '<button type="button" class="primary" id="hp-b1">Banner 1</button>' +
        '<button type="button" id="hp-b2">Banner 2</button>' +
        '<button type="button" id="hp-b3">Banner 3</button>' +
      '</div>' +
      '<label><span class="lbl">X</span><input type="range" id="hp-x" min="0" max="100" step="1" value="' + v0.x + '"><span class="v" id="hp-x-v">' + v0.x + '%</span></label>' +
      '<label><span class="lbl">Y</span><input type="range" id="hp-y" min="0" max="100" step="1" value="' + v0.y + '"><span class="v" id="hp-y-v">' + v0.y + '%</span></label>' +
      '<div class="hero-pos-actions">' +
        '<button type="button" class="primary" id="hp-save">Save</button>' +
        '<button type="button" id="hp-reset">Reset</button>' +
        '<button type="button" id="hp-copy">Copy CSS</button>' +
      '</div>' +
      '<p class="hero-pos-current">Current: <code id="hp-current">' + v0.x + '% ' + v0.y + '%</code></p>' +
      '<p class="hero-pos-hint">Save stores in your browser. Copy CSS gives the value to paste into styles.css.</p>';
    document.body.appendChild(panel);

    var xEl = document.getElementById('hp-x');
    var yEl = document.getElementById('hp-y');
    var xV = document.getElementById('hp-x-v');
    var yV = document.getElementById('hp-y-v');
    var cur = document.getElementById('hp-current');
    var b1btn = document.getElementById('hp-b1');
    var b2btn = document.getElementById('hp-b2');
    var b3btn = document.getElementById('hp-b3');
    var bannerBtns = [b1btn, b2btn, b3btn];

    function apply() {
      var pos = xEl.value + '% ' + yEl.value + '%';
      document.documentElement.style.setProperty(CSS_VARS[active], pos);
      xV.textContent = xEl.value + '%';
      yV.textContent = yEl.value + '%';
      cur.textContent = pos;
    }

    function switchBanner(i) {
      active = i;
      bannerBtns.forEach(function (b, idx) { b.className = idx === i ? 'primary' : ''; });
      var v = getStartVals(i);
      xEl.value = v.x;
      yEl.value = v.y;
      apply();
      // Force the correct banner visible
      var slider = document.querySelector('.hero-slider-fade');
      if (!slider) return;
      var layers = slider.querySelectorAll('.hero-slide-layer');
      for (var j = 0; j < layers.length; j++) {
        layers[j].classList.remove('active');
        layers[j].style.opacity = '0';
      }
      if (layers[i]) {
        layers[i].classList.add('active');
        layers[i].style.opacity = '1';
      }
    }

    apply();
    xEl.addEventListener('input', apply);
    yEl.addEventListener('input', apply);
    b1btn.addEventListener('click', function () { switchBanner(0); });
    b2btn.addEventListener('click', function () { switchBanner(1); });
    b3btn.addEventListener('click', function () { switchBanner(2); });

    document.getElementById('hp-save').addEventListener('click', function () {
      try {
        localStorage.setItem(KEYS[active], xEl.value + '% ' + yEl.value + '%');
        this.textContent = 'Saved ✓';
        var self = this;
        setTimeout(function () { self.textContent = 'Save'; }, 1400);
      } catch (e) {}
    });

    document.getElementById('hp-reset').addEventListener('click', function () {
      try { localStorage.removeItem(KEYS[active]); } catch (e) {}
      var d = DEFAULTS[active].match(/(\d+)%\s+(\d+)%/);
      if (d) { xEl.value = d[1]; yEl.value = d[2]; }
      apply();
    });

    document.getElementById('hp-copy').addEventListener('click', function () {
      var css = '/* ' + LABELS[active] + ' */\nbackground-position: ' + xEl.value + '% ' + yEl.value + '%;';
      var btn = this;
      var done = function () {
        btn.textContent = 'Copied ✓';
        setTimeout(function () { btn.textContent = 'Copy CSS'; }, 1400);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(css).then(done, function () { window.prompt('Copy this CSS:', css); });
      } else {
        window.prompt('Copy this CSS:', css);
      }
    });
  }

  // ==========================================================
  // Init
  // ==========================================================

  function init() {
    renderNav();
    renderFooter();
    initHeroSlider();
    initHeroPositioner();
    initMobileNav();
    initModalityToggle();
    renderFaq();
    renderGallery();
    renderPastEvents();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

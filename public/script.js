(function () {
  'use strict';

  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const contactForm = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');

  // Sticky header on scroll
  function handleHeaderScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // Mobile navigation toggle
  navToggle.addEventListener('click', function () {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', !isExpanded);
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });

  // Handle Escape key to close menus
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';

      const navDropdown = document.querySelector('.nav-dropdown');
      if (navDropdown) {
        navDropdown.classList.remove('active');
        const dropdownLink = navDropdown.querySelector('.nav-link');
        if (dropdownLink) dropdownLink.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // Close mobile menu on link click
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Dropdown toggle for mobile
  var navDropdown = document.querySelector('.nav-dropdown');
  if (navDropdown) {
    var dropdownLink = navDropdown.querySelector('.nav-link');

    dropdownLink.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const isExpanded = dropdownLink.getAttribute('aria-expanded') === 'true';
        navDropdown.classList.toggle('active');
        dropdownLink.setAttribute('aria-expanded', !isExpanded);
      }
    });

    document.addEventListener('click', function (e) {
      if (!navDropdown.contains(e.target)) {
        navDropdown.classList.remove('active');
      }
    });
  }

  // Animated counter for stats using IntersectionObserver
  var statNumbers = document.querySelectorAll('.stat-number');
  var statsAnimated = false;

  function animateStats() {
    if (statsAnimated) return;
    statsAnimated = true;

    statNumbers.forEach(function (stat) {
      var target = parseInt(stat.getAttribute('data-target'), 10);
      var suffix = stat.getAttribute('data-suffix') || '';
      var duration = 2000;
      var start = performance.now();

      function update(now) {
        var elapsed = now - start;
        var progress = Math.min(elapsed / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        stat.textContent = Math.floor(target * eased) + suffix;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          stat.textContent = target + suffix;
        }
      }

      requestAnimationFrame(update);
    });
  }

  var statsSection = document.querySelector('.stats');
  if (statsSection) {
    var statsObserver = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        animateStats();
        statsObserver.disconnect();
      }
    }, { threshold: 0.3 });
    statsObserver.observe(statsSection);
  }

  // Scroll-spy for active nav state
  var sections = document.querySelectorAll('section[id]');
  var navLinksAll = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    var scrollPos = window.scrollY + 100;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinksAll.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id || link.getAttribute('href') === '/#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // Merged scroll listener with passive:true
  window.addEventListener('scroll', function () {
    handleHeaderScroll();
    updateActiveNav();
  }, { passive: true });

  // Run once on load
  handleHeaderScroll();
  updateActiveNav();

  // Contact form handling
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var phone = document.getElementById('phone').value.trim();
      var service = document.getElementById('service');
      var message = document.getElementById('message').value.trim();

      if (!name || !email || !phone || !service.value || !message) {
        formNote.textContent = 'Please fill in all fields.';
        formNote.className = 'form-note';
        return;
      }

      formNote.textContent = 'Sending...';

      fetch(contactForm.action, {
        method: contactForm.method,
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      }).then(function(response) {
        if (response.ok) {
          formNote.textContent = 'Thank you! We will get back to you within 24 hours.';
          formNote.className = 'form-note success';
          contactForm.reset();
        } else {
          formNote.textContent = 'Oops! There was a problem submitting your form.';
          formNote.className = 'form-note';
        }
      }).catch(function() {
        formNote.textContent = 'Oops! There was a problem submitting your form.';
        formNote.className = 'form-note';
      });

      setTimeout(function () {
        formNote.textContent = '';
        formNote.className = 'form-note';
      }, 5000);
    });
  }

  // Service detail page rendering
  if (window.location.pathname.indexOf('/service') > -1 || window.location.pathname.endsWith('/service.html')) {
    var params = new URLSearchParams(window.location.search);
    var slug = params.get('slug');

    if (slug && typeof servicesData !== 'undefined' && servicesData[slug]) {
      var data = servicesData[slug];

      document.title = data.title + ' | Etacom Technology';

      document.getElementById('serviceHeroIcon').innerHTML = data.icon;
      document.getElementById('serviceTag').textContent = data.title;
      document.getElementById('serviceTitle').textContent = data.title;
      document.getElementById('serviceTagline').textContent = data.tagline;
      document.getElementById('serviceDescription').textContent = data.description;
      document.querySelector('meta[name="description"]').content = data.title + ' - ' + data.tagline;

      var detailsList = document.getElementById('serviceDetails');
      data.details.forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item;
        detailsList.appendChild(li);
      });

      var benefitsList = document.getElementById('serviceBenefits');
      data.benefits.forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item;
        benefitsList.appendChild(li);
      });

      var techsContainer = document.getElementById('serviceTechs');
      data.technologies.forEach(function (tech) {
        var span = document.createElement('span');
        span.textContent = tech;
        techsContainer.appendChild(span);
      });
    } else {
      document.getElementById('serviceTitle').textContent = 'Service Not Found';
      document.getElementById('serviceTagline').textContent = 'The requested service could not be found. Please browse our services below.';
      document.getElementById('serviceDescription').textContent = '';
      document.getElementById('serviceDescription').style.display = 'none';
      var detailSections = document.querySelectorAll('.service-detail-main h3, .service-detail-list');
      detailSections.forEach(function (el) { el.style.display = 'none'; });
      var sidebarCards = document.querySelectorAll('.sidebar-card');
      sidebarCards.forEach(function (el) { el.style.display = 'none'; });
    }
  }
})();
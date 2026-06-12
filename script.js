const services = [
  {
    title: "Hair Coloring",
    label: "Signature color",
    price: "$185-$360",
    duration: "2.5-4 hours",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=84",
    description: "Dimensional, glossy color designed around your complexion, maintenance goals, and personal style.",
    process: "Consultation, strand history review, custom formula, bond-building color service, gloss, treatment, and polished finish.",
    results: "Rich shine, softened regrowth, enhanced tone, and a color plan that feels expensive without looking artificial.",
    gallery: [
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=84",
      "https://images.unsplash.com/photo-1560869713-da86a9ec784a?auto=format&fit=crop&w=900&q=84",
      "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=900&q=84"
    ]
  },
  {
    title: "Balayage",
    label: "Hand-painted light",
    price: "$260-$520",
    duration: "3.5-6 hours",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=84",
    description: "Soft, hand-painted brightness with seamless dimension and a lived-in grow-out.",
    process: "Visual mapping, custom light placement, gentle lift, toner, bond repair, haircut refinement, and styling.",
    results: "Sunlit dimension, natural movement, and brightness that stays graceful for months.",
    gallery: [
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=900&q=84",
      "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?auto=format&fit=crop&w=900&q=84",
      "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=900&q=84"
    ]
  },
  {
    title: "Highlights",
    label: "Radiant dimension",
    price: "$210-$430",
    duration: "3-5 hours",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=84",
    description: "Fine, luminous highlights tailored for brightness, contrast, or soft blending.",
    process: "Foil placement strategy, controlled lift, custom toner, gloss, hairline detail, and finishing style.",
    results: "Refined brightness, polished dimension, and a high-shine finish that photographs beautifully.",
    gallery: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=84",
      "https://images.unsplash.com/photo-1554519515-242161756769?auto=format&fit=crop&w=900&q=84",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=84"
    ]
  },
  {
    title: "Hair Extensions",
    label: "Custom length",
    price: "$650-$1,850",
    duration: "2-5 hours",
    image: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&w=900&q=84",
    description: "Seamless volume and length using premium hair, custom color matching, and comfort-led placement.",
    process: "Consultation, shade blend, density plan, installation, precision blending, styling, and care ritual.",
    results: "Natural movement, fuller shape, longer hair, and a result that feels secure and invisible.",
    gallery: [
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=900&q=84",
      "https://images.unsplash.com/photo-1534008757030-27299c4371b6?auto=format&fit=crop&w=900&q=84",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=900&q=84"
    ]
  },
  {
    title: "Hair Treatments",
    label: "Repair ritual",
    price: "$95-$240",
    duration: "60-110 minutes",
    image: "https://images.unsplash.com/photo-1595475884562-073c30d45670?auto=format&fit=crop&w=900&q=84",
    description: "Restorative treatments for strength, hydration, frizz control, scalp comfort, and mirror-like shine.",
    process: "Hair and scalp analysis, clarifying cleanse, targeted treatment, steam infusion, glossing finish, and care plan.",
    results: "Softer texture, stronger strands, reduced frizz, and a healthier foundation for future color.",
    gallery: [
      "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=900&q=84",
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=84",
      "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=900&q=84"
    ]
  },
  {
    title: "Women's Haircut",
    label: "Architectural shape",
    price: "$95-$165",
    duration: "75-100 minutes",
    image: "https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?auto=format&fit=crop&w=900&q=84",
    description: "Modern shaping for movement, balance, and a beautiful grow-out.",
    process: "Lifestyle consultation, dry and wet shaping, detail refinement, styling lesson, and finishing polish.",
    results: "A flattering silhouette, airy movement, and a cut that supports your natural texture.",
    gallery: [
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=84",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=84",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=84"
    ]
  },
  {
    title: "Hair Styling",
    label: "Polished finish",
    price: "$85-$175",
    duration: "60-90 minutes",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=84",
    description: "Editorial waves, smooth finishing, event styling, and elevated everyday polish.",
    process: "Prep, heat protection, shape creation, detail work, soft hold, and finishing shine.",
    results: "Movement that lasts, camera-ready texture, and a finish tailored to your occasion.",
    gallery: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=84",
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=900&q=84",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=84"
    ]
  },
  {
    title: "Bridal Hair",
    label: "Ceremony ready",
    price: "$225-$520",
    duration: "2-4 hours",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=84",
    description: "Romantic, secure, luxury bridal styling for modern ceremonies and full-day wear.",
    process: "Preview session, veil and accessory planning, event-day prep, sculpting, setting, and final photo check.",
    results: "Soft structure, graceful detail, lasting hold, and a look that feels like you at your most refined.",
    gallery: [
      "https://images.unsplash.com/photo-1509610973147-232dfea52a97?auto=format&fit=crop&w=900&q=84",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=84",
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=84"
    ]
  }
];

const projects = [
  {
    title: "Espresso Gloss Renewal",
    label: "Color correction",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=86",
    before: "https://images.unsplash.com/photo-1551727974-8af20a3322f1?auto=format&fit=crop&w=900&q=84",
    after: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=86",
    process: "We softened old warmth, rebuilt shine with bond care, and glazed the hair into a deep espresso brunette.",
    products: "Ammonia-light color, acidic gloss, bond builder, hydrating mask, lightweight shine serum.",
    time: "4.5 hours",
    outcome: "The client wanted polished brunette hair that felt luxurious, healthy, and easy to maintain."
  },
  {
    title: "Champagne Blonde Veil",
    label: "Balayage",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=86",
    before: "https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&w=900&q=84",
    after: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=86",
    process: "Hand-painted ribbons were placed around the face and crown, then toned to a soft champagne finish.",
    products: "Clay lightener, gloss toner, bond sealer, violet shampoo plan, heat protectant.",
    time: "5 hours",
    outcome: "Soft brightness with a refined grow-out and a more luminous frame around the face."
  },
  {
    title: "Luminous Length Edit",
    label: "Extensions",
    image: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&w=900&q=86",
    before: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=900&q=84",
    after: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&w=900&q=86",
    process: "Custom shade blending and hidden placement created natural fullness without compromising comfort.",
    products: "Premium wefts, color-safe gloss, extension brush, silk leave-in, flexible finishing spray.",
    time: "3.5 hours",
    outcome: "Longer, fuller hair that moved naturally and blended with her existing color."
  },
  {
    title: "Soft Copper Return",
    label: "Color transformation",
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=900&q=86",
    before: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?auto=format&fit=crop&w=900&q=84",
    after: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=900&q=86",
    process: "We filled faded ends, restored warmth, and glossed the hair into a muted copper tone.",
    products: "Demi-permanent fill, copper gloss, reparative mask, color-depositing conditioner.",
    time: "3 hours",
    outcome: "A warm, fashion-forward color that still looked soft, expensive, and wearable."
  },
  {
    title: "Bridal Sculpted Wave",
    label: "Event styling",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=86",
    before: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=84",
    after: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=86",
    process: "A structured wave set was brushed into soft movement and secured for all-day ceremony wear.",
    products: "Thermal primer, memory mousse, flexible spray, shine mist, humidity shield.",
    time: "2.5 hours",
    outcome: "Romantic shape, graceful shine, and a secure finish that lasted through the reception."
  }
];

const reviews = [
  ["Avery Monroe", "Hair Coloring", "The color feels custom in a way I have never experienced. It is soft, rich, and somehow makes my skin look brighter."],
  ["Jasmine Patel", "Balayage", "Luna made my blonde look expensive without feeling high-maintenance. The consultation alone was more thoughtful than any appointment I have had."],
  ["Claire Bennett", "Extensions", "My extensions are invisible. Friends keep asking if my hair just suddenly became healthier and longer."],
  ["Mina Rodriguez", "Women's Haircut", "Maya gave me a shape that air-dries beautifully. I finally understand what a luxury haircut feels like."],
  ["Tessa Nguyen", "Highlights", "The brightness is delicate, not stripey. I left feeling polished and completely confident."],
  ["Lauren Kim", "Hair Treatments", "My hair was dry from years of heat styling. One treatment made it feel softer, shinier, and stronger."],
  ["Camille Brooks", "Bridal Hair", "My wedding hair stayed perfect for ten hours and still looked romantic, never stiff."],
  ["Priya Shah", "Color Correction", "They fixed my uneven color without rushing the process. The result looks intentional and healthy."],
  ["Morgan Ellis", "Hair Styling", "The waves were editorial but wearable. I booked again before I even left the studio."],
  ["Natalie Ford", "Consultation", "I felt heard, not sold to. The plan was realistic, beautiful, and clearly built around my hair health."]
];

const serviceGrid = document.querySelector("#serviceGrid");
const projectGrid = document.querySelector("#projectGrid");
const reviewTrack = document.querySelector("#reviewTrack");
const modal = document.querySelector("#modal");
const modalBody = document.querySelector("#modalBody");
const modalClose = document.querySelector(".modal-close");

window.addEventListener("load", () => {
  setTimeout(() => document.querySelector(".loader").classList.add("is-hidden"), 650);
});

services.forEach((service, index) => {
  const card = document.createElement("article");
  card.className = "service-card reveal";
  card.tabIndex = 0;
  card.innerHTML = `
    <img src="${service.image}" alt="${service.title} at Luna Hair Studio">
    <div>
      <span>${service.label}</span>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <footer><small>${service.duration}</small><small>${service.price}</small></footer>
    </div>
  `;
  card.addEventListener("click", () => openService(service));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter") openService(service);
  });
  serviceGrid.appendChild(card);
  card.style.transitionDelay = `${index * 55}ms`;
});

projects.forEach((project, index) => {
  const card = document.createElement("article");
  card.className = "project-card reveal";
  card.tabIndex = 0;
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title} transformation">
    <div>
      <span>${project.label}</span>
      <h3>${project.title}</h3>
      <p>${project.outcome}</p>
      <footer><small>${project.time}</small><small>View story</small></footer>
    </div>
  `;
  card.addEventListener("click", () => openProject(project));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter") openProject(project);
  });
  projectGrid.appendChild(card);
  card.style.transitionDelay = `${index * 70}ms`;
});

reviews.forEach(([name, service, text]) => {
  const initials = name.split(" ").map(part => part[0]).join("");
  const card = document.createElement("article");
  card.className = "review-card reveal";
  card.innerHTML = `
    <div class="stars" aria-label="Five star rating">★★★★★</div>
    <div class="review-person">
      <div class="avatar" aria-hidden="true">${initials}</div>
      <div><strong>${name}</strong><span>Seattle client</span></div>
    </div>
    <p>“${text}”</p>
    <strong class="review-service">${service}</strong>
  `;
  reviewTrack.appendChild(card);
});

function openService(service) {
  modalBody.innerHTML = `
    <div class="modal-hero">
      <img src="${service.image}" alt="${service.title}">
      <div class="modal-copy">
        <p class="eyebrow">${service.label}</p>
        <h2>${service.title}</h2>
        <p>${service.description}</p>
        <p><strong>Duration:</strong> ${service.duration}</p>
        <p><strong>Pricing:</strong> ${service.price}</p>
      </div>
    </div>
    <div class="detail-grid">
      <div class="detail-item"><strong>Process</strong><p>${service.process}</p></div>
      <div class="detail-item"><strong>Expected Results</strong><p>${service.results}</p></div>
    </div>
    <div class="modal-gallery">
      ${service.gallery.map(src => `<img src="${src}" alt="${service.title} gallery image">`).join("")}
    </div>
  `;
  openModal();
}

function openProject(project) {
  modalBody.innerHTML = `
    <div class="before-after">
      <div class="ba-panel"><img src="${project.before}" alt="${project.title} before"><span>Before</span></div>
      <div class="ba-panel"><img src="${project.after}" alt="${project.title} after"><span>After</span></div>
    </div>
    <div class="modal-copy">
      <p class="eyebrow">${project.label}</p>
      <h2>${project.title}</h2>
      <p>${project.outcome}</p>
    </div>
    <div class="detail-grid">
      <div class="detail-item"><strong>Process</strong><p>${project.process}</p></div>
      <div class="detail-item"><strong>Products Used</strong><p>${project.products}</p></div>
      <div class="detail-item"><strong>Time Spent</strong><p>${project.time}</p></div>
      <div class="detail-item"><strong>Customer Outcome</strong><p>${project.outcome}</p></div>
    </div>
  `;
  openModal();
}

function openModal() {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 42);
});

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      if (entry.target.classList.contains("metric")) animateMetric(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll(".reveal, .metric").forEach(element => observer.observe(element));

function animateMetric(metric) {
  const number = metric.querySelector("[data-count]");
  const target = Number(number.dataset.count);
  const duration = 1500;
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(eased * target);
    number.textContent = target >= 100 ? `${value}+` : value;
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

document.querySelector(".contact-form").addEventListener("submit", event => {
  event.preventDefault();
  const note = event.currentTarget.querySelector(".form-note");
  note.textContent = "Thank you. A Luna concierge will reply within one business day.";
  event.currentTarget.reset();
});

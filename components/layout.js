(function () {
  const header = `
    <header class="topbar">
      <div class="nav-container">
        <a class="brand" href="index.html#home" aria-label="Water Filter Africa home">
          <img src="images/bg remove ogo.png" alt="Water Filter Africa logo" />
          <span>Water Filter Africa<small>Joshi Ion Exchange Ltd.</small></span>
        </a>
        <button class="mobile-menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav class="nav-links" aria-label="Primary">
          <a href="index.html#home">Home</a>
          <a href="about.html">About</a>
          <a href="product.html">Product</a>
          <a href="contact.html">Contact</a>
        </nav>
        <a class="nav-cta" href="contact.html#enquiry">Request Consultation</a>
      </div>
    </header>
  `;

  const footer = `
    <footer id="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="brand" style="margin-bottom:12px;">
              <img src="images/bg remove ogo.png" alt="Water Filter Africa logo" />
              <span>Water Filter Africa<small>Joshi Ion Exchange Ltd.</small></span>
            </div>
            <p>Advanced water filtration, purification, conditioning and treatment solutions for residential, agricultural, commercial and industrial applications across Africa.</p>
            <div class="socials" aria-label="Social links">
              <span>f</span><span>ig</span><span>in</span><span>yt</span><span>x</span>
            </div>
          </div>
          <div>
            <h4>Products</h4>
            <a href="category.html?slug=industrial-water-filtration">Industrial Water Filtration</a>
            <a href="category.html?slug=agriculture-farming-water-filtration">Agriculture Water Filtration</a>
            <a href="category.html?slug=animal-farming-water-filtration">Livestock Water Filtration</a>
            <a href="category.html?slug=commercial-water-filters">Commercial Water Filters</a>
            <a href="category.html?slug=domestic-water-filtration-system">Domestic Water Filtration</a>
          </div>
          <div>
            <h4>Information</h4>
            <a href="about.html">About Us</a>
            <a href="index.html#applications">Industries</a>
            <a href="contact.html">Contact Us</a>
          </div>
          <div>
            <h4>Contact</h4>
            <p><strong>Joshi Ion Exchange Ltd.</strong></p>
            <p>P.O Box 32014,<br/>Lusaka, Zambia, Africa</p>
            <p><a href="tel:+260969113323" style="color:inherit; text-decoration:none;">+260969113323</a></p>
            <p><a href="mailto:office@waterfilterafrica.com" style="color:inherit; text-decoration:none;">office@waterfilterafrica.com</a></p>
            <p><a href="mailto:joshiionexchangeltd@gmail.com" style="color:inherit; text-decoration:none;">joshiionexchangeltd@gmail.com</a></p>
          </div>
        </div>
        <div class="copyright">© 2026 Water Filter Africa. All Rights Reserved.</div>
      </div>
    </footer>
  `;

  const mount = (selector, markup) => {
    const target = document.querySelector(selector);
    if (target) target.outerHTML = markup;
  };

  mount("[data-layout-header]", header);
  mount("[data-layout-footer]", footer);

  const topbar = document.querySelector(".topbar");
  const toggle = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const setMenu = (open) => {
    if (!topbar || !toggle) return;
    topbar.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
  };

  if (toggle) {
    toggle.addEventListener("click", () => setMenu(!topbar.classList.contains("menu-open")));
  }

  if (navLinks) {
    navLinks.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMenu(false);
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });
})();

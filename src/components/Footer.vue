<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__brand">
        <p class="footer__logo" aria-label="Gauss Dev">Gauss Dev</p>
        <p class="footer__tagline">Building the future, one solution at a time.</p>
      </div>

      <div class="footer__links">
        <router-link to="/">Home</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/privacy">Privacy</router-link>
      </div>

      <div class="footer__contact">
        <a href="mailto:devshilov@gmail.com">devshilov@gmail.com</a>
        <a href="tel:+998940603405" aria-label="Phone, Uzbekistan">+998 (94) 060-3405</a>
        <a href="tel:+14153584559" aria-label="Phone, United States">+1 (415) 358-4559</a>
      </div>
    </div>

    <div class="footer__bottom">
      <p>&copy; 2026 Gauss Dev. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer {
  background: var(--surface);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: clamp(2.5rem, 6vw, 3.5rem) clamp(1.5rem, 5vw, 4rem) 1.5rem;
  color: var(--muted);
}

.footer__inner {
  max-width: 1320px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: clamp(1.5rem, 4vw, 2.5rem);
  align-items: start;
}

.footer__logo {
  font-size: 1.2rem;
  font-weight: 800;
  color: #fff;
  margin: 0 0 0.35rem;
  letter-spacing: -0.02em;
}

.footer__tagline {
  font-size: 0.88rem;
  color: var(--muted);
  margin: 0;
  line-height: 1.5;
}

.footer__links {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.footer__links a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 600;
  transition: color 0.2s ease;
}

.footer__links a:hover {
  color: #f0f0f0;
}

.footer__contact {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  text-align: right;
}

.footer__contact a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.88rem;
  transition: color 0.2s ease;
}

.footer__contact a:hover {
  color: #f0f0f0;
}

.footer__bottom {
  max-width: 1320px;
  margin: clamp(1.5rem, 4vw, 2rem) auto 0;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  text-align: center;
  font-size: 0.78rem;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.35);
}

@media (max-width: 768px) {
  .footer__inner {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1.5rem;
  }

  .footer__contact {
    text-align: center;
  }
}
</style>

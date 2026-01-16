<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-brand">
        <h2 class="footer-logo">Gauss Dev</h2>
        <p class="footer-tagline">Building the Future, One Solution at a Time</p>
      </div>
      <div class="footer-contact">
        <p>
          Email:
          <a href="mailto:devshilov@gmail.com" class="contact-link">devshilov@gmail.com</a>
        </p>
        <p>Phone: <a href="tel:+998 940603405" class="contact-link">+998 (94) 064-3405</a></p>
      </div>
    </div>
    <p class="footer-copyright">&copy; 2026 Gauss Dev. All rights reserved.</p>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer {
  background-color: #000000;
  color: white;
  padding: 2rem 1rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-brand {
  flex: 1;
}

.footer-logo {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #faeb92;
}

.footer-tagline {
  font-size: 1rem;
  color: #faeb92;
}

.footer-contact {
  flex: 1;
  color: #faeb92;
  text-align: right;
}

.contact-link {
  color: rgb(204, 102, 218);
  text-decoration: none;
}

.contact-link:hover {
  text-decoration: underline;
}

.footer-copyright {
  text-align: center;
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #d1d5db;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .footer-contact {
    text-align: center;
  }
}
</style>

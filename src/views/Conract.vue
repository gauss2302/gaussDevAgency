<template>
  <div class="contact-section">
    <h2 class="section-title">Contact Us</h2>
    <div class="main-section">
      <div>
        <img src="/assets/sit2.png" width="422" height="422" />
      </div>
      <div class="contact-form">
        <div class="form-group field">
          <label class="form-label" for="name">Name</label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            class="form-input"
            placeholder="Your name"
          />
        </div>

        <div class="form-group field">
          <label class="form-label" for="email">Email</label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            class="form-input"
            placeholder="you@company.com"
          />
        </div>

        <div class="form-group field">
          <label class="form-label" for="message">Message</label>
          <textarea
            v-model="form.message"
            id="message"
            class="form-textarea"
            rows="4"
            placeholder="Tell us about your project"
          ></textarea>
        </div>

        <!-- <div class="form-group field">
          <label class="form-label" for="message">Message</label>
          <input
            v-model="honeypot"
            type="text"
            autocomplete="off"
            tabindex="-1"
            aria-hidden="true"
            style="position: absolute; left: -9999px; opacity: 0; width: 1px; height: 1px"
          />
        </div> -->

        <button @click="submitForm" class="cta-button" :disabled="loading">
          {{ loading ? 'Sending…' : 'Send' }}
        </button>

        <p v-if="success" style="color: #59e390; margin-top: 0.5rem">{{ success }}</p>
        <p v-if="errorMsg" style="color: #ff7a7a; margin-top: 0.5rem">{{ errorMsg }}</p>

        <!-- Соц.ссылки -->
        <div class="contact-socials" aria-label="Social contacts">
          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/company/104642717/"
            target="_blank"
            rel="noopener"
            class="icon-btn"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" class="icon">
              <path
                fill="currentColor"
                d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 8.98h3.96V21H3zM9.48 8.98H13v1.64h.06c.49-.93 1.69-1.91 3.48-1.91 3.72 0 4.41 2.45 4.41 5.63V21H17V14.6c0-1.53-.03-3.49-2.13-3.49-2.13 0-2.46 1.66-2.46 3.38V21H9.48z"
              />
            </svg>
          </a>
          <!-- Gmail (почта) -->
          <a href="mailto:hello@your-agency.com" class="icon-btn" aria-label="Email">
            <svg viewBox="0 0 24 24" class="icon">
              <path
                fill="currentColor"
                d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5z"
              />
            </svg>
          </a>
          <!-- Telegram -->
          <a
            href="https://t.me/nick230296"
            target="_blank"
            rel="noopener"
            class="icon-btn"
            aria-label="Telegram"
          >
            <svg viewBox="0 0 24 24" class="icon">
              <path
                fill="currentColor"
                d="M9.03 15.88 8.9 18.6a1 1 0 0 0 1.6.84l2.32-1.7 3.6 2.65c.66.49 1.6.12 1.78-.68l3.03-13.6a1 1 0 0 0-1.36-1.14L2.6 10.2a1 1 0 0 0 .03 1.84l4.93 1.89 9.12-7.23-7.65 8.18z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

interface FormData {
  name: string
  email: string
  message: string
}
const form = reactive<FormData>({ name: '', email: '', message: '' })

const loading = ref(false)
const success = ref<string | null>(null)
const errorMsg = ref<string | null>(null)
const startedAt = ref<number>(Date.now())
const honeypot = ref('')

const submitForm = async () => {
  if (!form.name || !form.email || !form.message) return

  loading.value = true
  success.value = null
  errorMsg.value = null

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
        honeypot: '', // keep empty
        startedAt: Date.now(),
      }),
    })

    // Try to parse JSON only if response is JSON and not empty
    let data: any = null
    const ct = res.headers.get('content-type') || ''
    if (ct.includes('application/json')) {
      // may still be empty for some misconfigured routes; guard it
      const text = await res.text()
      data = text ? JSON.parse(text) : null
    } else {
      // not JSON (e.g. 404 HTML) — read text for debugging
      data = { raw: await res.text() }
    }

    if (!res.ok || (data && data.ok === false)) {
      const msg = data?.error || `Request failed (${res.status})`
      throw new Error(msg)
    }

    success.value = 'Thanks! We’ll get back to you shortly.'
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (e: any) {
    errorMsg.value = e?.message ?? 'Unexpected error'
  } finally {
    loading.value = false
  }
}
</script>
<style scoped>
/* Делаем секцию самостоятельной по цветам и слоям */
.contact-section {
  /* Токены локально для секции (не зависит от :root и scoped) */
  --ink: #faeb92;
  --muted: #c9c9c9;
  --stroke: rgba(255, 255, 255, 0.12);
  --accent-grad: linear-gradient(90deg, #9929ea, #cc66da);

  position: relative;
  isolation: isolate; /* свой слой, чтобы чужие псевдоэлементы не перекрывали */
  z-index: 5; /* поверх фоновых before/after предыдущих секций */
  color: var(--ink); /* базовый цвет текста внутри секции */
  background: transparent; /* на всякий случай: без плотного фона */
  padding: 2rem 0;
}

/* Грид и картинка — без изменений */
.main-section {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 2rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
.main-section > div:first-child {
  justify-self: center;
}
.main-section img {
  width: 100%;
  max-width: 560px;
  height: auto;
  display: block;
  border-radius: 1rem;
  object-fit: cover;
}

/* Заголовок секции — светлый, чтобы не «терялся» на тёмном фоне */
.section-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--ink);
}

/* Карточка формы — полупрозрачный тёмный блок */
.contact-form {
  max-width: 520px;
  width: 100%;
  margin: 0;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--stroke);
  border-radius: 1rem;
  padding: 1.25rem;
  backdrop-filter: blur(4px);
}

/* Подписи — читаемые */
.form-label {
  display: block;
  color: var(--muted);
  margin: 0 0 0.4rem 0.25rem;
  font-size: 0.9rem;
}

/* Поля: явные фон/текст, чтобы не зависеть от наследования */
.form-input,
.form-textarea {
  all: unset;
  box-sizing: border-box;
  width: 100%;
  background: #0f0f12; /* тёмный фон поля */
  color: var(--ink); /* светлый текст */
  border-radius: 0.7rem;
  padding: 0.8rem 0.9rem;
  border: 1px solid transparent;
  outline: none;
}
.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(250, 235, 146, 0.55);
}
.form-textarea {
  resize: vertical;
  min-height: 132px;
}

/* Градиентная рамка при фокусе — только по желанию */
.field {
  position: relative;
  border-radius: 0.75rem;
  padding: 1px;
  background: transparent;
  transition: background 0.25s ease;
  margin-bottom: 1rem;
}
.field:focus-within {
  background: var(--accent-grad);
}
.field:focus-within .form-input,
.field:focus-within .form-textarea {
  background: #0f0f12;
}

/* Кнопка — контрастная */
.cta-button {
  display: inline-block;
  width: 100%;
  background: var(--accent-grad);
  color: #0b0b0f;
  font-weight: 800;
  padding: 0.9rem 1.2rem;
  border: 0;
  border-radius: 0.9rem;
  cursor: pointer;
  box-shadow: 0 12px 30px rgba(153, 41, 234, 0.25);
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    opacity 0.15s ease;
}
.cta-button:hover {
  transform: translateY(-1px);
}
.cta-button:active {
  transform: translateY(0);
  opacity: 0.92;
}

/* Соц-иконки */
.contact-socials {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin-top: 1rem;
}
.icon-btn {
  display: inline-grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 0.75rem;
  color: var(--ink);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--stroke);
  text-decoration: none;
  transition:
    transform 0.15s ease,
    background 0.2s ease,
    color 0.2s ease;
}
.icon-btn:hover {
  background: var(--accent-grad);
  color: #0b0b0f;
  transform: translateY(-1px);
}
.icon {
  width: 22px;
  height: 22px;
}

/* Адаптив */
@media (max-width: 1024px) {
  .main-section {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  .contact-form {
    max-width: 100%;
    padding: 1rem;
  }
  .icon-btn {
    width: 40px;
    height: 40px;
    border-radius: 0.65rem;
  }
}
</style>

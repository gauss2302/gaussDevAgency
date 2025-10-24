<template>
  <section class="about-binary">
    <h2 class="about-title">About — Our Story in a Tree</h2>

    <!-- Binary tree -->
    <ul class="tree" data-level="0">
      <!-- ROOT -->
      <li>
        <div class="node">
          <img class="node-img" src="/assets/mobile.png" alt="Founder" />
          <h3 class="node-title">Founder’s Vision</h3>
          <p class="node-text">
            From day one, we believed software should anticipate tomorrow. Small team, bold mission.
          </p>
        </div>

        <!-- LEVEL 1 -->
        <ul data-level="1">
          <li>
            <div class="node">
              <img class="node-img" src="/assets/mobile.png" alt="Vision & Principles" />
              <h4 class="node-title">Principles</h4>
              <p class="node-text">Clarity, reliability, and measurable impact over hype.</p>
            </div>

            <!-- LEVEL 2 (left subtree) -->
            <ul data-level="2">
              <li>
                <div class="node">
                  <img class="node-img" src="/assets/mobile.png" alt="Innovation" />
                  <h5 class="node-title">Innovation</h5>
                  <p class="node-text">AI/ML where it matters: real use-cases, real ROI.</p>
                </div>
              </li>
              <li>
                <div class="node">
                  <img class="node-img" src="/assets/mobile.png" alt="Engineering Craft" />
                  <h5 class="node-title">Craft</h5>
                  <p class="node-text">Type-safe stacks, clean architecture, testability.</p>
                </div>
              </li>
            </ul>
          </li>

          <li>
            <div class="node">
              <img class="node-img" src="/assets/mobile.png" alt="First Clients" />
              <h4 class="node-title">First Clients</h4>
              <p class="node-text">Early partners who trusted us with their hardest problems.</p>
            </div>

            <!-- LEVEL 2 (right subtree) -->
            <ul data-level="3">
              <li>
                <div class="node">
                  <img class="node-img" src="/assets/mobile.png" alt="Team" />
                  <h5 class="node-title">Team</h5>
                  <p class="node-text">Designers + engineers work alongside</p>
                </div>
              </li>
              <li>
                <div class="node">
                  <img class="node-img" src="/assets/mobile.png" alt="Community" />
                  <h5 class="node-title">Community</h5>
                  <p class="node-text">Open knowledge and responsible tech.</p>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
// No JS needed. Images are small & lazy by default via browser heuristics.
// Replace the /assets/*.jpg with your actual small thumbnails (webp/jpg).
</script>

<style scoped>
.about-binary {
  --ink: #faeb92;
  --muted: #c9c9c9;
  --stroke: rgba(255, 255, 255, 0.12);
  --card: rgba(255, 255, 255, 0.04);
  --accent: linear-gradient(90deg, #9929ea, #cc66da);

  background: #000;
  color: var(--ink);
  padding: 3rem 1rem 4rem;
  position: relative;
  isolation: isolate;
}

.about-title {
  text-align: center;
  font-weight: 800;
  font-size: clamp(1.8rem, 3.2vw, 2.6rem);
  margin-bottom: 2.5rem;
}

/* TREE: ul/li pattern with connector lines */
.tree,
.tree ul {
  padding-top: 1.5rem; /* vertical spacing between levels */
  position: relative;
  padding-left: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: clamp(1rem, 3vw, 3rem);
}

.tree ul {
  /* children row */
}

.tree li {
  list-style-type: none;
  text-align: center;
  position: relative;
  padding: 1.5rem 0 0 0;
}

/* Connectors: draw lines from parent to children */
.tree li::before,
.tree li::after {
  content: '';
  position: absolute;
  top: 0; /* start at top of each child node block */
  width: 50%;
  height: 1.5rem;
  border-top: 1px solid var(--stroke);
}

.tree li::before {
  right: 50%;
  border-right: 1px solid var(--stroke);
  border-top-left-radius: 10px;
}

.tree li::after {
  left: 50%;
  border-left: 1px solid var(--stroke);
  border-top-right-radius: 10px;
}

/* Remove half-lines on single children */
.tree li:only-child::before,
.tree li:only-child::after {
  display: none;
}
.tree li:only-child {
  padding-top: 0;
}

/* Connect upwards line from node to parent’s connector */
.tree li > .node::before {
  content: '';
  position: absolute;
  top: -1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 1.5rem;
  border-left: 1px solid var(--stroke);
}

/* Root node does not need the vertical line up */
.tree > li > .node::before {
  display: none;
}

/* NODE CARD */
.node {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.85rem 1rem;
  align-items: center;
  text-align: left;

  min-width: 250px;
  max-width: 360px;
  margin: 0 auto;

  background: var(--card);
  border: 1px solid var(--stroke);
  border-radius: 1rem;
  padding: 0.85rem 1rem;

  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
}

/* small image (not big) */
.node-img {
  grid-row: span 2;
  width: 56px;
  height: 56px;
  border-radius: 10px;
  object-fit: cover;
  display: block;
}

/* Titles and text */
.node-title {
  margin: 0;
  font-weight: 800;
  font-size: 1rem;
  line-height: 1.2;
  color: var(--ink);
}
.node-text {
  margin: 0;
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.5;
}

/* Subtle hover */
.node:hover {
  outline: 1px solid transparent;
  background:
    linear-gradient(#0c0c10, #0c0c10) padding-box,
    var(--accent) border-box;
  border: 1px solid transparent;
  transform: translateY(-2px);
  transition:
    transform 0.2s ease,
    background 0.25s ease;
}

/* Responsiveness */
@media (max-width: 1024px) {
  .tree,
  .tree ul {
    gap: 1.25rem;
  }
  .node {
    min-width: 230px;
  }
}

@media (max-width: 640px) {
  /* On small screens stack each level vertically, keep connectors simple */
  .tree,
  .tree ul {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
  }
  .tree li::before,
  .tree li::after {
    width: 0.75rem;
  }
}

/* === Progressive reveal on load (no JS) === */
.about-binary {
  --ink: #faeb92;
  --muted: #c9c9c9;
  --stroke: rgba(255, 255, 255, 0.12);
  --card: rgba(255, 255, 255, 0.04);
  --accent: linear-gradient(90deg, #9929ea, #cc66da);

  /* тайминги для ступенчатого появления */
  --stagger: 90ms; /* шаг внутри уровня (соседи) */
  --level-gap: 240ms; /* задержка между уровнями дерева */
}

/* стартовые состояния */
.tree li::before,
.tree li::after,
.tree li > .node::before {
  transform-origin: center;
  transform: scaleX(0);
  opacity: 0;
}

.tree li > .node::before {
  transform-origin: top;
  transform: scaleY(0);
}

/* линии "рисуются" */
@keyframes draw-h {
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  100% {
    transform: scaleX(1);
    opacity: 1;
  }
}
@keyframes draw-v {
  0% {
    transform: scaleY(0);
    opacity: 0;
  }
  100% {
    transform: scaleY(1);
    opacity: 1;
  }
}

/* карточки всплывают изнутри */
@keyframes pop-in {
  0% {
    opacity: 0;
    transform: translateY(8px) scale(0.98);
    filter: blur(2px);
  }
  60% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

/* применяем анимации с задержками по уровню и порядку */
.tree [data-level] > li {
  /* линии к соседям (верхняя «скобка») */
}
.tree [data-level] > li::before,
.tree [data-level] > li::after {
  animation: draw-h 520ms cubic-bezier(0.2, 0.65, 0.2, 1) forwards;
}
.tree [data-level] > li > .node::before {
  animation: draw-v 520ms cubic-bezier(0.2, 0.65, 0.2, 1) forwards;
}

.tree [data-level] > li > .node {
  opacity: 0;
  animation: pop-in 520ms cubic-bezier(0.2, 0.65, 0.2, 1) forwards;
}

/* считаем задержку: уровень * level-gap + порядковый * stagger */
:root {
  counter-reset: reveal;
}

/* helper: функция задержки через nth-child — расширяй по необходимости */
@media (min-width: 0) {
  /* level 0 (root) */
  .tree[data-level='0'] > li > .node,
  .tree[data-level='0'] > li::before,
  .tree[data-level='0'] > li::after,
  .tree[data-level='0'] > li > .node::before {
    animation-delay: calc(0 * var(--level-gap));
  }

  /* level 1 */
  .tree [data-level='1'] > li:nth-child(1) > .node,
  .tree [data-level='1'] > li:nth-child(1)::before,
  .tree [data-level='1'] > li:nth-child(1)::after,
  .tree [data-level='1'] > li:nth-child(1) > .node::before {
    animation-delay: calc(1 * var(--level-gap) + 0 * var(--stagger));
  }
  .tree [data-level='1'] > li:nth-child(2) > .node,
  .tree [data-level='1'] > li:nth-child(2)::before,
  .tree [data-level='1'] > li:nth-child(2)::after,
  .tree [data-level='1'] > li:nth-child(2) > .node::before {
    animation-delay: calc(1 * var(--level-gap) + 1 * var(--stagger));
  }

  /* level 2 (поддеревья) */
  .tree [data-level='2'] > li:nth-child(1) > .node,
  .tree [data-level='2'] > li:nth-child(1)::before,
  .tree [data-level='2'] > li:nth-child(1)::after,
  .tree [data-level='2'] > li:nth-child(1) > .node::before {
    animation-delay: calc(2 * var(--level-gap) + 0 * var(--stagger));
  }
  .tree [data-level='2'] > li:nth-child(2) > .node,
  .tree [data-level='2'] > li:nth-child(2)::before,
  .tree [data-level='2'] > li:nth-child(2)::after,
  .tree [data-level='2'] > li:nth-child(2) > .node::before {
    animation-delay: calc(2 * var(--level-gap) + 1 * var(--stagger));
  }
}

/* превращаем границы в «рисуемые» линии (нужно для анимации scale) */
.tree li::before,
.tree li::after {
  transform: scaleX(0);
  transform-origin: center;
}
.tree li > .node::before {
  transform: scaleY(0);
  transform-origin: top;
}

/* уважение к reduce-motion: всё сразу видно, без движения */
@media (prefers-reduced-motion: reduce) {
  .tree li::before,
  .tree li::after,
  .tree li > .node::before,
  .tree [data-level] > li > .node {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
    filter: none !important;
  }
}
</style>

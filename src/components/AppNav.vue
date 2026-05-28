<template>
  <nav>
    <a href="#hero" class="nav-logo">
      <img src="@/assets/Wolfree-nbg.png" alt="WOLFREE logo" class="nav-logo-image">
      <img src="@/assets/WOLFREE.png" alt="WOLFREE" class="nav-logo-text">
    </a>
    <ul class="nav-links">
      <li><a href="#taniere">La Tanière</a></li>
      <li><a href="#bio">Biographie</a></li>
      <li><a href="#sets">DJ Sets</a></li>
      <li><a href="#dates">Dates</a></li>
      <li><a href="#styles">Styles</a></li>
      <li><a href="#meute">La Meute</a></li>
      <li><a href="#contact" class="nav-cta">Booking</a></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0; width: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 4rem;
  background: rgba(3,1,10,0.88);
  backdrop-filter: blur(22px);
  border-bottom: 1px solid var(--border);
}
.nav-logo {
  display: flex; align-items: center; gap: 12px;
  text-decoration: none;
}
.nav-logo-image {
  width: 38px; height: 38px; object-fit: contain;
}
.nav-logo-text {
  height: 20px;
  width: auto;
  display: block;
}
.nav-links { display: flex; gap: 2.5rem; list-style: none; }
.nav-links a {
  color: var(--text-dim);
  text-decoration: none;
  font-size: 0.85rem; letter-spacing: 0.2em;
  text-transform: uppercase; font-weight: 600;
  transition: color 0.3s;
}
.nav-links a:hover { color: var(--cyan); }
.nav-cta {
  background: transparent !important;
  border: 1px solid var(--violet);
  color: var(--violet) !important;
  padding: 0.4rem 1.2rem;
  border-radius: 2px;
  transition: all 0.3s !important;
}
.nav-cta:hover { background: var(--violet) !important; color: #fff !important; }

@media (max-width: 768px) {
  nav { padding: 1rem 1.5rem; }
  .nav-links { display: none; }
}
</style>

<template>
  <footer>
    <span class="footer-logo">WOLFREE</span>
    <p class="footer-copy">© 2026 WOLFREE · Tous droits réservés · Toulouse</p>
    <div class="footer-links">
      <a href="https://www.youtube.com/@wolfree95" target="_blank">YouTube</a>
      <a href="https://soundcloud.com/wolfree99" target="_blank">SoundCloud</a>
      <a href="https://www.instagram.com/wolfree__/" target="_blank">Instagram</a>
      <a href="https://open.spotify.com/user/31ljnjvosjpjbn65bp2wsywk2l3e" target="_blank">Spotify</a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 3rem 4rem;
  border-top: 1px solid var(--border);
  display: flex; justify-content: space-between;
  align-items: center; flex-wrap: wrap; gap: 1rem;
}
.footer-logo {
  background: var(--grad);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text; font-size: 1rem;
  font-weight: 700; letter-spacing: 0.35em;
}
.footer-copy { font-size: 0.85rem; color: var(--text-dim); letter-spacing: 0.1em; }
.footer-links { display: flex; gap: 1.5rem; }
.footer-links a {
  color: rgba(232,224,255,0.3); text-decoration: none;
  font-size: 0.85rem; letter-spacing: 0.15em;
  text-transform: uppercase; transition: color 0.3s;
}
.footer-links a:hover { color: var(--cyan); }
</style>

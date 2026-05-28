<template>
  <section id="dates">

    <div class="dot-texture">
      <svg viewBox="0 0 1440 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="dotFadeDates" cx="90%" cy="20%" r="45%">
            <stop offset="0%" stop-color="#d600ff" stop-opacity="0.15"/>
            <stop offset="70%" stop-color="#d600ff" stop-opacity="0.04"/>
            <stop offset="100%" stop-color="#d600ff" stop-opacity="0"/>
          </radialGradient>
          <pattern id="dotsDates" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="13" cy="13" r="1.3" fill="url(#dotFadeDates)"/>
          </pattern>
        </defs>
        <rect width="1440" height="500" fill="url(#dotsDates)"/>
      </svg>
    </div>

    <p class="section-label">Agenda</p>
    <h2 class="section-title">Dates <span class="grad-text">&amp; Lives</span></h2>

    <div class="dates-list">
      <!-- Prochaines dates -->
      <p class="section-label" style="margin-top: 2rem;">Prochaines dates</p>

      <!-- Dates à venir -->
      <div v-for="date in upcomingDates" :key="date.id" class="date-item">
        <div>
          <div class="date-num">{{ date.day }}</div>
          <div class="date-month">{{ date.month }}</div>
        </div>
        <div class="date-info">
          <p class="date-venue">{{ date.venue }}</p>
          <p class="date-city">{{ date.city }}</p>
          <p class="date-style">{{ date.style }}</p>
        </div>
        <span class="date-type" :class="{ 'date-upcoming': date.upcoming }">
          {{ date.upcoming ? 'À venir' : 'Passé' }}
        </span>
      </div>

      <!-- Message si aucune date à venir -->
      <div v-if="!upcomingDates.length" class="no-dates">
        <p class="no-dates-text">
          Aucune date confirmée pour le moment.<br>
          Pour proposer une date ou un booking, utilise le formulaire ci-dessous.
        </p>
      </div>

      <!-- Dates passées -->
      <p class="section-label" style="margin-top: 2rem;">Dates passées</p>

      <div v-for="date in visiblePastDates" :key="date.id" class="date-item">
        <div>
          <div class="date-num">{{ date.day }}</div>
          <div class="date-month">{{ date.month }}</div>
        </div>
        <div class="date-info">
          <p class="date-venue">{{ date.venue }}</p>
          <p class="date-city">{{ date.city }}</p>
          <p class="date-style">{{ date.style }}</p>
        </div>
        <span class="date-type" :class="{ 'date-upcoming': date.upcoming }">
          {{ date.upcoming ? 'À venir' : 'Passé' }}
        </span>
      </div>

      <button
        v-if="hasMorePastDates"
        type="button"
        class="see-more-btn"
        @click="togglePastDates"
      >
        {{ showAllPastDates ? 'Voir moins' : 'Voir plus' }}
      </button>

      <!-- Message si aucune date passée -->
      <div v-if="!pastDates.length" class="no-dates">
        <p class="no-dates-text">
          Aucune date confirmée pour le moment.<br>
          Pour proposer une date ou un booking, utilise le formulaire ci-dessous.
        </p>
      </div>
    </div>

  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const dates = [
  {
    id: 1, day: '17', month: 'Mai 2025',
    venue: 'Event @UnknownProject',
    city: 'Coloc · Toulouse · 19h00 – 20h00',
    style: 'Drum & Bass', upcoming: false,
  },
  {
    id: 2, day: '28', month: 'Juin 2025',
    venue: 'Summer party @UnknownProject',
    city: 'Coloc · Toulouse · 20h00 – 21h00',
    style: 'Bounce → Drum & Bass → Hard Techno', upcoming: false,
  },
  {
    id: 3, day: '12', month: 'Juil. 2025',
    venue: 'Sheep flip - Okoume maggle',
    city: 'Festival Privé · Dordogne · 22h00 – 23h00 | 05h00 – 06h00',
    style: 'Drum & Bass | Hard Techno', upcoming: false,
  },
  {
    id: 4, day: '13', month: 'Sept. 2025',
    venue: 'Event @UnknownProject',
    city: 'Coloc · Toulouse · 20h00 – 21h00',
    style: 'Psytrance', upcoming: false,
  },
  {
    id: 5, day: '7', month: 'Nov. 2025',
    venue: 'Soirée d\'intégration - BDE (ESD)',
    city: 'Le Rhino · Toulouse · 23h30 – 01h00',
    style: 'Hard Techno', upcoming: false,
  },
  {
    id: 6, day: '5', month: 'Fév. 2026',
    venue: 'Digital event - ESD',
    city: 'Live Twitch · Toulouse · 21h00 – 21h30 | 22h30 – 23h00',
    style: 'Bounce → Hard Techno', upcoming: false,
  },
  {
    id: 7, day: '24', month: 'Mars 2026',
    venue: 'Little O\'Clock',
    city: 'Open Platines · Toulouse · 20h45 – 21h30',
    style: 'Bounce → Hard Techno', upcoming: false,
  },
  {
    id: 8, day: '30', month: 'Avril 2026',
    venue: 'La Station',
    city: 'Rave Lucide · Toulouse · 22h00 – 23h00',
    style: 'Bounce → Hard Bounce', upcoming: false,
  },
  {
    id: 9, day: '30', month: 'Juin 2026',
    venue: 'Downtown Factory',
    city: '@major.a.a.a · Toulouse · 01h00 – 02h00',
    style: 'Hard Bounce → Hard Techno', upcoming: true,
  },
  {
    id: 10, day: '20', month: 'Juin 2026',
    venue: 'La Station',
    city: 'GEMINI Night · Toulouse · 20h00 – 03h00',
    style: 'All Techno', upcoming: true,
  },
]

const showAllPastDates = ref(false)

const upcomingDates = computed(() => dates.filter(date => date.upcoming))

const pastDates = computed(() => [...dates.filter(date => !date.upcoming)].sort((left, right) => right.id - left.id))

const visiblePastDates = computed(() => (showAllPastDates.value ? pastDates.value : pastDates.value.slice(0, 3)))

const hasMorePastDates = computed(() => pastDates.value.length > 3)

const togglePastDates = () => {
  showAllPastDates.value = !showAllPastDates.value
}
</script>

<style scoped>
.dates-list { width: 100%; margin: 0 auto; }
.date-item {
  display: grid; grid-template-columns: auto 1fr auto;
  gap: 2rem; align-items: center;
  padding: 1.5rem 0; border-bottom: 1px solid var(--border);
  transition: all 0.3s;
}
.date-item:first-child { border-top: 1px solid var(--border); }
.date-item:hover .date-num { color: var(--cyan); }
.date-num {
  font-size: 2.5rem; font-weight: 700;
  color: var(--text-dim); line-height: 1;
  transition: color 0.3s; min-width: 60px;
}
.date-month {
  font-size: 0.85rem; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--text-dim); margin-top: 0.2rem;
}
.date-venue { font-size: 1.25rem; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; }
.date-city { font-size: 0.85rem; color: var(--text-dim); letter-spacing: 0.15em; text-transform: uppercase; margin-top: 0.2rem; }
.date-style { margin-top: 0.4rem; font-size: 0.85rem; color: rgba(232,224,255,0.35); letter-spacing: 0.1em; text-transform: uppercase; }
.date-type {
  font-size: 0.95rem; padding: 0.3rem 0.8rem;
  background: rgba(255,26,26,0.1);
  border: 1px solid rgba(255,26,26,0.3);
  color: #ff6b6b; letter-spacing: 0.15em; text-transform: uppercase;
}
.date-upcoming { background: rgba(0,229,255,0.1); border-color: rgba(0,229,255,0.3); color: var(--cyan); }
.no-dates {
  padding: 2.5rem 0;
  border-bottom: 1px solid rgba(155,48,255,0.2);
}
.no-dates-label {
  font-size: 1rem; letter-spacing: 0.2em; text-transform: uppercase;
  color: rgba(0,229,255,0.45); margin-bottom: 0.75rem; font-weight: 600;
}
.no-dates-text {
  font-size: 1rem; color: rgba(232,224,255,0.4);
  line-height: 1.8; font-style: italic;
}
.see-more-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.25rem;
  padding: 0.75rem 1.2rem;
  border: 1px solid rgba(0,229,255,0.35);
  background: rgba(0,229,255,0.08);
  color: var(--cyan);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s, background 0.3s, border-color 0.3s, color 0.3s;
}
.see-more-btn:hover {
  transform: translateY(-1px);
  background: rgba(0,229,255,0.14);
  border-color: rgba(0,229,255,0.55);
}
</style>

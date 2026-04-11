<template>
  <section id="contact">

    <div class="claw-scratch" style="left:50%; top:0; opacity:0.06; transform:rotate(20deg);">
      <svg width="100" height="200" viewBox="0 0 220 380" xmlns="http://www.w3.org/2000/svg">
        <path d="M 30 10 Q 55 120 45 370" stroke="#9b30ff" stroke-width="7" fill="none" stroke-linecap="round"/>
        <path d="M 100 0 Q 125 115 108 365" stroke="#9b30ff" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M 170 20 Q 188 130 175 375" stroke="#9b30ff" stroke-width="3" fill="none" stroke-linecap="round"/>
      </svg>
    </div>

    <p class="section-label">Booking</p>
    <h2 class="section-title">Réserver <span class="grad-text">WOLFREE</span></h2>

    <div class="contact-grid">

      <!-- Formulaire -->
      <div class="contact-form">
        <form ref="formRef" @submit.prevent="handleSubmit" novalidate>

          <div class="form-group">
            <label class="form-label" for="field-name">Nom / Organisateur *</label>
            <input type="text" id="field-name" name="from_name" class="form-input" placeholder="Ton nom ou ta structure" required>
          </div>

          <div class="form-group">
            <label class="form-label" for="field-email">E-mail *</label>
            <input type="email" id="field-email" name="from_email" class="form-input" placeholder="contact@exemple.com" required>
          </div>

          <div class="form-group">
            <label class="form-label" for="field-phone">Téléphone</label>
            <input type="tel" id="field-phone" name="phone" class="form-input" placeholder="+33 6 00 00 00 00">
          </div>

          <div class="form-group">
            <label class="form-label" for="field-type">Type d'événement *</label>
            <select id="field-type" name="event_type" class="form-select" required>
              <option value="">Choisir...</option>
              <option value="Bar / Club">Bar / Club</option>
              <option value="Festival">Festival</option>
              <option value="Soirée privée">Soirée privée</option>
              <option value="Événement professionnel">Événement professionnel</option>
              <option value="Autre">Autre</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="field-date">Date souhaitée</label>
            <input type="date" id="field-date" name="event_date" class="form-input">
          </div>

          <div class="form-group">
            <label class="form-label" for="field-location">Lieu / Ville</label>
            <input type="text" id="field-location" name="location" class="form-input" placeholder="Nom du lieu, ville">
          </div>

          <div class="form-group">
            <label class="form-label" for="field-message">Message *</label>
            <textarea id="field-message" name="message" class="form-textarea"
              placeholder="Décris ton projet : jauge approximative, horaires, ambiance, budget indicatif..."
              required></textarea>
          </div>

          <button class="form-submit" type="submit" :disabled="isLoading">
            <span v-if="isLoading" class="btn-spinner"></span>
            <span class="btn-text">{{ isLoading ? 'Envoi en cours...' : 'Envoyer la demande →' }}</span>
          </button>

          <div v-if="isSuccess" class="form-feedback success">
            ✓ Message envoyé — WOLFREE te répondra rapidement.
          </div>
          <div v-if="isError" class="form-feedback error">
            ✕ Erreur d'envoi — contacte directement mat.com.snow@gmail.com
          </div>

        </form>
      </div>

      <!-- Infos contact -->
      <div class="contact-info">
        <p class="contact-intro">Pour toute demande de booking, proposition de date ou collaboration :</p>

        <div class="contact-info-item">
          <span class="contact-info-label">E-mail Booking</span>
          <a href="mailto:mat.com.snow@gmail.com" class="contact-info-val">mat.com.snow@gmail.com</a>
        </div>
        <div class="contact-info-item">
          <span class="contact-info-label">Matériel</span>
          <p class="contact-info-val small">Pioneer DDJ FLX4 → CDJ-3000 / DJM-900<br>Pas de vinyle</p>
        </div>
        <div class="contact-info-item">
          <span class="contact-info-label">Styles principaux</span>
          <p class="contact-info-val small">Techno Bounce · Hard Techno<br>+ 5 autres genres sur demande</p>
        </div>
        <div class="contact-info-item">
          <span class="contact-info-label">Localisation</span>
          <p class="contact-info-val small">Toulouse · France<br>Déplacements possibles</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useEmailJS } from '@/composables/useEmailJS'

const formRef = ref(null)
const { isLoading, isSuccess, isError, init, sendForm } = useEmailJS()

onMounted(() => {
  init()
})

async function handleSubmit() {
  if (!formRef.value.checkValidity()) {
    formRef.value.reportValidity()
    return
  }

  // Formate la date
  const rawDate = formRef.value.querySelector('[name="event_date"]').value
  if (rawDate) {
    const formatted = new Date(rawDate).toLocaleDateString('fr-FR', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    })
    let hidden = formRef.value.querySelector('[name="event_date_formatted"]')
    if (!hidden) {
      hidden = document.createElement('input')
      hidden.type = 'hidden'
      hidden.name = 'event_date_formatted'
      formRef.value.appendChild(hidden)
    }
    hidden.value = formatted
  }

  // Timestamp
  let ts = formRef.value.querySelector('[name="sent_at"]')
  if (!ts) {
    ts = document.createElement('input')
    ts.type = 'hidden'
    ts.name = 'sent_at'
    formRef.value.appendChild(ts)
  }
  ts.value = new Date().toLocaleString('fr-FR')

  await sendForm(formRef.value)
  if (isSuccess.value) formRef.value.reset()
}
</script>

<style scoped>
#contact { background: var(--bg2); }
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; width: 100%; }
.contact-intro { color: rgba(232,224,255,0.5); font-size: 0.9rem; line-height: 1.9; margin-bottom: 2rem; }

.form-group { margin-bottom: 1.5rem; }
.form-label {
  display: block; font-size: 0.85rem; letter-spacing: 0.25em;
  text-transform: uppercase; color: var(--text-dim);
  margin-bottom: 0.5rem; font-weight: 600;
}
.form-input, .form-select, .form-textarea {
  width: 100%; background: var(--surface);
  border: 1px solid var(--border); color: var(--text);
  padding: 0.75rem 1rem;
  font-family: 'Rajdhani', sans-serif; font-size: 1em;
  outline: none; transition: border-color 0.3s;
  border-radius: 0; appearance: none; -webkit-appearance: none;
}
.form-input:focus, .form-select:focus, .form-textarea:focus { border-color: var(--violet); }
.form-select option { background: var(--bg); }
.form-textarea { resize: vertical; min-height: 120px; }
.form-submit {
  width: 100%; padding: 1rem;
  background: var(--grad); border: none; color: #fff;
  font-family: 'Rajdhani', sans-serif; font-size: 1rem;
  font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase;
  cursor: pointer;
  clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
  transition: opacity 0.3s;
}
.form-submit:hover { opacity: 0.85; }
.form-submit:disabled { opacity: 0.5; cursor: not-allowed; }
.btn-spinner {
  display: inline-block; width: 14px; height: 14px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #fff; border-radius: 50%;
  animation: spin 0.7s linear infinite;
  margin-right: 8px; vertical-align: middle;
}
.form-feedback {
  padding: 1rem 1.2rem; margin-top: 1rem;
  font-size: 0.8rem; letter-spacing: 0.15em;
  text-transform: uppercase; font-weight: 600;
  border-left: 3px solid;
}
.form-feedback.success { background: rgba(0,229,255,0.06); border-color: var(--cyan); color: var(--cyan); }
.form-feedback.error   { background: rgba(255,26,26,0.06); border-color: #ff4444; color: #ff6b6b; }

.contact-info-item {
  display: flex; flex-direction: column; gap: 0.3rem;
  padding: 1.5rem 0; border-bottom: 1px solid var(--border);
}
.contact-info-label { font-size: 1rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--cyan); font-weight: 600; }
.contact-info-val { font-size: 1rem; font-weight: 500; color: var(--text); text-decoration: none; transition: color 0.3s; }
.contact-info-val:hover { color: var(--cyan); }
.contact-info-val.small { font-size: 0.85rem; color: rgba(232,224,255,0.6); }

@media (max-width: 768px) {
  .contact-grid { grid-template-columns: 1fr; }
}
</style>

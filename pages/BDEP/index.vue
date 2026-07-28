<template>
    <main class="bdep">
        <header class="bdep-hero">
            <div class="bdep-hero__glow bdep-hero__glow--a" aria-hidden="true"></div>
            <div class="bdep-hero__glow bdep-hero__glow--b" aria-hidden="true"></div>

            <div class="bdep-hero__inner mx-auto">
                <div class="bdep-hero__brandrow justify-between mx-auto">
                    <span class="bdep-hero__brand text-white">Benkalu Foundation</span>
                    <span class="bdep-hero__tag text-white">BDEP</span>
                </div>
                <h1 class="bdep-hero__title font-montserrat text-white">
                    Bende Digital
                    <!-- <br /> -->
                    Empowerment
                    <!-- <br /> -->
                    Program
                </h1>

                <svg class="h-auto my-4 mx-0 w-52 block md:my-6" viewBox="0 0 340 28" fill="none" aria-hidden="true">
                    <path d="M4 18C60 4 140 2 180 12C210 20 260 24 336 8" stroke="#E31C3D" stroke-width="7" stroke-linecap="round"/>
                </svg>

                <p class="text-white text-xs md:text-sm leading-normal max-w-[95%] md:max-w-[90%] lg:max-w-[85%] mb-8">
                    Equipping Bende youths, empowering the <strong>future</strong>. Register below to
                    join the programme — spaces are limited.
                </p>

                <ul class="bdep-hero__chips" aria-label="Programme focus areas">
                    <li v-for="(area, i) in focusAreas" :key="area" :class="{ 'is-alt': i % 2 === 1 }">
                        <span class="bdep-hero__chip-mark">+</span>{{ area }}
                    </li>
                </ul>

                <div class="bdep-hero__badge">Registration begins immediately</div>
            </div>
        </header>

        <main class="bdep-form-wrap">
            <form class="bdep-form" @submit.prevent="handleSubmit" novalidate>
                <div v-if="submitState === 'success'" class="bdep-banner bdep-banner--ok" role="status">
                    <strong>Registration received.</strong> Thank you — the BDEP team will be in touch with next steps.
                </div>
                <div v-else-if="submitState === 'error'" class="bdep-banner bdep-banner--err" role="alert">
                    <strong>Something went wrong.</strong> {{ errorMessage }} Please try again.
                </div>

                <template v-if="submitState !== 'success'">
                    <fieldset class="bdep-section">
                        <legend class="font-montserratAlt">Personal information</legend>

                        <div class="bdep-field">
                            <label for="fullName">Full name</label>
                            <input id="fullName" placeholder="John Doe" v-model.trim="form.fullName" type="text" required autocomplete="name" />
                            <span v-if="errors.fullName" class="bdep-error">{{ errors.fullName }}</span>
                        </div>

                        <div class="bdep-field">
                            <label for="dob">Date of birth</label>
                            <input id="dob" v-model="form.dob" type="date" required :max="todayISO" />
                            <span v-if="errors.dob" class="bdep-error">{{ errors.dob }}</span>
                        </div>

                        <div class="bdep-field">
                            <label class="font-montserratAlt" for="email">Email address</label>
                            <input id="email" placeholder="johndoe@gmail.com" v-model.trim="form.email" type="email" required autocomplete="email" />
                            <span v-if="errors.email" class="bdep-error">{{ errors.email }}</span>
                        </div>

                        <div class="bdep-field">
                            <label class="font-montserratAlt" for="phone">Phone number</label>
                            <input
                                id="phone"
                                v-model.trim="form.phone"
                                type="tel"
                                required
                                autocomplete="tel"
                                placeholder="e.g. 08012345678"
                            />
                            <span v-if="errors.phone" class="bdep-error">{{ errors.phone }}</span>
                        </div>
                    </fieldset>

                    <fieldset class="bdep-section">
                        <legend class="font-montserratAlt">Location details</legend>

                        <div class="bdep-field">
                            <label class="font-montserratAlt" for="state">State</label>
                            <select id="state" v-model="form.state" required>
                                <option value="" disabled>Select state</option>
                                <option v-for="s in nigerianStates" :key="s" :value="s">{{ s }}</option>
                            </select>
                            <span v-if="errors.state" class="bdep-error">{{ errors.state }}</span>
                        </div>

                        <div class="bdep-field">
                            <label class="font-montserratAlt" for="lga">LGA of origin</label>
                            <input id="lga" v-model.trim="form.lga" type="text" required />
                            <span v-if="errors.lga" class="bdep-error">{{ errors.lga }}</span>
                        </div>

                        <div class="bdep-field">
                            <label class="font-montserratAlt" for="ward">Ward</label>
                            <input id="ward" v-model.trim="form.ward" type="text" required />
                            <span v-if="errors.ward" class="bdep-error">{{ errors.ward }}</span>
                        </div>

                        <div class="bdep-field">
                            <label class="font-montserratAlt" for="community">Community / Village</label>
                            <input id="community" v-model.trim="form.community" type="text" required />
                            <span v-if="errors.community" class="bdep-error">{{ errors.community }}</span>
                        </div>
                    </fieldset>

                    <fieldset class="bdep-section">
                        <legend>Education</legend>
                        <div class="bdep-field">
                            <label for="education" class="font-montserratAlt">Highest education qualification</label>
                            <select id="education" v-model="form.education" required>
                                <option value="" disabled>Select qualification</option>
                                <option v-for="opt in educationOptions" :key="opt" :value="opt">{{ opt }}</option>
                            </select>
                            <span v-if="errors.education" class="bdep-error">{{ errors.education }}</span>
                        </div>
                    </fieldset>

                    <fieldset class="bdep-section">
                        <legend>Digital skills assessment</legend>
                        <div class="bdep-field">
                            <span class="bdep-field__label-text font-montserratAlt">
                                Have you received any digital skills training before?
                            </span>
                            <div class="bdep-radio-row">
                                <label class="bdep-radio font-adamina">
                                    <input type="radio" v-model="form.priorTraining" value="Yes" name="priorTraining" />
                                    Yes
                                </label>
                                <label class="bdep-radio font-adamina">
                                    <input type="radio" v-model="form.priorTraining" value="No" name="priorTraining" />
                                    No
                                </label>
                            </div>
                            <span v-if="errors.priorTraining" class="bdep-error">{{ errors.priorTraining }}</span>
                        </div>

                        <div class="bdep-field" v-if="form.priorTraining === 'Yes'">
                            <label for="priorTrainingDetail">If yes, please specify</label>
                            <input id="priorTrainingDetail" v-model.trim="form.priorTrainingDetail" type="text" />
                            <span v-if="errors.priorTrainingDetail" class="bdep-error">{{ errors.priorTrainingDetail }}</span>
                        </div>

                        <div class="bdep-field">
                            <span class="bdep-field__label-text">
                                Which digital skill are you most interested in learning? (Select one or more)
                            </span>
                            <div class="bdep-check-grid">
                                <label v-for="skill in skillOptions" :key="skill" class="bdep-check gap-2 font-adamina">
                                    <input type="checkbox" :value="skill" v-model="form.interests" />
                                    {{ skill }}
                                </label>
                            </div>
                            <span v-if="errors.interests" class="bdep-error">{{ errors.interests }}</span>

                            <input type="text" class="bdep-other-input" placeholder="Please specify" v-if="form.interests.includes('Other')"
                                v-model.trim="form.interestsOther"
                            />
                        </div>
                    </fieldset>

                    <fieldset class="bdep-section">
                        <legend>Motivation</legend>
                        <div class="bdep-field">
                            <label class="font-adamina" for="motivation">
                                Why do you want to participate in the Bende Digital Empowerment Programme?
                            </label>
                            <textarea id="motivation" v-model="form.motivation" @input="capWords" rows="5" required></textarea>
                            <div class="flex items-center mt-2 justify-between w-full">
                                <span class="bdep-hint">Maximum of 150 Words</span>
                                <span class="bdep-hint">({{ wordCount }}/150)</span>
                            </div>
                            <span v-if="errors.motivation" class="bdep-error">{{ errors.motivation }}</span>
                        </div>
                    </fieldset>

                    <fieldset class="mb-8 bg-white py-4 rounded-xl border! border-solid border-[#dbe3ef]">
                        <legend class="declaration_legend">Declaration</legend>
                        <label class="bdep-check bdep-check--declaration">
                            <input type="checkbox" v-model="form.declaration" />
                            I certify that the information provided is true and accurate. I understand that
                            providing false information may lead to disqualification from the programme.
                        </label>
                        <span v-if="errors.declaration" class="bdep-error">{{ errors.declaration }}</span>
                    </fieldset>

                    <button type="submit" class="bdep-submit" :disabled="submitState === 'loading'">
                        <p class="font-montserrat text-white text-sm font-semibold">
                            {{ submitState === 'loading' ? 'Submitting…' : 'Submit registration' }}
                        </p>
                    </button>
                </template>
            </form>
        </main>
    </main>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'

const SCRIPT_URL = `https://script.google.com/macros/s/AKfycbyv7T_m3ZiQ-uMWsz96U_W6ZscYnCG93ajINBeOOchvnAubjD19tAx78OaVzr4GDAGl/exec`

const focusAreas = [
    'Digital Literacy',
    'Graphics Design',
    'Social Media & Content Creation',
    'Web Development',
    'Digital Marketing',
    'Entrepreneurship & Business Tools',
    'Freelancing & Remote Work',
]

const skillOptions = [
    'Digital Literacy',
    'Graphics Design',
    'Social Media Management',
    'Digital Marketing',
    'Content Creation',
    'AI Tools',
    'Web Design',
    'Freelancing',
    'Entrepreneurship',
    'Other',
]

const educationOptions = [
    'No formal education',
    'Primary school',
    'Secondary school / WAEC',
    'OND / NCE',
    'HND / Bachelor\u2019s degree',
    'Postgraduate',
    'Other',
]

const nigerianStates = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
  'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT (Abuja)', 'Gombe',
  'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos',
  'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto',
  'Taraba', 'Yobe', 'Zamfara',
]

const todayISO = new Date().toISOString().split('T')[0]

const form = reactive({
  fullName: '',
  dob: '',
  email: '',
  phone: '',
  state: 'Abia',
  lga: '',
  ward: '',
  community: '',
  education: '',
  priorTraining: '',
  priorTrainingDetail: '',
  interests: [],
  interestsOther: '',
  motivation: '',
  declaration: false,
})

const errors = reactive({})
const submitState = ref('idle')
const errorMessage = ref('')

const wordCount = computed(() =>
  form.motivation.trim() === '' ? 0 : form.motivation.trim().split(/\s+/).length
)

function capWords() {
    const words = form.motivation.trim().split(/\s+/)
    if (words.length > 150) {
        form.motivation = words.slice(0, 150).join(' ')
    }
}

function validate() {
    Object.keys(errors).forEach((k) => delete errors[k])

    if (!form.fullName) errors.fullName = 'Please enter your full name.'
    if (!form.dob) errors.dob = 'Please enter your date of birth.'
    if (!form.email) {
        errors.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = 'Please enter a valid email address.'
    }
    if (!form.phone) {
        errors.phone = 'Please enter your phone number.'
    } else if (!/^(\+234|0)[7-9]\d{9}$/.test(form.phone.replace(/\s+/g, ''))) {
        errors.phone = 'Please enter a valid Nigerian phone number, e.g. 08012345678.'
    }
    if (!form.state) errors.state = 'Please select a state.'
    if (!form.lga) errors.lga = 'Please enter your LGA of origin.'
    if (!form.ward) errors.ward = 'Please enter your ward.'
    if (!form.community) errors.community = 'Please enter your community or village.'
    if (!form.education) errors.education = 'Please select your highest qualification.'
    if (!form.priorTraining) errors.priorTraining = 'Please select yes or no.'
    if (form.priorTraining === 'Yes' && !form.priorTrainingDetail) {
        errors.priorTrainingDetail = 'Please specify your prior training.'
    }
    if (form.interests.length === 0) errors.interests = 'Please select at least one skill.'
    if (!form.motivation.trim()) errors.motivation = 'Please tell us why you want to participate.'
    if (!form.declaration) errors.declaration = 'You must accept the declaration to submit.'

    return Object.keys(errors).length === 0
}

async function handleSubmit() {
    if (!validate()) {
        submitState.value = 'idle'
        const firstError = document.querySelector('.bdep-error')
        firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        return
    }
    submitState.value = 'loading'
    errorMessage.value = ''

    const interests = form.interests.includes('Other') && form.interestsOther
        ? [...form.interests.filter((i) => i !== 'Other'), `Other: ${form.interestsOther}`]
        : form.interests

    const payload = {
        fullName: form.fullName,
        dob: form.dob,
        email: form.email,
        phone: form.phone,
        state: form.state,
        lga: form.lga,
        ward: form.ward,
        community: form.community,
        education: form.education,
        priorTraining: form.priorTraining,
        priorTrainingDetail: form.priorTrainingDetail,
        interests: interests.join(', '),
        motivation: form.motivation,
        declaration: form.declaration ? 'Yes' : 'No',
        submittedAt: new Date().toISOString(),
    }

    try {
        const res = await fetch(SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payload),
        })
        if (!res.ok) throw new Error(`Server responded with ${res.status}`)
        const result = await res.json()
        if (result.result !== 'success') throw new Error(result.error || 'Unknown error')

        submitState.value = 'success'
    } catch (err) {
        submitState.value = 'error'
        errorMessage.value = err?.message || ''
        console.error('BDEP submit failed', err)
    }
}
</script>

<style scoped>
.bdep {
    --navy: #14335e;
    --navy-deep: #0c2447;
    --blue: #2c405a;
    --red: #e31c3d;
    --ink: #101828;
    --paper: #f5f8fc;
    --line: #dbe3ef;

    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: var(--ink);
    background: #f5f8fc;
}

.bdep-hero {
  position: relative;
  overflow: hidden;
  background: linear-gradient(160deg, var(--navy-deep) 0%, var(--navy) 55%, var(--blue) 130%);
  color: #fff;
  padding: 4rem 1.5rem 3.5rem;
}

.bdep-hero__glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.35;
  pointer-events: none;
}
.bdep-hero__glow--a { width: 320px; height: 320px; top: -120px; right: -80px; background: var(--blue); }
.bdep-hero__glow--b { width: 260px; height: 260px; bottom: -120px; left: -60px; background: var(--red); opacity: 0.25; }

.bdep-hero__inner {
  position: relative;
  max-width: 45rem;
  margin: 0 auto;
}

.bdep-hero__brandrow {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.85;
  margin-bottom: 1.5rem;
}
.bdep-hero__tag {
  padding: 0.15rem 0.5rem;
  border: 1px solid rgba(255,255,255,0.4);
  border-radius: 4px;
  font-weight: 700;
}

.bdep-hero__title {
  font-family: 'Poppins', 'Inter', sans-serif;
  font-weight: 800;
  font-size: clamp(2.2rem, 6vw, 3.4rem);
  line-height: 1.05;
  margin: 0;
  letter-spacing: -0.01em;
}

.bdep-hero__swoosh {
  width: 12.5rem;
  height: auto;
  margin: 0.75rem 0 1rem;
  display: block;
}

.bdep-hero__lede {
  font-size: 1.05rem;
  line-height: 1.6;
  max-width: 46ch;
  opacity: 0.95;
  margin-bottom: 2rem;
}

.bdep-hero__chips {
  list-style: none;
  padding: 0;
  margin: 0 0 1.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  max-width: 90%;
}
.bdep-hero__chips li {
  background: rgba(255,255,255,0.94);
  color: var(--navy-deep);
  font-weight: 600;
  font-size: 0.92rem;
  padding: 0.65rem 1rem;
  border-radius: 999px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.bdep-hero__chips li.is-alt {
  background: rgba(20,51,94,0.55);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.25);
}
.bdep-hero__chip-mark { color: var(--red); font-weight: 800; }
.bdep-hero__chips li.is-alt .bdep-hero__chip-mark { color: #ff6b81; }

.bdep-hero__badge {
  display: inline-block;
  background: #146634;
  color: #fff;
  font-weight: 700;
  font-size: 0.875rem;
  padding: 1rem;
  border-radius: 0.5rem;
}

.bdep-form-wrap {
    max-width: 45rem;
    margin: -2rem auto 0;
    padding: 0 0 4rem;
    position: relative;
}

.bdep-form {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 1.25rem 3.125rem -1.25rem rgba(12, 36, 71, 0.35);
  padding: 2rem 1.75rem;
}

.bdep-banner {
  padding: 1rem 1.1rem;
  border-radius: 10px;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}
.bdep-banner--ok { background: #e9f8ee; color: #1c6b3a; border: 1px solid #bfe8cc; }
.bdep-banner--err { background: #fdecee; color: #a3182f; border: 1px solid #f4c2ca; }

.bdep-section {
  border: none;
  padding: 0;
  margin: 0 0 2rem;
}
.bdep-section legend, .declaration_legend {
  font-family: 'Poppins', 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  color: #146634;
  padding: 0;
  margin-bottom: 1rem;
  border-bottom: 2px solid var(--line);
  padding-bottom: 0.5rem;
  text-transform: uppercase;
  width: 100%;
}
.declaration_legend {
    margin-bottom: 0;
}

.bdep-field { margin-bottom: 1.15rem; }
.bdep-field label,
.bdep-field__label-text {
  display: block;
  font-weight: 700;
  font-size: 1rem;
  color: #000;
  margin-bottom: 1rem;
}
.bdep-field label {
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
}
.bdep-check > input {
    font-size: 0.875rem;
    font-weight: 400;
}
.bdep-hint { font-weight: 400; color: #667085; font-size: 0.82rem; }

.bdep-field input[type="text"],
.bdep-field input[type="date"],
.bdep-field input[type="email"],
.bdep-field input[type="tel"],
.bdep-field select,
.bdep-field textarea,
.bdep-other-input {
  width: 100%;
  padding: 0.65rem 0.8rem;
  border: 1px solid var(--line);
  border-radius: 8px;
  font-size: 0.95rem;
  font-family: inherit;
  color: var(--ink);
  background: #fff;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.bdep-other-input { margin-top: 0.6rem; }

.bdep-field input:focus-visible,
.bdep-field select:focus-visible,
.bdep-field textarea:focus-visible {
  outline: none;
  border-color: var(--blue);
  box-shadow: 0 0 0 3px rgba(29, 111, 209, 0.18);
}

.bdep-radio-row { display: flex; gap: 1.25rem; }
.bdep-radio,
.bdep-check {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.92rem;
  cursor: pointer;
}

.bdep-check-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem 1rem;
}
@media (max-width: 480px) {
    .bdep-check-grid { grid-template-columns: 1fr; }
    .bdep-hero__chips {
        max-width: 100%;
    }
    .bdep-hero__chips li {
        font-size: 0.75rem;
    }
}

.bdep-section--declaration {
  background: #FFF;
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 1.1rem 0;
}
.bdep-check--declaration {
  align-items: flex-start;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #344054;
}
.bdep-check--declaration input { margin-top: 0.2rem; }

.bdep-error {
  display: block;
  color: var(--red);
  font-size: 0.82rem;
  margin-top: 0.35rem;
}

.bdep-submit {
  width: 100%;
  background: #146634;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.9rem 1.5rem;
  cursor: pointer;
  transition: filter 0.15s, transform 0.05s;
}
.bdep-submit:hover:not(:disabled) { filter: brightness(1.08); }
.bdep-submit:active:not(:disabled) { transform: scale(0.99); }
.bdep-submit:disabled { opacity: 0.6; cursor: not-allowed; }
.bdep-submit:focus-visible { outline: 3px solid var(--blue); outline-offset: 2px; }

.bdep-footer {
  text-align: center;
  font-size: 0.82rem;
  color: #667085;
  padding: 0 1.5rem 2.5rem;
}

@media (prefers-reduced-motion: reduce) {
  .bdep-submit { transition: none; }
}
</style>
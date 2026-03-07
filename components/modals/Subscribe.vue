<!-- components/LeadCaptureModal.vue -->
<template>
    <div v-if="isOpen" @click.self="closeModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 
        backdrop-blur-sm"
    >
        <div
            class="bg-white top-8 rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6 md:p-8 
            relative animate-in fade-in zoom-in-95 duration-300"
        >
            <button @click="closeModal" class="absolute top-6 cursor-pointer right-6
                text-gray-500 hover:text-gray-800 transition"
            >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <h2 class="text-2xl md:text-3xl font-bold text-center mb-2">
                Get in Touch
            </h2>
            <p class="text-center text-gray-600 mb-8">
                Please fill in your details and we'll get back to you shortly.
            </p>

            <form @submit.prevent="handleSubmit" class="space-y-5">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span class="text-red-500">*</span>
                    </label>
                    <input
                        v-model="form.name"
                        type="text"
                        required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-primary 
                        focus:border-transparent"
                        placeholder="Enter your name"
                    />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span class="text-red-500">*</span>
                    </label>
                    <input
                        v-model="form.email"
                        type="email"
                        required
                        class="w-full px-4 py-3 border border-gray-700 rounded-lg 
                            focus:outline-none focus:ring-2 focus:ring-primary 
                            focus:border-transparent"
                        placeholder="Enter your email"
                    />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                    </label>
                    <input v-model="form.phone" type="tel"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg 
                            focus:outline-none focus:ring-2 focus:ring-primary 
                            focus:border-transparent"
                        placeholder="Enter your phone number"
                    />
                </div>

                <button type="submit" :disabled="isSubmitting"
                    class="w-full py-3.5 bg-[#146634] text-white font-semibold rounded-lg 
                    hover:bg-primary-dark transition disabled:opacity-60 px-10
                    disabled:cursor-not-allowed"
                >
                    {{ isSubmitting ? 'Submitting...' : 'Submit' }}
                </button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close', 'submit'])

const props = defineProps<{
  isOpen: boolean
}>()

const form = ref({
  name: '',
  email: '',
  phone: ''
})

const isSubmitting = ref(false)

const closeModal = () => {
  emit('close')
  form.value = { name: '', email: '', phone: '' }
}

const handleSubmit = async () => {
    if (!form.value.name || !form.value.email) return
    isSubmitting.value = true

    try {
        // Replace with your actual API call
        // await $fetch('/api/submit-lead', { method: 'POST', body: form.value })
        console.log('Form submitted:', form.value)
        emit('submit', form.value)
        closeModal()
    } catch (err) {
        console.error('Submission failed:', err)
        alert('Something went wrong. Please try again.')
    } finally {
        isSubmitting.value = false
    }
}
</script>
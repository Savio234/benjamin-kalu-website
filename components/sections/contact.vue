<template>
  <section class="w-full py-16 bg-white">
    <div class="content w-[85%] sm:w-4/12 mx-auto text-center flex flex-col items-center">
      <Sublogo class="shadow border border-borderMuted rounded-full pr-3" />
      <h3 class="font-semibold mt-8">Stay in the loop</h3>
      <h6 class="font-medium">
        Provide your email address so we can send you regular <br class="hidden sm:block" />
        updates of our projects as they come
      </h6>
      <div class="form w-full my-12 flex flex-col gap-4">
        <form ref="form" @submit.prevent="sendEmail">
          <p class="text-primaryGreen my-2" v-if="success">Your email has been sent</p>
          <p class="text-red-500 my-2" v-if="error">Failed to send email</p>
        <input
        type="email"
            name="customer_email"
            v-model="customer_email"
            required
          class="w-full rounded-lg bg-bgInput border border-borderMuted p-2 outline-bgGreen"
          id=""
          placeholder=""
        />
        <button type="submit" class="bg-white border-2 border-[#00A99133] my-2 w-full h-fit p-[1px] rounded-lg">
            <div class="content bg-primaryGreen rounded-lg py-3 px-6 text-white flex justify-center items-center" style="font-family: 'Inter', sans-serif">
              <span v-if="isLoading" class="flex items-center">
                <svg class="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.964 7.964 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
              <span v-else>Send</span>
            </div>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

emailjs.init('dCyHceo03iP6yJR6v');

const form = ref<HTMLFormElement | null>(null);
const customer_email = ref<string>('');
const isLoading = ref<boolean>(false);
const success = ref<boolean>(false);
const error = ref<boolean>(false);

async function sendEmail() {
  isLoading.value = true;
  success.value = false;
  error.value = false;

  try {
    await emailjs.sendForm('service_gn5wzva', 'template_4ss3nwf', form.value);
    success.value = true;
    customer_email.value = '';

    setTimeout(() => {
      success.value = false;
    }, 5000);
  } catch (e) {
    error.value = true;
  } finally {
    isLoading.value = false;
  }
}
</script>

<style></style>

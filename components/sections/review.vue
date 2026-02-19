<template>
  <section class="w-full bg-white">
    <div class="content w-[92.5%] md:w-[90%] mx-auto text-center flex flex-col items-center">
      <Sublogo class="" />
      <h3 class="font-normal mt-4">
        We will love to hear from you!
      </h3>
      <h6 class="font-medium text-center font-montserrat mt-2">
        Let us know how we are performing and share your concerns on topical issues
      </h6>

      <form ref="form" class="form w-full my-8" @submit.prevent="sendEmail">
        <p class="text-primaryGreen my-2" v-if="success">Your Message has been sent</p>
        <textarea
          rows="5"
          class="w-full h-44 rounded-lg bg-bgInput border border-borderMuted p-4 outline-bgGreen"
          placeholder="Enter a review"
          name="message"
          v-model="message_content"
        ></textarea>

        <button type="submit" class="bg-[#146634] mt-2 w-full h-14 p-[1px] rounded-lg">
          <div class="bg-[#146634] rounded-lg py-3 px-6 text-white flex justify-center items-center" style="font-family: 'Inter', sans-serif">
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
  </section>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const success = ref(false);
const isLoading = ref(false);
const form = ref(null);
const message_content = ref('');

async function sendEmail() {
  isLoading.value = true;
  try {
    await emailjs.sendForm('service_gn5wzva', 'template_ggvh3ab', form.value, 'dCyHceo03iP6yJR6v');
    success.value = true;
    message_content.value = '';

    setTimeout(() => {
      success.value = false;
    }, 5000);
    
  } catch (error) {
    console.error('Failed to send email:', error);
  } finally {
    isLoading.value = false;
  }
}
</script>

<style lang="scss" scoped>
.content {
  background-image: url(https://res.cloudinary.com/damkhdi7d/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1718186883/benjamin_kalu/background_review_d6dooi.jpg);
  background-size: 85%;
  background-position: top center;
  background-repeat: no-repeat;
}
</style>

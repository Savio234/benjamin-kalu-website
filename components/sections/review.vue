<template>
  <section class="w-full py-16 bg-white">
    <div class="content w-[85%] sm:w-4/12 mx-auto text-center flex flex-col items-center">
      <Sublogo class="shadow border border-borderMuted rounded-full pr-3" />
      <h3 class="font-semibold mt-4">
        Let us <span class="text-primaryGreen">Know</span> <br />
        how we are doing
      </h3>
      <h6 class="font-medium">
        Feel free to send us and Email and let us know how our ofice is performing and how best we can improve
      </h6>

      <form ref="form" class="form w-full my-8" @submit.prevent="sendEmail">
        <p class="text-primaryGreen" v-if="success">Your Message has been sent</p>
        <textarea
          rows="5"
          class="w-full rounded-lg bg-bgInput border border-borderMuted p-2 outline-bgGreen"
          placeholder="Enter a review"
          name="message"
          v-model="message_content"
        ></textarea>

        <button type="submit" class="bg-white border-2 border-[#00A99133] w-full h-fit p-[1px] rounded-lg">
          <div class="bg-primaryGreen rounded-lg py-3 px-6 text-white" style="font-family: 'Inter', sans-serif">
            {{ isLoading ? '....' : 'Send' }}
          </div>
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import emailjs from '@emailjs/browser';
const success = ref(false);
const isLoading = ref(false);
const form = ref(null);
const message_content = ref('');
function sendEmail() {
  isLoading.value = true;
  try {
    emailjs
      .sendForm('service_gn5wzva', 'template_ggvh3ab', form.value, {
        publicKey: 'dCyHceo03iP6yJR6v',
      })
      .then(
        () => {
          console.log('Success');
          success.value = true;
          message_content.value = '';
        },
        (error) => {
          console.log(error);
        },
      );
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
    success.value = false;
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

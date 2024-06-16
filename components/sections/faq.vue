<template>
    <section class="w-full py-16 bg-white">
      <div class="content w-[85%] sm:w-3/5 mx-auto text-left flex flex-col items-center">
        <h3 class="font-semibold mt-4 text-center">
          Frequently Asked <br /> Questions
        </h3>
        <div class="faq w-full mt-8">
          <div class="border-b mx-4 border-gray-200 opacity-10 mb-4"></div>
          <div
            v-for="(item, index) in faqs"
            :key="index"
            class="faq-item my-4 p-4 border-b mx-4"
            style="border-color: rgba(0, 0, 0, 0.1)"
          >
            <div class="faq-question flex justify-between items-center cursor-pointer" @click="toggle(index)">
              <h4 :class="['font-semibold text-sm', { 'text-primaryGreen': activeIndex === index }]" >{{ item.question }}</h4>
              <svg v-if="activeIndex === index" class="h-5 w-5 text-primaryGreen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
              </svg>
              <svg v-else class="h-5 w-5 text-primaryGreen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div v-if="activeIndex === index" class="faq-answer mt-4">
              <p class="text-sm leading-relaxed">{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const faqs = ref([
    { question: "How can I stay informed about the Deputy Speaker's initiatives and activities?", answer: "Updates, news, and insights are regularly posted on the Deputy Speaker’s social media platforms, including Facebook, Twitter, and Instagram. Following him on these platforms is a great way to get real-time updates. You can also visit this website’s News and Media section for press releases, articles, and videos of recent activities and speeches." },
    { question: "What is the best way to share my opinions or concerns on specific legislation or issues?", answer: "Your opinions and concerns on issues are vital to the Deputy Speaker’s legislative process. The Deputy Speaker’s office is reachable by email, phone call, or snail mail. All concerns are noted by the Staff and passed on the Deputy Speaker who endeavors to consider and respond to them in a timely and thoughtful manner." },
    { question: "How can I find out about upcoming events or town hall meetings?", answer: "To stay informed about upcoming events, including town hall meetings, community gatherings, and public appearances, you can follow the Deputy Speaker on social media channels for frequent announcements and reminders. For any specific inquiries or details about an event, contacting the Deputy Speaker’s office directly is always an option. The Deputy Speaker remains committed to keeping his constituents well-informed and actively involved in his activities and encourages your participation." },
  ]);
  
  const activeIndex = ref(null);
  
  function toggle(index) {
    activeIndex.value = activeIndex.value === index ? null : index;
  }
  </script>
  
  <style lang="scss" scoped>
  .content {
    background-size: 85%;
    background-position: top center;
    background-repeat: no-repeat;
  }
  .faq-question {
    transition: color 0.3s ease;
    padding: 0.5rem 0;
  }
  .faq-answer {
    padding: 0.5rem 0;
  }
  </style>
  
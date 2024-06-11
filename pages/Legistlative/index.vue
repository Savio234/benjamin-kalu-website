<template>
  <main class="flex flex-col w-full">
    <section class="hero w-full h-[85vh] bg-primaryGreen flex flex-col sm:flex-row items-center">
      <div class="text-section w-full sm:w-7/12 py-16">
        <div class="content mx-auto w-[80%] flex flex-col gap-2">
          <h2 class="text-white font-semibold">Get up to speed⚡</h2>
          <h4 class="text-white">
            See the latest projects that we are up to and actively working on to better improve our consistuencies
          </h4>
        </div>
      </div>
      <div class="image-sect w-full sm:w-5/12 h-full">
        <NuxtImg
          src="https://res.cloudinary.com/damkhdi7d/image/upload/v1717604743/benjamin_kalu/ben_native_geeiy8.png"
          class="w-full h-full object-cover"
        />
      </div>
    </section>
    <section class="py-16 w-full">
      <div class="content mx-auto w-[90%] flex flex-col gap-4">
        <h3 class="font-semibold">Kalu’s Legislative Mission</h3>
        <p class="text-lg">
          Hon. Kalu has demonstrated commitment, capacity and dedication in various roles and organizations in both the
          private and public sectors, including his personal entities. His competencies include project development,
          marketing and media relations, fundraising, and diplomatic liaison and immigration advisory services, which is
          a core service delivered by his law firm, Silk Partners LLP. He has also excelled in human resources
          management, competitive analysis, market intelligence, positioning strategies, global marketing, organization
          studies, international business strategy, and information systems, among others, making him a valuable asset
          in any professional setting.
        </p>
        <p class="text-lg">
          Hon. Kalu's accomplishments and expertise have made a significant impact on society. As a dedicated and
          proactive legislator and member of the House of Representatives in the National Assembly of the Federal
          Government of Nigeria since 2019, he has played a vital role in shaping policies and implementing projects
          that contribute to national development. His agendas are as follows:
        </p>
        <div class="holder flex flex-col sm:flex-row gap-16 py-16">
          <div class="col-one w-full sm:w-1/2 flex flex-col gap-16">
            <div class="flex flex-col gap-4 box">
              <NuxtImg src="https://placehold.co/400X400" class="w-full h-60 rounded-xl object-cover" />
              <h4 class="font-semibold">Education</h4>
            </div>
            <div class="flex flex-col gap-4 box">
              <NuxtImg src="https://placehold.co/400X400" class="w-full h-60 rounded-xl object-cover" />
              <h4 class="font-semibold">Commerce</h4>
            </div>
          </div>
          <div class="col-one w-full sm:w-1/2 flex flex-col gap-16 mt-0 sm:mt-[10%]">
            <div class="flex flex-col gap-4 box">
              <NuxtImg src="https://placehold.co/400X400" class="w-full h-60 rounded-xl object-cover" />
              <h4 class="font-semibold">Empowering Indigenous Entrepreneurs and Innovation</h4>
            </div>
            <div class="flex flex-col gap-4 box">
              <NuxtImg src="https://placehold.co/400X400" class="w-full h-60 rounded-xl object-cover" />
              <h4 class="font-semibold">Prison reforms</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.hero {
  background-image: url('https://res.cloudinary.com/damkhdi7d/image/upload/v1717431103/benjamin_kalu/noise_c6ebjt.png');
  background-size: cover;
}
</style>

<template>
  <footer class="py-16 border-t border-borderMuted bg-footerGreen text-white">
    <div class="content mx-auto w-[85%] flex flex-col gap-8 sm:gap-32">
      <div class="top-row flex flex-col sm:flex-row w-full items-start gap-16">
        <div
          class="ls w-full sm:w-4/12 flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-0 justify-between"
        >
          <div
            class="flex gap-2 items-center font-[600] sticky top-0 cursor-pointer py-2 px-6 justify-center bg-white rounded-full"
          >
            <NuxtImg
              src="https://res.cloudinary.com/damkhdi7d/image/upload/v1718143069/benjamin_kalu/HonBenKaluLogo_qf7ylv.png"
              width="150px"
              height="45px"
            />
          </div>
          <div class="icon-row flex items-center gap-6">
            <a href="https://www.facebook.com/HonBenKalu?mibextid=JRoKGi" target="_blank" rel="noopener noreferrer">
              <SvgIcon name="facebook_icon" width="1.5rem" height="1.5rem" />
            </a>
            <a
              href="https://www.instagram.com/officialbenkalu?igsh=c3Q5emg4cDRpMHd2&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg-icon name="instagram_icon" width="1.5rem" height="1.5rem" />
            </a>
            <a
              href="https://twitter.com/OfficialBenKalu?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg-icon name="twitter_icon" width="1.5rem" height="1.5rem" />
            </a>
          </div>
        </div>
        <div class="rs w-full sm:w-8/12 grid grid-cols-2">
          <div class="footer-list flex flex-col w-fit gap-8">
            <h5 class="font-semibold text-white">Explore</h5>
            <ul class="flex flex-col gap-4 font-medium">
              <NuxtLink class="text-white" to="">Constitutional Review</NuxtLink>
              <NuxtLink class="text-white" to="/projects">PISEP-P</NuxtLink>
              <NuxtLink class="text-white" to="/blog">News & Update</NuxtLink>
            </ul>
          </div>
          <div class="footer-list flex flex-col w-fit gap-8">
            <h5 class="font-semibold text-white">Resources</h5>
            <ul class="flex flex-col gap-4 font-medium">
              <NuxtLink class="text-white" to="/bills">Kalu's Bills and Motions</NuxtLink>
              <NuxtLink class="text-white" to="">House Directory</NuxtLink>
              <NuxtLink class="text-white" to="">House Agenda</NuxtLink>
            </ul>
          </div>
        </div>
      </div>
      <div class="bottom-row border-t border-[#FFFFFF0F] pt-8">
        <p class="w-full sm:w-4/12 text-white">
          Want to stay updated with the activities of the deputy speaker, Join our
          <a
            href="mailto:info@benjaminkalu.com
"
            class="text-secondaryGreen cursor-pointer"
            >mailing</a
          >
          list.
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style></style>

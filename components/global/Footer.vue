<template>
  <footer class="py-16 border-t border-borderMuted">
    <div class="content mx-auto w-[85%] flex flex-col gap-8">
      <div class="top-row flex flex-col sm:flex-row w-full items-start gap-16">
        <div
          class="ls w-full sm:w-4/12 flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-0 justify-between"
        >
          <FullLogo />
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
            <h5 class="font-semibold">Explore</h5>
            <ul class="flex flex-col gap-4 font-medium">
              <NuxtLink to="">Constitutional Review</NuxtLink>
              <NuxtLink to="/projects">PISEP-P</NuxtLink>
              <NuxtLink to="/blog">News & Update</NuxtLink>
            </ul>
          </div>
          <div class="footer-list flex flex-col w-fit gap-8">
            <h5 class="font-semibold">Resources</h5>
            <ul class="flex flex-col gap-4 font-medium">
              <NuxtLink to="">House Order Paper</NuxtLink>
              <NuxtLink to="">Votes & Proceedings</NuxtLink>
              <NuxtLink to="">House Journals</NuxtLink>
              <NuxtLink to="">House Directory</NuxtLink>
              <NuxtLink to="">Senate Directory</NuxtLink>
            </ul>
          </div>
        </div>
      </div>
      <div class="bottom-row border-t border-borderMuted pt-8">
        <p class="w-full sm:w-4/12 text-[#5c3d44]">
          Do you have Enquiries? Chat with the office of the Deputy speaker. Alternatively, you can
          <a
            href="mailto:info@benjaminkalu.com
"
            class="text-primaryGreen cursor-pointer"
            >email</a
          >
          or <a href="tell:+234 807 406 1960" class="text-primaryGreen cursor-pointer">call ↗ </a>us.
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style></style>

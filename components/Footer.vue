<template>
  <footer>
    <div class="px-[5vw] pt-[10vw] pb-[4vw] lg:px-[3vw] lg:pt-[5vw] lg:pb-[2vw]">
      <div class="text-sm">
        <div class="flex items-end gap-10 uppercase leading-normal sm:gap-20">
          <SocialLinks class="[&_a]:link" />
          <ul>
            <li>Halenárska 10</li>
            <li>917 01 Trnava</li>
            <li>Slovakia</li>
          </ul>
        </div>
        <div class="mt-10 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
          <div class="sm:order-2">
            <NuxtLink href="mailto:info@cosamey.com" class="link">info@cosamey.com</NuxtLink>
          </div>
          <div class="sm:order-1">
            <p>&copy; {{ new Date().getFullYear() }} Cosa Mey. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<template>
  <header>
    <div class="fixed inset-x-0 top-0 z-10 w-full">
      <div class="px-[5vw] py-[4vw] lg:px-[3vw] lg:py-[2vw]">
        <div class="flex items-center justify-between">
          <NuxtLink href="/" aria-label="Back to home">
            <Logo class="h-8 w-auto" aria-hidden="true" />
          </NuxtLink>
          <div>
            <NuxtLink
              href="/contacts"
              class="group inline-flex gap-2 text-sm font-medium md:text-lg"
            >
              Start a project
              <span
                class="inline-block rotate-[270deg] transition ease-in-out group-hover:translate-x-2 group-hover:-translate-y-2"
              >
                ↘
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

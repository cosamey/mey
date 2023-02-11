<script setup>
import gsap from 'gsap';
import SplitType from 'split-type';

useServerSeoMeta({
  title: 'Small Team, Big Impact: Custom Web Development - Cosa Mey',
  description:
    'Transform your ideas into reality with our custom web development services. Specializing in web apps, presentation websites, design & UX in Slovakia.',
});

const title = ref();

onMounted(() => {
  const text = new SplitType(title.value, { types: 'words' });

  text.words.forEach((word) => {
    const child = document.createElement('div');
    child.className = 'word-child';
    child.append(...word.childNodes);

    word.appendChild(child);
  });

  const timeline = gsap
    .timeline()
    .addLabel('initial')
    .to(
      'h1',
      {
        opacity: 1,
      },
      'initial'
    )
    .to(
      'h1 .word',
      {
        webkitClipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 1.5,
        stagger: 0.05,
      },
      'initial'
    )
    .to(
      'h1 .word-child',
      {
        y: 0,
        duration: 1.5,
        stagger: 0.05,
      },
      'initial'
    )
    .to('#wrapper', {
      height: '80svh',
    });
});
</script>

<template>
  <section id="hero">
    <div id="wrapper" class="h-[100svh] px-[5vw] lg:px-[3vw]">
      <div class="grid h-full place-content-center">
        <div class="mx-auto text-center sm:w-4/5">
          <h1 ref="title" class="text-[12vw] uppercase leading-none opacity-0 sm:text-[6vw]">
            We create websites that power your business
          </h1>
        </div>
      </div>
    </div>
  </section>

  <section id="about">
    <div class="px-[5vw] py-[4vw] lg:px-[3vw] lg:py-[2vw]">
      <div class="sm:w-3/4">
        <p class="text-[6vw] leading-tight sm:text-[3vw]">
          We’re a small and independent team in Trnava, Slovakia creating custom web apps &
          beautiful presentation websites. We specialize in custom web development and UX/UI design.
          Let us bring your digital ideas to life with quality work and attention to detail.
        </p>
      </div>
    </div>
  </section>

  <section id="services">
    <div class="px-[5vw] py-[20vw] lg:px-[3vw] lg:py-[10vw]">
      <div class="grid gap-[5vw] md:grid-cols-4 md:gap-0">
        <div class="relative md:col-span-1">
          <div class="md:sticky md:top-20 md:pt-[4vw] lg:pt-[2vw]">
            <h2 class="text-[8vw] uppercase leading-none sm:text-[3vw]">
              Our <br class="hidden md:block" />services
            </h2>
          </div>
        </div>
        <div class="md:col-span-3">
          <ul
            class="space-y-[15vw] sm:space-y-0 sm:[&:hover_li:not(:hover)]:opacity-25 sm:[&_li]:transition-opacity sm:[&_li]:duration-[.4s]"
          >
            <ContentList path="/services" v-slot="{ list }">
              <template v-for="(service, index) in list" :key="service._path">
                <li
                  class="w-full sm:border-b sm:border-current sm:px-[2vw] sm:py-[4vw] lg:py-[2vw]"
                >
                  <div class="flex gap-[1vw]">
                    <div class="hidden w-1/12 sm:block">
                      <span class="font-light leading-normal sm:text-[3vw] lg:text-[2vw]">
                        {{ (index + 1).toString().padStart(2, '0') }}
                      </span>
                    </div>
                    <div>
                      <h3 class="text-[6vw] leading-normal sm:text-[3vw] lg:text-[2vw]">
                        {{ service.title }}
                      </h3>
                      <p
                        class="mt-[4vw] text-[4vw] sm:mt-[2vw] sm:text-[2vw] lg:mt-[1vw] lg:text-[1vw]"
                      >
                        {{ service.description }}
                      </p>
                    </div>
                  </div>
                </li>
              </template>
            </ContentList>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="cta">
    <div class="px-[5vw] pt-[10vw] pb-[4vw] lg:px-[3vw] lg:pt-[5vw] lg:pb-[2vw]">
      <NuxtLink href="/contacts" class="group text-[12vw] leading-none">
        Let’s talk
        <span
          class="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-[2vw]"
        >
          ↘
        </span>
      </NuxtLink>
    </div>
  </section>
</template>

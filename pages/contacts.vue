<script setup>
import gsap from 'gsap';
import SplitType from 'split-type';

useHead({
  bodyAttrs: {
    class: 'bg-black text-white',
  },
});

useServerSeoMeta({
  title: 'Get in touch with our web development team in Slovakia - Cosa Mey',
  description:
    'Reach out to our experienced team for custom web development services. Contact information available on our contacts page.',
});

const title = ref();

onMounted(() => {
  const text = new SplitType(title.value, { types: 'lines' });

  text.lines.forEach((line) => {
    let child = document.createElement('div');
    child.className = 'line-child';
    child.append(...line.childNodes);

    line.appendChild(child);
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
      'h1 .line',
      {
        webkitClipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 1.5,
        stagger: 0.1,
      },
      'initial'
    )
    .to(
      'h1 .line-child',
      {
        y: '-8%',
        duration: 1.5,
        stagger: 0.1,
      },
      'initial'
    )
    .to('[fade-animation]', {
      opacity: 1,
      duration: 1,
    });
});
</script>

<template>
  <section>
    <div class="px-[5vw] pt-[40vw] pb-[4vw] sm:pt-[20vw] lg:px-[3vw] lg:pt-[10vw] lg:pb-[2vw]">
      <div class="grid gap-x-[5vw] gap-y-[20vw] sm:grid-cols-12">
        <div class="sm:order-2 sm:col-span-7">
          <h1 ref="title" class="text-[12vw] uppercase leading-none opacity-0 sm:text-[6vw]">
            We’d love to hear from you.
          </h1>
          <p
            class="mt-[10vw] text-[6vw] leading-tight sm:mt-[5vw] sm:text-[3vw] lg:mt-[2.5vw] lg:text-[2vw]"
            fade-animation
          >
            Whether you want to tell us about a project, join our team, or just say hi, write to us!
          </p>
          <FormContact class="mt-[10vw] sm:mt-[5vw] lg:mt-[2.5vw]" fade-animation />
        </div>
        <div class="sm:order-1 sm:col-span-4" fade-animation>
          <div class="flex flex-col gap-[5vw]">
            <div>
              <h2
                class="text-[3.5vw] font-light uppercase leading-none tracking-wider sm:text-[1.5vw] lg:text-[1vw]"
              >
                Drop us a line
              </h2>
              <NuxtLink
                href="mailto:info@cosamey.com"
                class="mt-[.75vw] block w-fit text-[5vw] leading-tight tracking-wide transition-opacity duration-300 ease-in-out hover:opacity-50 sm:text-[3vw] lg:text-[1.5vw]"
              >
                info@cosamey.com
              </NuxtLink>
            </div>
            <div>
              <h2
                class="text-[3.5vw] font-light uppercase leading-none tracking-wider sm:text-[1.5vw] lg:text-[1vw]"
              >
                Visit us
              </h2>
              <NuxtLink
                href="https://goo.gl/maps/myRrzdtMGCbdQi4R6"
                target="_blank"
                class="mt-[.75vw] block w-fit text-[5vw] leading-tight tracking-wide transition-opacity duration-300 ease-in-out hover:opacity-50 sm:text-[3vw] lg:text-[1.5vw]"
              >
                Halenárska 10
                <br />
                917 01 Trnava
                <br />
                Slovakia
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="socials">
    <div class="px-[5vw] py-[20vw] lg:px-[3vw] lg:py-[10vw]">
      <div class="text-right sm:text-left">
        <h2
          class="text-[3.5vw] font-light uppercase leading-none tracking-wider sm:text-[1.5vw] lg:text-[1vw]"
        >
          Follow us
        </h2>
        <SocialLinks
          class="mt-[2vw] text-[10vw] uppercase leading-none tracking-tight sm:mt-[1vw] sm:text-[5vw] [&:hover_a:not(:hover)]:opacity-10 [&_a]:block [&_a]:transition-opacity [&_a]:duration-[.4s]"
        />
      </div>
    </div>
  </section>
</template>

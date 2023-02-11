<script setup>
import gsap from 'gsap';
import MouseFollower from 'mouse-follower';

onMounted(() => {
  MouseFollower.registerGSAP(gsap);

  const cursor = new MouseFollower();
});
</script>

<template>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</template>

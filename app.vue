<script setup>
import { load } from 'fathom-client';

useHead({
  link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  htmlAttrs: { lang: 'en' },
});

useServerSeoMeta({
  ogTitle: 'Small Team, Big Impact: Custom Web Development - Cosa Mey',
  ogDescription:
    'Transform your ideas into reality with our custom web development services. Specializing in web apps, presentation websites, design & UX in Slovakia.',
  ogImage: 'https://cosamey.com/open-graph.png',
  themeColor: '#F7413B',
});

onMounted(() => {
  load('VHHRCACC', {
    url: 'https://ideal-novel.cosamey.com/script.js',
    spa: 'auto',
  });
});
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#F7413B" />
    <NuxtPage />
  </NuxtLayout>
</template>

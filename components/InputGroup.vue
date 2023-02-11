<script setup>
defineProps({
  id: String,
  label: String,
  optional: {
    type: Boolean,
    default: false
  },
});
</script>

<template>
  <div>
    <label :for="id" class="text-[5vw] sm:text-[3vw] lg:text-[1.5vw]">
      {{ label }}
      <span v-if="optional" class="opacity-50">(optional)</span>
    </label>
    <slot />
  </div>
</template>

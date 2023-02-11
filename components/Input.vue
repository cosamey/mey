<script setup>
defineProps({
  modelValue: String,
});

defineEmits(['update:modelValue']);
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="w-full border-0 border-b border-white/50 bg-transparent px-0 py-[.5vw] text-[4vw] leading-tight placeholder-white focus:border-white focus:outline-none focus:ring-0 sm:text-[2vw] lg:text-[1vw]"
  />
</template>

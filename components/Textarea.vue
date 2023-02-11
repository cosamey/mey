<script setup>
defineProps({
  modelValue: String,
});

defineEmits(['update:modelValue']);
</script>

<template>
  <textarea
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="min-h-[40vw] w-full border-0 border-b border-white/50 bg-transparent px-0 py-[.5vw] text-[4vw] leading-tight placeholder-white focus:border-white focus:outline-none focus:ring-0 sm:min-h-[20vw] sm:text-[2vw] lg:min-h-[10vw] lg:text-[1vw]"
  ></textarea>
</template>

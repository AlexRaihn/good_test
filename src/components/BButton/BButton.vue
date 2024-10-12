<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'black',
  },
})
</script>

<template>
  <span
    :class="{ 'bg-black text-white': type == 'black' }"
    class="py-2 px-3 cursor-pointer"
  >
    <slot />
  </span>
</template>

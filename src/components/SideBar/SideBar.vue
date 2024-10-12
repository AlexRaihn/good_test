<template>
  <div class="fixed top-0 left-0 z-10 h-full w-full flex">
    <div
      class="bg-white absolute h-full border-black border-r-[1px] p-2 flex flex-col gap-4 animate__animated animate__fadeInLeftBig"
    >
      <div class="flex justify-end items-center">
        <div @click="closeSideBar" class="font-bold cursor-pointer">x</div>
      </div>
      <div class="p-6">
        <slot />
      </div>
    </div>
    <div class="bg-[#00000080] w-full h-full" @click="closeSideBar"></div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close'])

function closeSideBar() {
  emit('close')
}
</script>

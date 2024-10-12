<template>
  <div
    class="border-b-[1px] border-black sticky top-0 bg-white xl:border-none flex items-end lg:items-center justify-between p-4"
  >
    <div class="flex flex-col gap-4 lg:hidden">
      <img
        src="@/assets/HomeVIew/collapse.svg"
        class="cursor-pointer pb-1"
        alt="Изображение не доступно"
        @click="toggleNavCollapse"
      />
    </div>
    <div class="flex gap-4">
      <slot name="buttons" />
    </div>
    <div class="text-[#FF6E1F] flex gap-4 max-lg:hidden">
      <slot name="refs" />
    </div>
    <div class="flex gap-4">
      <slot name="contacts" />
    </div>
    <SideBar v-if="isOpenNavCollapse" @close="toggleNavCollapse">
      <div class="text-[#FF6E1F] flex flex-col gap-4">
        <slot name="refs" />
      </div>
    </SideBar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import SideBar from '@/components/SideBar/SideBar.vue'

const isOpenNavCollapse = ref(false)

function toggleNavCollapse() {
  isOpenNavCollapse.value = !isOpenNavCollapse.value
}
</script>

<template>
  <NavBar>
    <template #buttons>
      <BButton>Lorem</BButton>
    </template>
    <template #refs>
      <router-link :to="{ name: 'HomeView' }">Home</router-link>
      <router-link :to="{ name: 'AboutView' }">About</router-link>
    </template>
    <template #contacts>
      <img
        alt="Изображение не доступно"
        class="w-[30px] h-[30px]"
        src="@/assets/HomeVIew/email.svg"
      />
      <img
        alt="Изображение не доступно"
        class="w-[30px] h-[30px]"
        src="@/assets/HomeVIew/phone.svg"
      />
    </template>
  </NavBar>
  <RouterView />
</template>
<script setup lang="ts">
import BButton from '@/components/BButton/BButton.vue'
import NavBar from '@/components/NavBar/NavBar.vue'
</script>

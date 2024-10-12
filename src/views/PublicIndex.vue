<template>
  <div>
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
    <router-view />
  </div>
</template>
<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'
import BButton from '@/components/BButton/BButton.vue'
</script>

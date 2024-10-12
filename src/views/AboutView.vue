<template>
  <div class="flex flex-col p-4 gap-4">
    <div>Для создания этого проекты были применены следующие технологии</div>
    <div class="flex flex-col p-4 gap-4">
      <div>- Vue 3</div>
      <div>- Vite</div>
      <div>- TypeScript</div>
      <div>- Tailwind</div>
      <div>- Animate CSS</div>
    </div>
    <div>
      Помимо этого в проект установлена Pinia и сделан httpClient для работы с
      API, если это потребуется
    </div>
  </div>
</template>
<script setup lang="ts">
import { httpClient } from '@/stores/httpClient'

httpClient.get()
</script>

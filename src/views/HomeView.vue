<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import mainImageXXL from '../assets/HomeVIew/main_image.png'
import mainImageXL from '../assets/HomeVIew/main_image_lg.png'
import mainImageLG from '../assets/HomeVIew/main_image_md.png'
import mainImageMD from '../assets/HomeVIew/main_image_md_1.png'
import BButton from '@/components/BButton/BButton.vue'

const imgArray = [mainImageXXL, mainImageXL, mainImageLG, mainImageMD]

const resultImage = ref('') // Используем ref для реактивности

function updateImageBasedOnScreenWidth() {
  const screenWidth = window.innerWidth

  if (screenWidth >= 1920) {
    resultImage.value = imgArray[0]
  } else if (screenWidth > 1200) {
    resultImage.value = imgArray[1]
  } else if (screenWidth > 800) {
    resultImage.value = imgArray[2]
  } else {
    resultImage.value = imgArray[3]
  }
}

onMounted(() => {
  updateImageBasedOnScreenWidth()
  window.addEventListener('resize', updateImageBasedOnScreenWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateImageBasedOnScreenWidth)
})
</script>

<template>
  <div
    class="flex flex-col xl:flex-row h-full gap-4 xl:border-black xl:border-[1px]"
  >
    <div
      class="w-full mx-auto px-2 py-32 flex flex-col justify-center items-start text-left md:items-center md:text-center xl:items-baseline xl:text-left gap-4 sm:items-start sm:text-left"
    >
      <div
        class="lg:text-xxxl md:text-[48px] text-xxl font-600 font-bold animate__animated animate__fadeInDownBig -z-10"
      >
        Мы любим животных и поддерживаем их
      </div>
      <div
        class="text-lg md:text-xl animate__animated animate__backInLeft -z-10"
      >
        Один из проверенных способов это сделать — помочь благотворительному
        фонду
      </div>
      <div class="animate__animated animate__backInUp -z-10">
        <BButton class="text-lg"> Кнопка добра </BButton>
      </div>
    </div>
    <div
      class="w-full p-2 flex gap-4 flex-col xl:flex-row justify-center items-center max-w-xl:border-t-[1px] border-black xl:border-black xl:border-l-[1px]"
    >
      <hr class="w-full border-black xl:hidden" />
      <img
        :src="resultImage"
        class="object-cover w-full animate__animated animate__fadeInRight -z-10"
        alt="изображение не доступно"
      />
    </div>
  </div>
</template>

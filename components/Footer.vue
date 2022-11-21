<template>
  <footer class="bg-gray-100 mt-auto p-2 flex flex-row items-center justify-between">
    <div class="flex flex-row items-center">
      <img alt="Logo" :src="staticAssets + '/images/monstagram.svg'" class="w-8 h-8 mr-2"> Monstagram
    </div>
    <span>© Monstagram</span>
  </footer>
</template>

<script setup lang="ts">
const { public: { staticAssets } } = useRuntimeConfig()
</script>

<template>
  <div class="app flex flex-col min-h-screen">
    <div class="bg-purple-400 p-2 flex flex-row items-center">
      <img alt="Logo" :src="staticAssets + '/images/monstagram.svg'" class="w-8 h-8 mr-2"> Monstagram
    </div>
    <NuxtPage class="page" />
    <div class="flex-1" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { public: { staticAssets } } = useRuntimeConfig()
</script>

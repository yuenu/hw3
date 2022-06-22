<script setup lang="ts">
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <div class="px-4 mx-auto max-w-7xl sm:px-6">
    <router-view></router-view>
  </div>
</template>

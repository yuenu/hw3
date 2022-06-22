<template>
  <h1 class="py-10 text-3xl text-center">購物車</h1>
  <div class="flex gap-8">
    <div
      v-if="cartStore.getCart.length === 0"
      class="flex flex-col items-center justify-center w-4/5 gap-1 border"
    >
      <span class="text-gray-500">目前購物車裡沒有東西喔！</span>
    </div>
    <div v-else class="flex flex-col w-4/5 gap-1">
      <ShoppingCartItem
        v-for="course in cartStore.getCart"
        :course="course"
        :key="course.id"
      />
    </div>
    <div class="w-1/5">
      <h2 class="mb-2 text-gray-700">Total:</h2>
      <p class="mb-5 text-4xl font-bold">NT${{ cartStore.getPrices }}</p>
      <button
        class="w-full h-14 text-xl rounded-sm bg-[#a435f0] hover:bg-[#7325a3] text-gray-50"
      >
        結帳
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import ShoppingCartItem from '../components/ShoppingCartItem.vue'
import { useCartStore } from '../store/cart'

const cartStore = useCartStore()
</script>

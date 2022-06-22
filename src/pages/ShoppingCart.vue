<template>
  <h1 class="py-10 text-3xl text-center">購物車</h1>
  <div class="flex flex-col items-center gap-8 lg:flex-row">
    <div
      v-if="cartStore.getCart.length === 0"
      class="flex flex-col items-center justify-center w-full h-40 gap-1 border sm:w-4/5"
    >
      <span class="text-gray-500">目前購物車裡沒有東西喔！</span>
    </div>
    <div v-else class="flex flex-col w-full gap-1 sm:w-4/5">
      <button
        @click="cartStore.removeAllFromCart"
        class="w-20 m-4 ml-auto border border-red-500 hover:bg-red-500 hover:text-gray-50"
      >
        移除全部
      </button>
      <ShoppingCartItem
        v-for="course in cartStore.getCart"
        :course="course"
        :key="course.id"
      />
    </div>
    <div
      class="flex items-center justify-between w-full sm:w-4/5 lg:w-1/5 -order-1 lg:order-1 lg:block"
    >
      <div>
        <h2 class="mb-2 text-gray-700">Total:</h2>
        <p class="mb-5 text-4xl font-bold">NT${{ cartStore.getPrices }}</p>
      </div>
      <button
        class="w-40 lg:w-full h-14 text-xl rounded-sm bg-[#a435f0] hover:bg-[#7325a3] text-gray-50"
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

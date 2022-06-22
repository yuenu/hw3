<template>
  <div class="px-4 mx-auto max-w-7xl sm:px-6">
    <div
      class="flex items-center justify-center py-6 font-bold border-b-2 border-gray-100 select-none gap-14 whitespace-nowrap"
    >
      <router-link to="/" class="text-gray-500 hover:text-gray-900">
        課程清單
      </router-link>
      <router-link
        to="/shopping-cart"
        class="text-gray-500 hover:text-gray-900"
      >
        購物車
        <span
          v-show="cartStore.getCart.length > 0"
          class="inline-flex items-center justify-center w-5 h-5 text-sm text-red-500 border border-red-500 rounded-full"
        >
          {{ cartStore.getCart.length }}
        </span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../store/cart'

const cartStore = useCartStore()
</script>

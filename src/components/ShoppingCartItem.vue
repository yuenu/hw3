<template>
  <div class="flex h-32 gap-5 p-2 border">
    <img
      class="max-w-[110px] object-cover"
      :src="course.picture"
      :title="course.title"
      alt=""
    />
    <div>
      <h2 class="mb-2 font-bold">{{ course.title }}</h2>
      <h4 class="text-[#a435f0]">NT$ {{ course.price }}</h4>
    </div>
    <div class="justify-end flex-1 gap-2 mr-4 text-end">
      <button
        @click="cartStore.removeCourseFromCart(course.id)"
        class="text-red-600"
      >
        移除
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Course } from '../type'
import { useCartStore } from '../store/cart'

defineProps<{ course: Course }>()

const cartStore = useCartStore()
</script>

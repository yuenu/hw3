<template>
  <h1 class="py-10 text-3xl text-center">購物車</h1>
  <div class="flex gap-8">
    <div class="flex flex-col w-4/5 gap-1" v-if="allCourseData.length > 0">
      <ShoppingCartItem
        v-for="course in allCourseData"
        :course="course"
        :key="course.id"
      />
    </div>
    <div class="w-1/5">
      <h2 class="mb-2 text-gray-700">Total:</h2>
      <p class="mb-5 text-4xl font-bold">NT${{ totalPrice }}</p>
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
import { ref } from 'vue'
import { Course } from '../type'
const allCourseData = ref<Course[]>([
  {
    id: 1,
    title: '【手作烘焙坊 -【季節限定】玫瑰花檸檬塔',
    status: '報名當中',
    picture:
      'https://images.unsplash.com/photo-1600856450294-92b3a7062a3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    price: '1200',
  },
  {
    id: 2,
    title: '自由花藝體驗坊：希臘神話 X 花藝課程',
    status: '尚未開始',
    picture:
      'https://images.unsplash.com/photo-1457089328109-e5d9bd499191?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=663&q=80',
    price: '1500',
  },
  {
    id: 3,
    title: '甘杯甜點料理室 - 歐式鹹派料理課',
    status: '尚未開始',
    picture:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    price: '1800',
  },
  {
    id: 4,
    title: '創藝捏陶趣：溫暖手捏陶家飾系',
    status: '未達低標',
    picture:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    price: '980',
  },
  {
    id: 5,
    title: 'Eye Candle 品味生活 - 親手做花草香氛蠟燭',
    status: '報名當中',
    picture:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    price: '980',
  },
])
const totalPrice = 110
</script>

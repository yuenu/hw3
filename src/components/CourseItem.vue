<template>
  <div
    :class="[
      'overflow-hidden rounded-lg shadow-lg hover:shadow-xl bg-gray-60',
      isCloseStatus(course.status) && 'opacity-50',
    ]"
  >
    <img
      class="object-cover w-full h-80 xl:h-48"
      :src="course.picture"
      :title="course.title"
      alt=""
    />
    <div
      class="p-4 h-[calc(100%-20rem)] xl:h-[calc(100%-12rem)] flex flex-col gap-4"
    >
      <h2 class="text-2xl xl:text-xl">{{ course.title }}</h2>
      <div class="flex justify-between pr-2 text-xl">
        <p :class="mappingStatusColor[course.status]">
          {{ course.status }}
        </p>
        <p class="text-blue-600">{{ course.price }}</p>
      </div>

      <button
        :class="[
          'w-full h-10 mt-auto rounded-sm text-stone-600 bg-sky-300 hover:bg-sky-400 ',
          !isCloseStatus(course.status) && 'active:ring ring-pink-500',
          isCloseStatus(course.status) && 'cursor-not-allowed',
        ]"
        type="button"
        :disabled="isCloseStatus(course.status)"
      >
        加入購物車
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Course } from '../type'

defineProps<{ course: Course }>()

interface IDictionary<TValue> {
  [id: string]: TValue
}

const mappingStatusColor: IDictionary<string> = {
  報名當中: 'text-emerald-600',
  尚未開始: 'text-gray-400',
  未達低標: 'text-rose-600',
}

function isCloseStatus(status: string) {
  return status === '尚未開始'
}
</script>

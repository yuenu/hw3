<template>
  <h1 class="py-10 text-3xl text-center">課程清單</h1>
  <div
    class="flex items-center justify-center mt-20"
    v-if="courseStore.getCourses.length === 0"
  >
    <Spinner />
  </div>
  <div
    v-else
    class="grid grid-cols-1 gap-8 px-2 mb-20 xl:grid-cols-4 md:grid-cols-2"
  >
    <CourseItem
      v-for="item in courseStore.getCourses"
      :course="item"
      :key="item.id"
    />
  </div>
</template>

<script setup lang="ts">
import CourseItem from '../components/CourseItem.vue'
import { useCoursesStore } from '../store/courses'
import Spinner from '../components/utils/Spinner.vue'

const courseStore = useCoursesStore()

courseStore.fetchCourseData()
</script>

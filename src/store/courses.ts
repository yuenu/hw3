import { defineStore } from 'pinia'
import { Course } from '../type'
import { fetcher } from '../api'

export const useCoursesStore = defineStore('courses', {
  state: () => {
    return { courses: [] as Course[] }
  },
  persist: true,
  getters: {
    getCourses: (state) => {
      return state.courses
    },
  },
  actions: {
    addCourse(data: Course[]) {
      this.courses = data
    },

    async fetchCourseData() {
      if (this.courses.length === 0) {
        const res = await fetcher()
        this.addCourse(res)
      }
    },
  },
})

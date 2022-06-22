import { defineStore } from 'pinia'
import { Course } from '../type'
import { useCoursesStore } from './courses'

export const useCartStore = defineStore('shoppingCart', {
  state: () => {
    return { shoppingCart: [] as Course[], prices: 0 }
  },
  persist: true,
  getters: {
    getCart: (state) => {
      return state.shoppingCart
    },
    getPrices: (state) => {
      return state.prices
    },
  },
  actions: {
    addCourseToCart(courseId: number) {
      const courses = useCoursesStore()
      const targetCourse = courses.getCourses.filter(
        (course) => course.id === courseId
      )[0]
      this.shoppingCart.push(targetCourse)
      this.prices += parseInt(targetCourse.price, 10)
    },
    removeCourseFromCart(courseId: number) {
      const targetCourse = this.shoppingCart.filter(
        (course) => course.id === courseId
      )[0]

      const targetCourseIndex = this.shoppingCart.indexOf(targetCourse)
      this.shoppingCart.splice(targetCourseIndex, 1)
      this.prices -= parseInt(targetCourse.price, 10)
    },
    removeAllFromCart() {
      this.shoppingCart = []
      this.prices = 0
    },
  },
})

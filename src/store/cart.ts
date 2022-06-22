import { defineStore } from 'pinia'
import { Course } from '../type'
import { useCoursesStore } from './courses'
import { useSnackbarStore } from './snackbar'

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
      const coursesStore = useCoursesStore()
      const snackbarStore = useSnackbarStore()
      const targetCourse = coursesStore.getCourses.filter(
        (course) => course.id === courseId
      )[0]

      const hasInTheCart = this.shoppingCart.indexOf(targetCourse) > -1

      if (hasInTheCart) {
        snackbarStore.toggleSnackbar('error', '此課程已經在購物車裡了喔！')
      }

      if (!hasInTheCart) {
        this.shoppingCart.push(targetCourse)
        this.prices += parseInt(targetCourse.price, 10)
        snackbarStore.toggleSnackbar('success', '成功加入購物車囉！')
      }
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

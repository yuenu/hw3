import { defineStore } from 'pinia'

const delay = (t: number) => new Promise((r) => setTimeout(r, t))

export const useSnackbarStore = defineStore('snackbar', {
  state: () => {
    return {
      isShow: false,
      message: '',
      type: 'success',
    }
  },
  getters: {
    getMessage: (state) => {
      return state.message
    },
    getIsShow: (state) => {
      return state.isShow
    },
    getType: (state) => {
      return state.type
    },
  },
  actions: {
    async toggleSnackbar(type: 'success' | 'error', inputMessage: string) {
      if (this.isShow) return
      this.type = type
      this.message = inputMessage
      this.isShow = true

      await delay(1000)

      this.message = ''
      this.isShow = false
    },
  },
})

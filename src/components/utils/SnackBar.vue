<template>
  <div
    v-show="snackbarStore.isShow"
    :class="[
      'fixed z-10 px-10 py-4 text-center rounded-lg left-1/2 -top-10',
      'transition-transform -translate-x-1/2',
      snackbarStore.getType === 'success' && 'bg-blue-500 text-gray-50',
      snackbarStore.getType === 'error' && 'bg-slate-800 text-gray-50',
      snackbarStore.isShow && 'top-20',
    ]"
  >
    {{ snackbarStore.getMessage }}
  </div>
</template>

<script lang="ts" setup>
import { useSnackbarStore } from '../../store/snackbar'

const snackbarStore = useSnackbarStore()
</script>

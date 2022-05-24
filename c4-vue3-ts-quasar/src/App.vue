<template>
  <Index />
</template>

<script setup lang="ts">
  import { defineAsyncComponent } from 'vue'
  const Index = defineAsyncComponent(() => import('./view/Index.vue'))
</script>

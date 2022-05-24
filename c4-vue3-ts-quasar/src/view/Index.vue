<template>
  <main style="min-height: 100vh" class="flex full-height full-width column wrap">
    <Header />

    <Form />

    <q-separator class="q-my-sm" />

    <div class="flex col-grow">
      <Body />
    </div>

    <Footer />
  </main>
</template>

<script setup lang="ts">
  import { defineAsyncComponent } from 'vue'

  const Header = defineAsyncComponent(() => import('../layouts/Header.vue'))
  const Form = defineAsyncComponent(() => import('../layouts/Form.vue'))
  const Body = defineAsyncComponent(() => import('../layouts/Body.vue'))
  const Footer = defineAsyncComponent(() => import('../layouts/Footer.vue'))
</script>

<template>
  <header>
    <div class="q-pa-md q-gutter-y-sm">
      <q-toolbar>
        <q-toolbar-title>
          <q-img src="/logo.png" alt="logo" width="120px" />
        </q-toolbar-title>

        <q-icon
          class="q-mr-md"
          :color="isOnline ? 'positive' : 'negative'"
          name="fa-solid fa-network-wired"
          size="xs"
        />
        <q-btn outline dense class="q-px-sm" color="primary" icon="fa-brands fa-github" label="GitHub" :href="url" />
      </q-toolbar>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useMainStore } from '../store'

  const mainStore = useMainStore()
  const { isOnline } = storeToRefs(mainStore)

  // GitHub URL
  const url = 'https://github.com/kensoz/Rrea-client-collection/tree/master/c4-vue3-ts-quasar'
</script>

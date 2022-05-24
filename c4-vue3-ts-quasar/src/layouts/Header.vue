<template>
  <header>
    <div class="q-pa-md q-gutter-y-sm">
      <q-toolbar>
        <q-toolbar-title class="text-h5 text-weight-bold"> Rrea<span class="text-primary">C4</span> </q-toolbar-title>

        <q-icon
          class="q-mr-md"
          :color="isOnline ? 'positive' : 'negative'"
          name="fa-solid fa-network-wired"
          size="xs"
        />
        <q-btn outline dense class="q-px-sm" color="primary" icon="fa-brands fa-github" label="GitHub" to="#" />
      </q-toolbar>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useMainStore } from '../store'

  const mainStore = useMainStore()
  const { isOnline } = storeToRefs(mainStore)
</script>

<template>
  <section class="row q-mx-md-xl q-ml-xs-none q-mr-xs-md q-my-md q-col-gutter-md">
    <!-- 指定されたユーザーがいない場合 -->
    <div v-if="users.length === 0" class="">指定されたユーザーがいません</div>

    <!-- ユーザーデータカード -->
    <template v-for="item in users" :key="item.id">
      <q-card class="row no-wrap col-12 col-sm-6 col-md-4" flat>
        <q-card-section :class="`bg-${bgColorCreator(Number(item.areaCode))}`" class="col-5 col-md-4">
          <q-img src="/image.png" />
        </q-card-section>

        <q-card-section :class="`bg-${bgColorCreator(Number(item.areaCode))}`" class="col">
          <div class="text-h6">
            {{ item.name }}
          </div>

          <div class="text-subtitle2">
            {{ item.nameSpell }}
          </div>

          <div>種族:{{ item.race }}</div>

          <div>職務:{{ item.job }}</div>

          <div>能力:{{ item.skill }}</div>

          <div>利用時間:{{ item.YYYYMMDD }} {{ item.HHMMss.substring(0, 5) }}</div>
        </q-card-section>
      </q-card>
    </template>
  </section>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useMainStore } from '../store'
  import useHooks from '../hook'
  import 'quasar/src/css/flex-addon.sass'

  // hooks
  const { bgColorCreator } = useHooks()

  // store
  const mainStore = useMainStore()
  const { users } = storeToRefs(mainStore)
</script>

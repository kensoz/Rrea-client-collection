<template>
  <section class="row wrap justify-between q-mx-xl">
    <!-- フォームオプション start -->
    <div class="column col-12 col-md-auto">
      <!-- 場所選択 -->
      <div class="row">
        <q-select
          v-model="params.areaCode"
          class="q-mb-sm col-12 col-md-6"
          :options="forms.area"
          option-value="value"
          option-label="text"
          emit-value
          map-options
          outlined
          dense
        />
      </div>

      <!-- 氏名選択 -->
      <div>
        <q-checkbox
          v-for="item in forms.name"
          :key="item.text"
          v-model="params.nameCode"
          :val="item.value"
          :label="item.text"
          dense
        />
      </div>

      <!-- 職務選択 -->
      <div class="q-my-sm">
        <q-checkbox
          v-for="item in forms.job"
          :key="item.text"
          v-model="params.jobCode"
          :val="item.value"
          :label="item.text"
          dense
        />
      </div>

      <!-- 種族選択 -->
      <div>
        <q-checkbox
          v-for="item in forms.race"
          :key="item.text"
          v-model="params.raceCode"
          :val="item.value"
          :label="item.text"
          dense
        />
      </div>

      <!-- オプション -->
      <div class="q-my-sm">
        <q-btn
          outline
          dense
          class="q-pa-sm"
          color="primary"
          icon="fa-solid fa-arrow-rotate-right"
          label="リセット"
          @click="reset()"
        />
      </div>
    </div>
    <!-- フォームオプション end -->

    <!-- 場所インフォメーション start -->
    <div class="col-12 col-md-2">
      <template v-for="item in counts" :key="item.area">
        <q-chip square size="md" :color="bgColorCreator(item.value)">
          {{ `${item.area}:${item.count}` }}
        </q-chip>
      </template>
    </div>
    <!-- 場所インフォメーション end -->
  </section>
</template>

<script setup lang="ts">
  import { reactive, watchEffect, onMounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useMainStore } from '../store'
  import useHooks from '../hook'
  import type { IParams } from '../types'

  // hooks
  const { bgColorCreator } = useHooks()

  // store
  const mainStore = useMainStore()
  const { getFormData, getBodyData } = mainStore
  const { forms, counts } = storeToRefs(mainStore)

  // 定数、変数定義
  let params = reactive<IParams>({
    areaCode: '',
    jobCode: [],
    nameCode: [],
    raceCode: [],
  })

  // formを監視、変更があればデータを取得
  watchEffect((): void => {
    getBodyData(params)
  })

  // リセット
  const reset = (): void => {
    Object.assign(params, { areaCode: '', jobCode: [], nameCode: [], raceCode: [] })
  }

  // 起動の時、form情報を取得
  onMounted(async (): Promise<void> => {
    await getFormData()
  })
</script>

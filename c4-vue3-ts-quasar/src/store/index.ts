import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type { IForms, IFormData, ICounts, IUserSchema, IParams, IBodyData } from '../types'

// Pinia Composition API mode
// https://pinia.vuejs.org/introduction.html
export const useMainStore = defineStore('main', () => {
  // ネットワーク状態
  const isOnline = ref<boolean>(true)

  // form リクエスト
  const forms = reactive({}) as IForms

  const getFormData = async (): Promise<void> => {
    await axios
      .get<IFormData>('/api/v1/form')
      .then((res): void => {
        Object.assign(forms, res.data.result)
        forms.area.unshift({ value: '', text: '全部' })
      })
      .catch((): void => {
        isOnline.value = false
      })
  }

  // data リクエスト
  const counts = ref<ICounts[]>([])
  const users = ref<IUserSchema[]>([])

  const getBodyData = async (params: IParams): Promise<void> => {
    await axios
      .post<IBodyData>('/api/v1/data', params)
      .then((res): void => {
        counts.value = res.data.result.count
        users.value = res.data.result.user
      })
      .catch((): void => {
        isOnline.value = false
      })
  }

  return { isOnline, forms, getFormData, counts, users, getBodyData }
})

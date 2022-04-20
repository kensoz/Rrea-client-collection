<script lang="ts">
  import { onMount } from 'svelte'
  import type { IForms, IFormData, IParams, IBodyData, ICounts, IUserSchema } from '../types'
  import useColor from '../script/hooks'
  import mitt from '../script'
  import axios from 'axios'

  // 定数、変数定義
  // const timer: number = 10000
  let isOnline: boolean = true

  // form リクエスト
  let forms: IForms = {
    area: [],
    name: [],
    job: [],
    race: [],
  }

  const getFormData = async (): Promise<void> => {
    await axios
      .get<IFormData>('/api/v1/form')
      .then((res): void => {
        forms = res.data.result
      })
      .catch((): void => {
        isOnline = false
        mitt.emit('changeNetwork', isOnline)
      })
  }

  // data リクエスト
  let counts: ICounts[] = []
  let users: IUserSchema[] = []
  let params: IParams = {
    areaCode: '',
    jobCode: [],
    nameCode: [],
    raceCode: [],
  }

  const getBodyData = async (e: IParams): Promise<void> => {
    await axios
      .post<IBodyData>('/api/v1/data', e)
      .then((res): void => {
        counts = res.data.result.count
        users = isDefaultSort
          ? res.data.result.user
          : res.data.result.user.sort((a: IUserSchema, b: IUserSchema): number => {
              return Number(b.areaCode) - Number(a.areaCode)
            })

        mitt.emit('sendData', users)

        // 自動ポーリングでデータを更新
        // setTimeout((): void => {
        //   getBodyData(e)
        // }, timer)
      })
      .catch((): void => {
        isOnline = false
        mitt.emit('changeNetwork', isOnline)
      })
  }

  // form リセット
  const reset = (): void => {
    params = { areaCode: '', jobCode: [], nameCode: [], raceCode: [] }
  }

  // ソート順
  let isDefaultSort: boolean = true

  const sort = async (): Promise<void> => {
    isDefaultSort = !isDefaultSort
    await getBodyData(params)
  }

  // formを監視、変更があればデータを取得
  $: {
    isOnline && getBodyData(params)
  }

  // 起動の時、form情報を取得
  onMount(async (): Promise<void> => {
    await getFormData()
  })
</script>

<section class="my-5">
  <!-- フォーム -->
  <div class="columns is-align-content-center p-0 m-0">
    <!-- 場所選択 -->
    <div class="column is-1 is-full-mobile p-0 m-0">場所：</div>
    <div class="column is-four-fifths p-0 m-0">
      <div class="select is-primary">
        <select bind:value={params.areaCode} class="has-icons-left" style="width: 350px;">
          <option value="" selected>全場所</option>
          {#each forms.area as item (item.value)}
            <option value={item.value}>{item.text}</option>
          {/each}
        </select>
      </div>
    </div>
  </div>

  <!-- 氏名選択 -->
  <div class="columns p-0 m-0">
    <div class="column is-1 is-full-mobile p-0 m-0">氏名：</div>
    <div class="column is-flex is-flex-direction-row is-align-content-center is-flex-wrap-wrap p-0 m-0">
      {#each forms.name as item, i (item.value)}
        <input type="checkbox" id={`name-box-${i}`} bind:group={params.nameCode} value={item.value} />
        <label for={`name-box-${i}`} class="is-size-6 has-text-weight-medium mr-3">{item.text}</label>
      {/each}
    </div>
  </div>

  <!-- 職務選択 -->
  <div class="columns p-0 m-0">
    <div class="column is-1 is-full-mobile p-0 m-0">職務：</div>
    <div class="column is-flex is-flex-direction-row is-align-content-center is-flex-wrap-wrap p-0 m-0">
      {#each forms.job as item, i (item.value)}
        <input type="checkbox" id={`job-box-${i}`} bind:group={params.jobCode} value={item.value} />
        <label for={`job-box-${i}`} class="is-size-6 has-text-weight-medium mr-3">{item.text}</label>
      {/each}
    </div>
  </div>

  <!-- 種族選択 -->
  <div class="columns p-0 m-0">
    <div class="column is-1 is-full-mobile p-0 m-0">種族：</div>
    <div class="column is-flex is-flex-direction-row is-align-content-center is-flex-wrap-wrap p-0 m-0">
      {#each forms.race as item, i (item.value)}
        <input type="checkbox" id={`race-box-${i}`} bind:group={params.raceCode} value={item.value} />
        <label for={`race-box-${i}`} class="is-size-6 has-text-weight-medium mr-3">{item.text}</label>
      {/each}
    </div>
  </div>

  <!-- 在席情報 -->
  <div class="columns is-mobile is-multiline mt-1">
    {#each counts as item (item.value)}
      <div
        class="column is-4-mobile is-1-desktop is-1-tablet has-text-centered has-text-weight-medium p-1"
        style={`background-color:${useColor(Number(item.value))}`}
      >
        {item.area}: {item.count}
      </div>
    {/each}
  </div>

  <!-- オプション -->
  <div>
    <button class="button is-primary is-light mr-2" on:click={sort}>
      <span class="icon">
        <i class="fa-solid fa-sort" />
      </span>
    </button>

    <button class="button is-primary is-light" on:click={reset}>
      <span class="icon">
        <i class="fa-solid fa-arrow-rotate-left" />
      </span>
      <span>リセット</span>
    </button>
  </div>
</section>

<style>
  /*Checkboxes styles*/
  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox'] + label {
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 20px;
    cursor: pointer;
  }

  input[type='checkbox'] + label:last-child {
    margin-bottom: 0;
  }

  input[type='checkbox'] + label:before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border: 2px solid hsl(171, 100%, 41%);
    position: absolute;
    left: 0;
    top: 5px;
  }

  input[type='checkbox']:checked + label:before {
    width: 10px;
    top: 0;
    left: 5px;
    border-radius: 0;
    opacity: 1;
    border-top-color: transparent;
    border-left-color: transparent;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
</style>

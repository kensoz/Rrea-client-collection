<script lang="ts">
  import { onMount } from 'svelte'
  import type { IUserSchema } from '../types'
  import useColor from '../script/hooks'
  import mitt from '../script'

  // 起動とデータ取得
  let users: IUserSchema[] = []

  onMount((): void => {
    mitt.on('sendData', (e: IUserSchema[]): void => {
      users = e
    })
  })
</script>

<section>
  <!-- 指定されたユーザーがいない場合 -->
  {#if users.length === 0}
    <div class="has-text-weight-medium" style="height: 500px;">指定されたユーザーがいません</div>
  {/if}

  <!-- ユーザーデータカード -->
  <div class="columns is-multiline py-2 is-variable is-2">
    {#each users as item (item.id)}
      <div class="column is-4 is-6-tablet">
        <div
          class="p-2 is-flex is-flex-direction-row has-text-weight-medium"
          style={`background-color:${useColor(Number(item.areaCode))}; border: 1px solid hsl(0, 0%, 86%);`}
        >
          <div class="mr-3 mt-5 ml-2">
            <figure class="image is-96x96">
              <img src="/image.png" alt="avatar" />
            </figure>
          </div>

          <div class="is-flex is-flex-direction-column">
            <div class="is-size-4 has-text-weight-semibold">
              <span style="color: hsl(0, 0%, 48%);">ID：</span>
              {item.id}
            </div>

            <div>
              <span class="is-size-4">{item.name}</span>
              <span>{item.nameSpell}</span>
            </div>

            <div><span style="color: hsl(0, 0%, 48%);">種族：</span>{item.race}</div>

            <div><span style="color: hsl(0, 0%, 48%);">職務：</span>{item.job}</div>

            <div><span style="color: hsl(0, 0%, 48%);">スキル：</span>{item.skill}</div>

            <div><span style="color: hsl(0, 0%, 48%);">利用時間：</span>{item.YYYYMMDD}</div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<script lang="ts">
  import { onMount } from 'svelte'
  import mitt from '../script'

  // リンク
  const GitHub: string = 'https://github.com/kensoz/Rrea-client-collection/tree/master/c3-svelte-ts-bulma'
  const jump = (): void => {
    window.location.href = GitHub
  }

  // 起動とネットワーク状態取得
  let isOnline: boolean = true

  onMount((): void => {
    mitt.on('changeNetwork', (e: boolean): void => {
      isOnline = e
    })
  })
</script>

<nav class="level is-mobile mx-2">
  <!-- 左サイド -->
  <div class="level-left">
    <div class="level-item">
      <img src="/logo.png" alt="logo" width="135" />
    </div>
  </div>

  <!-- 右サイド -->
  <div class="level-right">
    <div class="level-item">
      <span class="icon {isOnline ? 'has-text-primary' : 'has-text-danger'}">
        <i class="fa-solid fa-cloud" />
      </span>
    </div>

    <div class="level-item">
      <button class="button is-primary is-light" on:click={jump}>
        <span class="icon is-medium">
          <i class="fa-brands fa-github-alt" />
        </span>
        <span class="has-text-weight-semibold">GitHub</span>
      </button>
    </div>
  </div>
</nav>

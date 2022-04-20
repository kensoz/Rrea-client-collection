<script lang="ts">
  import { onMount } from 'svelte'
  import mitt from '../script'

  // リンク
  const GitHub: string = ''
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

<nav class="level is-mobile">
  <!-- 左サイド -->
  <div class="level-left">
    <div class="level-item">
      <h3 class="title is-3">
        <a href="/" class="has-text-black">RreaC<span class="has-text-primary">6</span></a>
      </h3>
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

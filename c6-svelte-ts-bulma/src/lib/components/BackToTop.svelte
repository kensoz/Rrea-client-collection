<script lang="ts">
  // back to topボタン
  const scrollTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
</script>

<div>
  <button class="button is-primary is-light is-medium" on:click={scrollTop}>
    <span class="icon">
      <i class="fa-solid fa-arrow-up" />
    </span>
  </button>
</div>

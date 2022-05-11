<script lang="ts">
  import Header from '../lib/Header.svelte'
  import Form from '../lib/Form.svelte'
  import Body from '../lib/Body.svelte'
  import Footer from '../lib/Footer.svelte'
  import BackToTop from '../lib/components/BackToTop.svelte'
</script>

<main class="container max-width">
  <header class="hero py-3" style="border-bottom: 1px solid hsl(0, 0%, 86%);">
    <Header />
  </header>

  <section class="hero" style="border-bottom: 1px solid hsl(0, 0%, 86%);">
    <Form />
  </section>

  <section class="section is-medium py-3">
    <Body />
  </section>

  <footer class="footer pt-3" style="border-top: 1px solid hsl(0, 0%, 86%);">
    <Footer />
  </footer>

  <div class="back">
    <BackToTop />
  </div>
</main>

<script>
  import "./layout.css";

  import tl from "$lib/assets/tl-512.png";
  import tr from "$lib/assets/tr-512.png";
  import bl from "$lib/assets/bl-512.png";
  import br from "$lib/assets/br-512.png";

  let { children } = $props();
</script>

<svelte:head>
  <link
    rel="icon"
    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💍</text></svg>"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Forum&display=swap"
    rel="stylesheet"
  />
  <title>Hochzeit Katrin & Stephan</title>
</svelte:head>

<div class="relative min-h-screen w-full overflow-hidden bg-slate-50">
  <img src={tl} alt="Corner Decoration" class="corner top-0 left-0" />

  <img src={tr} alt="Corner Decoration" class="corner top-0 right-0" />

  <img src={bl} alt="Corner Decoration" class="corner bottom-0 left-0" />

  <img src={br} alt="Corner Decoration" class="corner bottom-0 right-0" />

  {@render children()}
</div>

<style>
  @reference "tailwindcss";

  .corner {
    @apply fixed w-48 md:w-64 lg:w-96 opacity-40 z-20;
  }
</style>

<script>
  import "./layout.css";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💍</text></svg>">
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Forum&display=swap"
    rel="stylesheet"
  />
  <title>Hochzeitsgeschenke Katrin & Stephan</title>
</svelte:head>
{@render children()}

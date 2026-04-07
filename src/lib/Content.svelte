<script>
  const { title, subtitle, children } = $props();
</script>

<div
  class="relative z-10 flex flex-col items-center justify-start min-h-screen py-16 px-8 lg:px-16 text-center"
>
  <h1 class="lg:text-7xl text-4xl font-bold text-green uppercase">
    {title}
  </h1>

  <h2 class="lg:text-5xl text-3xl text-green uppercase font-medium">
    {subtitle}
  </h2>
  <main class="text-lg text-slate-800 max-w-md space-y-8 mt-8">
    {@render children?.()}
  </main>
</div>

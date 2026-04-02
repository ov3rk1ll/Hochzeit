<script lang="ts">
  const { data } = $props();
</script>

<div
  class="relative z-10 flex flex-col items-center justify-start min-h-screen py-16 px-8 lg:px-16 text-center"
>
  <h1 class="lg:text-7xl text-5xl font-bold green uppercase">Geschenke</h1>

  <h2 class="lg:text-5xl text-3xl green uppercase font-medium">
    Katrin & Stephan
  </h2>
  <main class="text-lg text-slate-800 max-w-md space-y-8 mt-8">
    {#each data.posts as item}
      <section class="space-y-1">
        <h3 class="lg:text-3xl text-xl green uppercase font-medium">
          {item.meta.title}
        </h3>
        <img src={item.image} alt={item.title} />
        <p class="leading-tight"><item.content /></p>
      </section>
    {/each}
  </main>
</div>

<script lang="ts">
  import tl from "$lib/assets/tl-512.png";
  import tr from "$lib/assets/tr-512.png";
  import bl from "$lib/assets/bl-512.png";
  import br from "$lib/assets/br-512.png";

  const { data } = $props();
</script>

<div class="relative min-h-screen w-full overflow-hidden bg-slate-50">
  <img src={tl} alt="Corner Decoration" class="corner top-0 left-0" />

  <img src={tr} alt="Corner Decoration" class="corner top-0 right-0" />

  <img src={bl} alt="Corner Decoration" class="corner bottom-0 left-0" />

  <img src={br} alt="Corner Decoration" class="corner bottom-0 right-0" />

  <div
    class="relative z-10 flex flex-col items-center justify-center min-h-screen py-16 px-8 lg:px-16 text-center"
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
</div>

<style>
  @reference "tailwindcss";

  .corner {
    @apply fixed w-48 md:w-64 lg:w-96 opacity-40 z-20;
  }
</style>

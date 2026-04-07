<script lang="ts">
  import Content from "$lib/Content.svelte";

  const { data } = $props();
</script>

<Content title="Geschenke" subtitle="Katrin & Stephan">
  {#each data.posts as item}
    <section class="space-y-1">
      <h3 class="h3">
        {item.meta.title}
      </h3>
      <img src={item.image} alt={item.title} />
      <p class="leading-tight"><item.content /></p>
    </section>
  {/each}
</Content>

<script>
  import Countdown from "./Countdown.svelte";
  /** @import { Snippet } from 'svelte' */

  /** @type {{ title: string; subtitle: string; countdownDate?: Date; children: Snippet }} */
  const { title, subtitle, countdownDate = undefined, children } = $props();

  const from = new Date();
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

  {#if countdownDate}
    <section class="space-x-0.5 lg:text-2xl text-xl whitespace-nowrap">
      <Countdown autoStart value={{ from, to: countdownDate }}>
        {#snippet children(time)}
          {#if time.totalSeconds > 0}
            {#if time.weeks > 1}
              <span>{time.weeks} Wochen</span>
            {:else if time.weeks == 1}
              <span>{time.weeks} Woche</span>
            {/if}
            {#if time.days > 1}
              <span>{time.days} Tage</span>
            {:else if time.days == 1}
              <span>{time.days} Tag</span>
            {/if}

            {#if time.hours > 1}
              <span>{time.hours} Stunden</span>
            {:else if time.hours == 1}
              <span>{time.hours} Stunde</span>
            {/if}

            {#if time.minutes > 1}
              <span>{time.minutes} Minuten</span>
            {:else if time.minutes == 1}
              <span>{time.minutes} Minute</span>
            {/if}
          {/if}
        {/snippet}
      </Countdown>
    </section>
  {/if}

  <main class="text-lg text-slate-800 max-w-md space-y-8 mt-8">
    {@render children?.()}
  </main>
</div>

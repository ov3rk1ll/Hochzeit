<script lang="ts" module>
  import type { Snippet } from "svelte";

  export type CountdownValues = {
    from: Date;
    to: Date;
  };

  export type CountdownProps = {
    value: number | CountdownValues;
    autoStart?: boolean;
    children: Snippet<[time: CountdownState, seconds: number]>;
    onTick?: (time: CountdownState, seconds: number) => void;
    onStart?: () => void;
    onFinish?: () => void;
  };

  export type CountdownTimeState = {
    //years: string;
    //months: string;
    weeks: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    totalSeconds: number;
  };

  export type CountdownState = Omit<CountdownTimeState, "totalSeconds">;

  export const diffTime = (from: Date, to: Date): CountdownTimeState => {
    let start = new Date(from);
    let end = new Date(to);

    if (start > end) [start, end] = [end, start];

    // Anchor at start and advance calendar units without overshooting end

    // Remainder
    let remainderMs = end.getTime() - start.getTime();
    const msPerSecond = 1000;
    const msPerMinute = 60 * msPerSecond;
    const msPerHour = 60 * msPerMinute;
    const msPerDay = 24 * msPerHour;

    let days = Math.floor(remainderMs / msPerDay);
    remainderMs -= days * msPerDay;

    let hours = Math.floor(remainderMs / msPerHour);
    remainderMs -= hours * msPerHour;

    let minutes = Math.floor(remainderMs / msPerMinute);
    remainderMs -= minutes * msPerMinute;

    let seconds = Math.floor(remainderMs / msPerSecond);

    const weeks = Math.floor(days / 7);
    days = days % 7;

    const pad = (n: number) => n.toString(); /*.padStart(2, "0");*/
    const totalSeconds = Math.floor((end.getTime() - start.getTime()) / 1000);

    return {
      // years: pad(years),
      // months: pad(months),
      weeks: pad(weeks),
      days: pad(days),
      hours: pad(hours),
      minutes: pad(minutes),
      seconds: pad(seconds),
      totalSeconds,
    };
  };
</script>

<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  let {
    value,
    children,
    autoStart,
    onStart,
    onFinish,
    onTick,
  }: CountdownProps = $props();

  const secondsValue = $derived.by(() => {
    switch (typeof value) {
      case "number":
        return value;
      case "object":
        return diffTime(value.from, value.to).totalSeconds;
    }
  });

  const interval = 1000;
  let seconds = $state(
    typeof value === "number"
      ? value
      : diffTime(value.from, value.to).totalSeconds,
  );
  let timer: ReturnType<typeof setInterval> | null = null;

  $effect(() => {
    if (seconds === 0 && timer) {
      clearInterval(timer);
      timer = null;
      onFinish?.();
    }
  });

  onMount(() => {
    if (autoStart) {
      start();
    }
  });

  onDestroy(() => {
    if (timer) {
      clearInterval(timer);
    }
  });

  export const start = () => {
    if (timer) {
      return;
    }
    timer = setInterval(() => {
      seconds--;
      onTick?.(time, seconds);
    }, interval);

    onStart?.();
  };

  export const stop = () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  };

  export const reset = () => {
    stop();
    seconds = secondsValue;
    start();
  };

  const startTime = $derived.by(() => {
    if (typeof value === "object") {
      return value.from;
    }

    return new Date();
  });

  const endTime = $derived.by(() => {
    const date = new Date(startTime);
    date.setTime(date.getTime() + seconds * 1000);

    return date;
  });

  const time = $derived.by<CountdownState>(() => {
    return diffTime(endTime, startTime);
  });
</script>

{@render children(time, seconds)}

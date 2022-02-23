<script lang="ts">
  import {onMount} from 'svelte';
  import { icons } from "./icons";

  type IconName = "phone" | "linkedIn" | "instagram" | "telegram" | "email";

  export let name: IconName;
  export let width: number | undefined;
  export let height: number | undefined;
  let container;

  onMount(() => {
    container.innerHTML = icons[name]({ width, height })
  });
</script>

<div bind:this={container}/>
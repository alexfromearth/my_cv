<script lang="ts">
  import type { IPeriodBlock } from "../store";

  export let period: IPeriodBlock['period'];
  export let title: IPeriodBlock['title'];
  export let description: IPeriodBlock['description'];
  export let achivements: IPeriodBlock['achivements'];
</script>

<div class="wrapper">
  <div class="period">
    <div>{period.from}</div>
    <div>{period.to}</div>
  </div>
  <div class="text-wrapper">
    <div class="title">{title}</div>
    {#if description}
      <div class="description">{description}</div>
    {/if}
    {#if achivements}
      <ul class="achives">
        {#each achivements as achivement}
          <li>{achivement}</li>
        {/each}
      </ul>
    {/if}
  </div>
</div>

<style>
  .wrapper {
      display: flex;
      justify-content: space-between;
      margin-bottom: 40px;
  }

  .text-wrapper {
      width: 430px;
  }

  .period {
      width: 120px;
      font-family: "Mr Eaves Bold", serif;
      font-size: 18px;
  }

  .title {
      font-family: "Mr Eaves Reg Italic", serif;
  }

  .description {
      margin-top: 5px;
      color: var(--dimgray);
  }

  .achives {
      margin-top: 5px;
  }
</style>
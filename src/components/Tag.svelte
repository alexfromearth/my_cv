<script lang="ts">
  export let text: string;
</script>

<div class="skill-tag">
  {text}
</div>

<style>
    .skill-tag {
        display: inline-block;
        background-color: var(--black);
        color: var(--whitesmoke);
        font-size: 20px;
        padding: 7px 10px;
        border-radius: 10px;
        margin-right: 10px;
        margin-bottom: 10px;
    }
</style>
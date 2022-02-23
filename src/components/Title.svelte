<script lang="ts">
  export let fullName: string;
  export let profession: string;
</script>

<div class="brief-info">
  <div class="full-name">{fullName.toUpperCase()}</div>
  <div class="profession">{profession}</div>
</div>

<style>
    .brief-info {
        background-color: var(--black);
        height: 147px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 0px 50px;
    }

    .full-name {
        color: var(--whitesmoke);
        font-size: 35px;
        letter-spacing: 2px;
        font-family: "Mr Eaves Bold", serif;
    }

    .profession {
        color: var(--dimgray);
        margin-top: 5px;
    }
</style>
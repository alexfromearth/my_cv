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
        background-color: #0E0E0E;
        height: 120px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 0px 50px;
    }

    .full-name {
        color: #ffffff;
        font-size: 35px;
        letter-spacing: 2px;
        font-family: "Mr Eaves Bold", serif;
    }

    .profession {
        color: #636363;
        margin-top: 5px;
    }
</style>
<script lang="ts">
  export let title: string;
</script>

<div class="section-wrapper">
  <div class="separator">
    <div class="separator-left"></div>
    <div class="separator-right"></div>
  </div>
  <div class="content">
    <div class="title">{title}</div>
    <div class="main">
      <slot></slot>
    </div>
  </div>
</div>

<style>
  .section-wrapper {
      margin-left: 50px;
      margin-right: 50px;
      margin-bottom: 55px;
  }

  .separator {
      width: 100%;
      height: 6px;
      border-radius: 2px;
      display: flex;
      overflow: hidden;
  }

  .separator-left {
      width: 50px;
      height: 100%;
      background-color: var(--black);
  }

  .separator-right {
      height: 100%;
      flex-grow: 1;
      background-color: var(--light-gray);
  }

  .content {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
  }

  .title {
      font-size: 32px;
      width: 235px;
      letter-spacing: 3px;
      font-family: "Mr Eaves Bold", serif;
  }

  .main {
      width: 570px;
      flex-grow: 1;
  }
</style>
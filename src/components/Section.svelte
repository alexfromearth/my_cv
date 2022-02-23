<div class="section-wrapper">
  <div class="separator">
    <div></div>
    <div></div>
  </div>
  <div class="content">
    <slot></slot>
  </div>
</div>

<style>
  .section-wrapper {
      margin-left: 50px;
      margin-right: 50px;
  }

  .separator {
      width: 100%;
      height: 6px;
      border-radius: 2px;
      display: flex;
      overflow: hidden;
  }

  .separator > :first-child {
      width: 50px;
      height: 100%;
      background-color: #000000;
  }

  .separator > :last-child {
      height: 100%;
      flex-grow: 1;
      background-color: #BABBBD;
  }

  .content {
      margin-top: 30px;
  }
</style>
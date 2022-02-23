<div class="section-wrapper">
  <div class="separator">
    <div class="separator-left"></div>
    <div class="separator-right"></div>
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
  }
</style>
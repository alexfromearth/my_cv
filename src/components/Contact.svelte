<script lang="ts">
  export let text: string;
</script>

<div class="contact-wrapper">
  <slot name="icon"></slot>
  <div class="text">
    {text}
  </div>
</div>

<style>
    .contact-wrapper {
        display: flex;
        align-items: center;
    }

    .contact-wrapper > :not(:first-child) {
        margin-left: 10px;
    }
  .text {
      font-family: "Mr Eaves Reg Italic", serif;
      font-size: 18px;
      color: #1c1c1c;
  }
</style>
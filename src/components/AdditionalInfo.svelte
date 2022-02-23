<script context="module" lang="ts">
  import Contact from "./Contact.svelte";
  import Icon from "./Icon/Icon.svelte";

  const contacts = [
    {iconName: 'phone', text: '+7(915) 524-40-61', src: 'tel:+79155244061'},
    {iconName: 'email', text: 'shirokovaloff@gmail.com', src: 'mailto:shirokovaloff@gmail.com&body=Привет?subject=vacancy'},
    {iconName: 'linkedIn', text: '@alexey-shirokov-4a79921b4', src: 'https://www.linkedin.com/in/alexey-shirokov-4a79921b4'},
    {iconName: 'github', text: '@alexfromearth', src: 'https://github.com/alexfromearth'},
  ]
</script>

<div class="wrapper">
  <div class="address">
    Russia, Moscow
  </div>
  <div class="contacts">
    {#each contacts as { iconName, text, src }}
      <Contact text={text}>
        <a  target="_blank" rel="noopener noreferrer" href={src} slot="icon">
          <Icon name={iconName} width={23} height={23} />
        </a>
      </Contact>
    {/each}
  </div>
</div>

<style>
   .wrapper {
       height: 140px;
       padding: 7px 7px 0;
       display: flex;
       flex-direction: column;
       justify-content: space-between;
   }

  .address {
      font-family: "Mr Eaves Bold Italic", serif;
      font-size: 22px;
  }

  .contacts > :not(:last-child) {
      margin-bottom: 5px;
  }
</style>
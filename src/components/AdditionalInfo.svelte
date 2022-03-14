<script lang="ts">
  import Contact from "./Contact.svelte";
  import Icon from "./Icon/Icon.svelte";
  import { IData } from "../store";

  export let contacts: IData['contacts'];
  export let addressInfo: IData['addressInfo'];
</script>

<div class="wrapper">
  <div class="address">
    {addressInfo.country}, {addressInfo.city}
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
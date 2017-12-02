<template>
    <div class="panel panel-default" id="header">
      <div id="generic-header">
        {{ headerTitle }}
      </div>
      <slot>Other page specific header content</slot>
    </div>
</template>

<script>

  export default {
    name: 'appHeader',
    props: ['headerTitle'],
    data() {
      return {
        genericHeaderContent: 'Generic Header Content'
      }
    }
  }

</script>

<style>
  #header{
    background-color: #607799;
    height: 10vh;
  }
</style>

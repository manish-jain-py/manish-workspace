<template>
  <div id="footer">
    {{ footerContent }}
  </div>
</template>

<script>

  export default{
    name: 'appFooter',
    props: ['footerContent']
  }

</script>

<style>
  #footer{
    background-color: white;
    height: 20vh;
  }
</style>

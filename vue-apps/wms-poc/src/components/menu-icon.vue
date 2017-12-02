<template>
  <div class="image-container">
    <router-link v-bind:to="source.component">
      <img class="image-thumbnail" v-bind:src="source.src" alt="">
    </router-link>
  </div>
</template>

<script>

  export default {
    name: 'menuIcon',
    props: ['source'],
  }

</script>

<style>
  .image-thumbnail{
    margin: 20px;
    width: 50px;
    height: 50px;
  }
  .image-container{
    text-align: center;
  }
</style>

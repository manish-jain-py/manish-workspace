<template>
  <div class="image-container">
    <router-link class="links" v-bind:to="source.component">
      <img class="image-thumbnail" v-bind:src="source.src" alt="">
    </router-link>
    <br>
    <span class="label label-primary"> {{ source.name }} </span>
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
  .links{
    text-decoration: none;
  }
</style>

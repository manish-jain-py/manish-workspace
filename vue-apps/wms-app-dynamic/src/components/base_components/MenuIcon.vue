<template>

  <div class="col-md-6 form-group image-container">
    <img @click="goToPage" class="image-thumbnail" v-bind:src="propsObject.src" v-bind:alt="propsObject.label">
    <br>
    <span class="label label-primary"> {{ propsObject.label }} </span>
  </div>

</template>

<script>

  import store from '../store'

  export default {

    name: 'MenuIcon',

    props: ['propsObject'],

    methods: {
      goToPage () {
        store.commit('SET_CURRENT_PAGE', this.propsObject.targetPageId)
      }
    }

  }

</script>

<style>

  .image-thumbnail{
    margin: 20px;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  .image-container{
    text-align: center;
  }

</style>

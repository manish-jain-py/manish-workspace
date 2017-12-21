<template>
  <div class="form-group">
    <label v-bind:for="propsObject.name">{{ propsObject.label }}</label>
    <input type="text" class="form-control" v-bind:id="propsObject.name" v-bind:placeholder="propsObject.placeholder" value="">
  </div>
</template>

<script>

  import store from '../store'

  export default {
    name: 'TextBox',
    data: function(){
      return {
        defaultTextboxId: '',
        defaultPlaceholder: 'Enter Here',
        defaultLabel: ''
      }
    },
    props: ['propsObject'],
    created: function () {
      store.commit('incrementComponentsCounter')
    }
  }
</script>

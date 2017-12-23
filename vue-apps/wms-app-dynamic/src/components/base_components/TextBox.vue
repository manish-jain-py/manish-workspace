<template>

  <div class="form-group">
    <label v-bind:for="propsObject.name">{{ propsObject.label }}</label>
    <input type="text" class="form-control" v-bind:id="propsObject.name" v-bind:placeholder="propsObject.placeholder"
           value="">
  </div>

</template>

<script>

  export default {

    name: 'TextBox',

    props: ['propsObject'],

  }

</script>

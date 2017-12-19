<template>
  <div class="form-group">
    <button id="propsObject.name" class="btn btn-primary" @click="performAction">{{ propsObject.label }}</button>
  </div>
</template>

<script>

  import store from '../store/index'
  export default {

    name: 'ActionButton',
    props: ['propsObject'],
    methods: {
      performAction: function () {
        if (this.propsObject.actionType == 'Navigation') {
          var toPageId = this.propsObject.params.pageId
          store.commit('setCurrentPage', toPageId)
        }
      }
    }

  }
</script>

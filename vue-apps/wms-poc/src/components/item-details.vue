<template>

  <div>

    <div>
      <router-link to="/main-menu">Main Menu</router-link>
      <div>{{ $store.state.dataRecord }}</div>
      <div> {{ $store.state.items }} </div>

      <form id="item-details">

        <div class="input-group">
          Item: <input class="form-control" name="query" v-model="itemName" disabled>
        </div>

        <div class="form-group">
          <label for="item-quantity">Item Quantity</label>
          <input v-model="qty" type="text" class="form-control" id="item-quantity" placeholder="Enter quantity">
        </div>

        <div class="form-group">
          <label for="item-lot">Item Lot Number</label>
          <input v-model="lot" type="text" class="form-control" id="item-lot" placeholder="Enter Lot Number">
        </div>

      </form>
    </div>

    <div>
      <buttons-area>
        <router-link to="/select-item"><button @click="updateItemDetails" class="btn btn-primary">Receive more items</button></router-link>
        <button class="btn btn-primary">Post Item Receipt</button>
      </buttons-area>
    </div>

  </div>
</template>

<script>

  import store from './store/index.js'
  import buttonsArea from '../components/buttons-area.vue'

  export default {
    data() {
      return {
        qty: null,
        lot: ''
      }
    },
    computed: {
      line: {
        get: function() {
          return this.$route.query.line
        }
      },
      itemName: {
        get: function () {
          return store.state.items[this.line].item
        }
      },
      itemSerialNumber: {
        get: function() {
          return store.state.items[this.line].serialnumber
        },
        set: function (newValue) {
          store.commit('updateItemSerialNumber', {line: this.line, val: newValue})
        }
      },
      received: {
        get: function () {
          return null
          //return store.state.items[this.line].received
        },
        set: function (newValue) {
          store.commit('updateItemQuantity', {line: this.line, val: newValue})
        }
      }
    },
    methods: {
      updateItemDetails: function() {
        if (this.qty && this.lot) {
          store.commit('updateItemQuantity', {line: this.line, val: this.qty})
          store.commit('updateItemSerialNumber', {line: this.line, val: this.lot})
        }
      }
    },
    components: {
      buttonsArea
    },
    created: function(){
      store.commit('setPageTitle', 'Enter Item Details')
    }
  }

</script>

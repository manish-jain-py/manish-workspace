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
        <button @click="postReceipt" class="btn btn-primary">Post Item Receipt</button>
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
      dataRecord: {
        get: function () {
          return store.state.dataRecord
        }
      }
    },
    methods: {
      updateItemDetails: function() {
        if (this.qty && this.lot) {
          store.commit('updateItemQuantity', {line: this.line, val: this.qty})
          store.commit('updateItemSerialNumber', {line: this.line, val: this.lot})
        }
      },
      postReceipt: function () {
        this.updateItemDetails()
        store.commit('addItemsSublist')
        axios.get("https://system.na2.netsuite.com/app/site/hosting/scriptlet.nl?script=126&deploy=1", {
          headers: {
            "Authorization": "NLAuth nlauth_account=TSTDRV1796256, nlauth_email=majain@netsuite.com, nlauth_signature=manish@netsuite123A"
          },
          params: {
            'data_record': this.dataRecord
          }
        })
          .then(response => {
            console.log(response.data)
            this.$router.push({
              path: 'response',
              query: {response_url: response.data}
            })
          })
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

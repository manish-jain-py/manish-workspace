<template>
  <div>
    <div class="dropdown-container">
      <v-select v-model="warehouse" :options="list_warehouses"></v-select>
    </div>
    <buttons-area>
      <router-link to="/main-menu"><button class="btn btn-primary">Next</button></router-link>
    </buttons-area>
  </div>
</template>

<script>
  import vSelect from "vue-select"
  import store from './store/'
  import buttonsArea from './buttons-area.vue'

  export default {
    components: {
      vSelect,
      buttonsArea
    },

    data() {
      return {
        list_warehouses: ['Select Warehouse']
      }
    },
    computed: {
      warehouse: {
        get: function(){
          return store.state.warehouse
        },
        set: function (newWarehouse) {
          if (newWarehouse == 'Select Warehouse'){
            newWarehouse = 'Not Selected'
          }
          store.commit('setWarehouse', newWarehouse)
        }
      }
    },
    methods: {
      getWarehouses() {
        axios.get("https://system.na2.netsuite.com/app/site/hosting/scriptlet.nl?script=121&deploy=1", {
          headers: {
            "Authorization": "NLAuth nlauth_account=TSTDRV1796256, nlauth_email=majain@netsuite.com, nlauth_signature=manish@netsuite123A"
          }
        })
          .then(response => {
            this.list_warehouses.push(...response.data.name)
          })
      }
    },
    created: function(){
      store.commit('setPageTitle', 'Select your location')
      this.getWarehouses()
    }
  }
</script>

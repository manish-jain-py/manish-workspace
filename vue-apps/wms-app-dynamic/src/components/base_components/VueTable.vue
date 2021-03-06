<template>

  <table>
    <thead>
    <tr>
      <th v-for="key in columns"
          @click="sortBy(key)"
          :class="{ active: sortKey == key }">
        {{ key | capitalize }}
        <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
          </span>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-on:click="onClickFunction(entry)" v-for="(entry) in filteredData" v-bind:class="entry.clicked ? 'clicked-row' : 'unclicked-row'">
      <td v-for="key in columns">
        {{ entry[key] }}
      </td>
    </tr>
    </tbody>
  </table>

</template>

<script>

  export default {

    name: 'VueTable',

    props: {
      data: Array,
      columns: Array,
      filterKey: String
    },

    data: function () {
      var sortOrders = {}
      this.columns.forEach(function (key) {
        sortOrders[key] = 1
      })
      return {
        sortKey: '',
        sortOrders: sortOrders,
        isClicked: {}
      }
    },

    computed: {
      filteredData: function () {
        var sortKey = this.sortKey
        var filterKey = this.filterKey && this.filterKey.toLowerCase()
        var order = this.sortOrders[sortKey] || 1
        var data = this.data
        if (filterKey) {
          data = data.filter(function (row) {
            return Object.keys(row).some(function (key) {
              return String(row[key]).toLowerCase().indexOf(filterKey) > -1
            })
          })
        }
        if (sortKey) {
          data = data.slice().sort(function (a, b) {
            a = a[sortKey]
            b = b[sortKey]
            return (a === b ? 0 : a > b ? 1 : -1) * order
          })
        }
        return data
      }
    },

    filters: {
      capitalize: function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
    },

    methods: {
      sortBy: function (key) {
        this.sortKey = key
        this.sortOrders[key] = this.sortOrders[key] * -1
      },
      onClickFunction: function (entry) {
        for (var row in this.filteredData){
          this.filteredData[row].clicked = false
        }
        entry.clicked = true
        this.$emit('onClickFunction', entry)
      }
    }

  }

</script>

<style>
  body {
    font-family: Helvetica Neue, Arial, sans-serif;
    font-size: 14px;
    color: #444;
  }

  table {
    margin-top: 10px;
    margin-left: 10px;
    border: 2px solid #607799;
    border-radius: 3px;
    background-color: #fff;
  }

  th {
    background-color: #607799;
    color: rgba(255,255,255,0.66);
    border-radius: 1px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .unclicked-row {
    background-color: lightgrey;
  }

  .clicked-row {
    background-color: #607799;
  }

  tr{
    cursor: pointer;
    border: 1px solid lightgrey;
  }

  th, td {
    min-width: 120px;
    padding: 10px 20px;
  }

  th.active {
    color: #fff;
  }

  th.active .arrow {
    opacity: 1;
  }

  .arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
  }

  .arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #fff;
  }

  .arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
  }

</style>

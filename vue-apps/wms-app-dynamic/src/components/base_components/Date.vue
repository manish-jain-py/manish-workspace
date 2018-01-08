<template>

  <div class="form-group">

  <div v-if="propsObject.dateType === 'single'">
    <date-picker format="MM-dd-YYYY" :not-before="notBefore" :not-after="notAfter" lang="en" v-model="date" :first-day-of-week="1"></date-picker>
  </div>

  <div v-if="propsObject.dateType === 'range'">
    <date-picker v-if="propsObject.dateType === 'range'"  lang="en" v-model="date" :not-before="notBefore" :not-after="notAfter" confirm range></date-picker>
  </div>
  </div>

</template>

<script>

  import DatePicker from 'vue2-datepicker'

  export default {
    name: "Date",

    data() {
      return {
        date: '',
        shortcuts: [
          {
            text: 'Today',
            start: new Date(),
            end: new Date()
          }
        ]
      }
    },

    computed: {
      notBefore: function () {
        return new Date(this.propsObject.minDate)
      },
      notAfter: function () {
        return new Date(this.propsObject.maxDate)
      }
    },

    watch: {
      date: function (newValue) {
        console.log(newValue)
      }
    },

    props: ['propsObject'],

    components: {
      DatePicker
    },

    created: function () {
      if (this.propsObject.dateType === 'range'){
        this.date = []
      }
    }
  }

</script>

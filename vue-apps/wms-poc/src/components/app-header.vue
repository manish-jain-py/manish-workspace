<template>
    <div class="panel panel-default" id="header-container">
      <div id="header-content">
        {{ pageTitle }}
        <div id="additional-data">
          Warehouse: {{ warehouse }}
        </div>
      </div>
    </div>
</template>

<script>

  export default {
    props: ['pageTitle', 'warehouse']
  }

</script>

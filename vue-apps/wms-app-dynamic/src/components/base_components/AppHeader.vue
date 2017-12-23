<template>

  <div class="panel panel-default" id="header-container">
    <div id="header-content">
      {{ pageTitle }}
    </div>
  </div>

</template>

<script>

  export default {
    props: ['pageTitle']
  }

</script>

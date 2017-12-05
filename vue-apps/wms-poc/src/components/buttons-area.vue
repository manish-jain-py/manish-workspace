<template>
  <div id="buttons-area">
    {{ footerContent }}
    <div id="page-buttons">
      <slot></slot>
    </div>
  </div>
</template>

<script>

  export default{
    props: ['footerContent']
  }

</script>


<template>
  <div class="layout">
    <div class="wrapper">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

.layout{
  padding: 0;
  min-height: 100%;
  flex:1;
}
.wrapper{
  max-width: 1280px;
  height: 100%;
  background-color: #f1f1f1;
  margin: 0 auto;
}
</style>

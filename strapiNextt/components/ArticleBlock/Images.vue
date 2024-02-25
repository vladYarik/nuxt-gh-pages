<template>
  <div v-for="image in props.data">
    <img  :src="image.attributes.image" alt="">
    {{image.attributes.image}}
  </div>
</template>

<script setup>
const props = defineProps({
  data:{
    default:null
  }
})
console.log(props.data[0].attributes,'df')
</script>

<style scoped>

</style>

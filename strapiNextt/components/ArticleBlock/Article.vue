<template>
  <div class="article">
    <div style="font-size: 42px">
      {{props.data.title}}
    </div>
    <div>
      {{props.data.body}}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data:{
    default:null
  }
})

</script>

<style scoped>
.article{
  width: 100%;
  height: 600px;
  background-color: #00dc82;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}
</style>

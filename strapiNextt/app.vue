<template>
  <div v-if="data">
    {{data.data}}
  </div>
  <div v-else>
    dfv
  </div>
</template>

<script setup>
  import {useFetch} from "nuxt/app";

  const fetchUser = async () => {
      return new Promise(resolve => {
        setTimeout(async () => {
         resolve({
           data:'dfvfdfv'
         })
        },6000)
      })

    // const a = await fetch('http://localhost:1337/api/contents')
    // const data = await a.json()
    // return data.data[0].attributes


  }

  const {data} = await useFetch(async () => {
      return fetchUser()


  })
  console.log(data.value)
</script>

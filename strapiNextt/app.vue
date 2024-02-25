<template>
  <NuxtLayout>
    <ArticleBlockArticle :data="articleData"/>
    <ArticleBlockImages :data="imagesData"/>
  </NuxtLayout>

</template>

<script setup>
  import {useFetch} from "nuxt/app";


  const fetchImages = async () => {

    const a = await fetch('http://localhost:1337/api/images-blocks')
    const data = await a.json()
    return data.data


  }
  const fetchUser = async () => {

    const a = await fetch('http://localhost:1337/api/contents')
    const data = await a.json()
    return data.data[0].attributes


  }
  const getArticle = async () => {
    const a = await fetch('http://localhost:1337/api/article')
    const data = await a.json()
    return data.data.attributes
  }
  const {data} = useAsyncData(async () => {
      return fetchUser()
  })
  const {data:articleData} = useAsyncData(async () => {
    return getArticle()
  })
  const {data:imagesData} = useAsyncData(async () => {
    return fetchImages()
  })
</script>
<style>
.wrapper{
  display: flex;

  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
}
.title{
  font-size: 62px;
  font-weight: bold;
}

</style>

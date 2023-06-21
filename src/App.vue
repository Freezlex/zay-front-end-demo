<script setup>
import {onMounted} from "vue";
import { api } from "@/modules/api";

let posts = []

onMounted(async () => {
  getPosts();
})

const getPosts = () => {
  // TODO : do something here
  posts = api.getPosts();
}

const savePosts = (data) => {
  // TODO : do something here

  // Here I call the API manager to create a new post
  try {
    api.createPost(data);
  } catch(e) {
    console.log(e);
  }
}

const updatePosts = () => {
  // TODO : do something here
}

const deletePosts = () => {
  // TODO : do something here
}

</script>

<template>
  <button v-on:click="savePosts">DO SOMETHING HERE</button>
</template>

<style scoped>
body {
  display: flex;
  flex-flow: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>

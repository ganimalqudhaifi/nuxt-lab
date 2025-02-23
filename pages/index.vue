<script setup lang="ts">
const { $sayHello } = useNuxtApp();
const { data: home } = await useAsyncData(() =>
  queryCollection("content").path("/").first()
);

$sayHello("User");
</script>

<template>
  <div>
    <h1>This is a home page</h1>
    <ContentRenderer v-if="home" :value="home" />
    <div v-else>Home not found</div>
  </div>
</template>

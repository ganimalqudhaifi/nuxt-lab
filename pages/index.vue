<script setup lang="ts">
const { $sayHello } = useNuxtApp();

$sayHello("User");
</script>

<template>
  <div>
    <h1>This is a home page</h1>
  </div>
</template>

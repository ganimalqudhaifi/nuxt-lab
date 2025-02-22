<script setup lang="ts">
const route = useRoute();

console.log(route.params.id);
</script>

<template>
  <div>posts id: {{ $route.params.id }}</div>
</template>

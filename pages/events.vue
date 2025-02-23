<script setup>
const mouse = reactive(useMouse());
</script>

<template>
  <div>Mouse position is at: {{ mouse.x }} {{ mouse.y }}</div>
</template>

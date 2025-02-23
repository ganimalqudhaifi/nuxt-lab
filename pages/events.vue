<script setup lang="ts">
import { storeToRefs } from "pinia";

const counter = useCounter();
const mouse = reactive(useMouse());
const website = useWebsiteStore();
const store = useCounterStore();

const { count, doubleCount } = storeToRefs(store);
const { increment } = store;

await callOnce(website.fetch);
</script>

<template>
  <div>Mouse position is at: {{ mouse.x }} {{ mouse.y }}</div>
  <div>
    Counter: {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
  <Counter />
  <div>
    <h1>Web name: {{ website.name }}</h1>
    <p>Web description: {{ website.description }}</p>
  </div>

  <div>
    <h2>Counter store</h2>
    <p>The Count: {{ count }}</p>
    <p>The Doublecount: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

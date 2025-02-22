<template>
  <div>
    <NuxtLayout>
      <header>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/posts/1">Posts 1</NuxtLink></li>
          <li><NuxtLink to="/posts/2">Posts 2</NuxtLink></li>
        </ul>
      </header>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

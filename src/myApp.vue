<script setup>
import HeadNavigationComponent from './components/HeadNavigationComponent.vue';

</script>

<template>
  <header>
    <HeadNavigationComponent />
  </header>

  <main>
    <RouterView />
  </main>
  
</template>

<style scoped></style>

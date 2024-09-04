<script setup>
import { useStore } from 'vuex';
import { onBeforeMount } from 'vue';
import AppHeader from '@components/AppHeader.vue';

const { state } = useStore();

onBeforeMount(() => {
  state.setCurrency();
  state.getCourse();
});
</script>

<template>
  <div>
    <AppHeader />
    <main class="container">
      <routerView />
    </main>
  </div>
</template>

<style lang="scss">
@import '@styles';
</style>

<style lang="scss">
* {
  font-family: sans-serif;
  font-size: clamp(1rem, 5vw, 1.125rem);
  font-weight: 400;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
}
</style>

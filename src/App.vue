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
    <main>
      <routerView />
    </main>
  </div>
</template>

<style lang="scss">
@import '@styles';
</style>

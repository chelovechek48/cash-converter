<script setup>
import { useStore } from 'vuex';
import { onBeforeMount } from 'vue';
import AppHeader from '@components/AppHeader.vue';

const { state } = useStore();

onBeforeMount(() => {
  state.setCurrency();
});
</script>

<template>
  <div>
    <AppHeader />
    <routerView />
  </div>
</template>

<style lang="scss">
@import '@styles';
</style>

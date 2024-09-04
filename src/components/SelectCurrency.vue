<script setup>
import { useStore } from 'vuex';

const { state } = useStore();
</script>

<template>
  <select>
    <option
      v-for="currency in state.currencyList" :key="currency"
      :value="currency"
    >
      {{ currency }}
    </option>
  </select>
</template>

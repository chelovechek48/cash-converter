<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const { state } = useStore();

const currencyListFilter = computed(() => {
  const { currencyList, selectedCurrency } = state;
  return currencyList.filter((currency) => currency !== selectedCurrency);
});

const getCourseOnStringFormat = (fromCurrencyName) => {
  const toCurrencyName = state.selectedCurrency;

  const conversionFormat = `${fromCurrencyName}-${toCurrencyName}`.toLowerCase();
  const toCurrencyValue = state.course[conversionFormat];

  return `1 ${fromCurrencyName} = ${toCurrencyValue} ${toCurrencyName}`;
};

</script>

<template>
  <ul v-if="state.course">
    <li v-for="currency in currencyListFilter" :key="currency">
      {{ getCourseOnStringFormat(currency) }}
    </li>
  </ul>
  <p v-else-if="state.course === null">
    В данный момент наш серсис не работает, попробуйте зайти позже.
  </p>
</template>

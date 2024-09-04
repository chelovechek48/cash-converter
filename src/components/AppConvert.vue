<script setup>
import { useStore } from 'vuex';
import { ref } from 'vue';
import SelectCurrency from '@components/SelectCurrency.vue';

const { state } = useStore();

const formData = ref([
  {
    currency: state.selectedCurrency !== 'USD' ? 'USD' : 'EUR',
    cost: null,
  },
  {
    currency: state.selectedCurrency,
    cost: null,
  },
]);

const updateCost = (index, value) => {
  const conversionFormat = `${formData.value[0].currency}-${formData.value[1].currency}`.toLowerCase();
  const ratio = state.course[conversionFormat] || 1;

  if (ratio === 1) {
    formData.value[0].cost = value;
    formData.value[1].cost = value;
  } else if (index) {
    formData.value[0].cost = (value / ratio).toFixed(2);
    formData.value[1].cost = value;
  } else {
    formData.value[0].cost = value;
    formData.value[1].cost = (value * ratio).toFixed(2);
  }
};

const changeCurrency = (index, target, cost) => {
  formData.value[index].currency = target;
  updateCost(index, cost);
};

</script>

<template>
  <form v-if="state.course">
    <div v-for="(item, index) in formData" :key="item">
      <SelectCurrency
        :value="formData[index].currency"
        @change="changeCurrency(index, $event.target.value, formData[index].cost)"
      />
      <input
        type="number" min="0" placeholder="0"
        v-model="formData[index].cost"
        @input="updateCost(index, formData[index].cost)"
      >
    </div>
  </form>
</template>

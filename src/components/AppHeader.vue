<script setup>
import { useStore } from 'vuex';
import SelectCurrency from '@components/SelectCurrency.vue';

const { state } = useStore();

const pagesList = [
  { name: 'home', label: 'главная' },
  { name: 'convert', label: 'конвертация' },
];

</script>

<template>
  <header>
    <nav>
      <ul>
        <li v-for="page in pagesList" :key="page.name">
          <routerLink :to="{ name: page.name }">
            {{ page.label }}
          </routerLink>
        </li>
      </ul>
    </nav>
    <SelectCurrency
      :value="state.selectedCurrency"
      @change="state.choiceCurrency($event.target.value)"
    />
  </header>
</template>

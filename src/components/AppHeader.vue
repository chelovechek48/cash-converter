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
  <header class="header">
    <nav class="header__navigation container">
      <ul class="header__list">
        <li class="header__link" v-for="page in pagesList" :key="page.name">
          <routerLink :to="{ name: page.name }">
            {{ page.label }}
          </routerLink>
        </li>
      </ul>
      <SelectCurrency
        :value="state.selectedCurrency"
        @change="state.choiceCurrency($event.target.value)"
      />
    </nav>
  </header>
</template>

<style lang="scss">
.header {
  background-color: cadetblue;

  &__navigation {
    display: flex;
    gap: 1rem;
  }

  &__list {
    text-transform: capitalize;
    display: flex;
    gap: 1rem;
  }
}
</style>

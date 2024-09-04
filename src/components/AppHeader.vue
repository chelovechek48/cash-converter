<script setup>
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
  </header>
</template>

<template>
  <header class="shadow-sm">
    <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
    <Navigation />

  </header>
  <div class="container mx-auto p-4">
    <slot />
    <FooterComp />
  </div>
</template>



<script setup>
// horizontal nav
const links = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'About',
    to: '/about'
  },
  {
    label: 'Settings',
    to: '/settings'
  }

]



</script>

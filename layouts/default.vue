<template>
  <header class="shadow-sm">
    <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
    <Navigation />
    <nav class="container mx-auto p-4 flex justify-between">
      <ULink to="/" class="font-bold">Bikecheck!</ULink>
      <UInput v-model="search" color="white" variant="outline" placeholder="Search..." />
      <ul class="flex gap-4">
        <li>
          <ULink to="/">HOME</ULink>
        </li>
        <li>
          <ULink to="/about">ABOUT</ULink>
        </li>
        <Language />

        <li v-if="user">
          <Button @click="signOut">Logout</Button>
        </li>
        <li v-if="!user">
          <Button to="/login">Login</Button>
        </li>
        <Button :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="gray" variant="ghost"
          aria-label="Theme" @click="isDark = !isDark" />
      </ul>
    </nav>
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
const search = ref('')

// dark-light mode
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})



// user?


</script>

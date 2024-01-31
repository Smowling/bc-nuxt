<template>
    <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
            <NuxtLink to="/" class="font-bold">Bikecheck!</NuxtLink>
            <ul class="flex gap-4">
                <li><NuxtLink to="/">HOME</NuxtLink></li>
                <li><NuxtLink to="/about">ABOUT</NuxtLink></li>
                <li><NuxtLink to="/bikeshop/123" class="btn">123</NuxtLink></li>
                <UButton
                    :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
                    color="gray"
                    variant="ghost"
                    aria-label="Theme"
                    @click="isDark = !isDark"
                    />
            </ul>
        </nav>
    </header>
    <div class="container mx-auto p-4">
        <slot />
    </div>
</template>

<style>
body {
    background-color: #fefefe;
}
</style>

<script setup>
const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

</script>
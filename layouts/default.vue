<template>
    <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
            <NuxtLink to="/" class="font-bold">Bikecheck!</NuxtLink>
            <ul class="flex gap-4">
                <li><NuxtLink to="/">HOME</NuxtLink></li>
                <li><NuxtLink to="/about">ABOUT</NuxtLink></li>
                <li><NuxtLink to="/bikeshop/123" class="btn">123</NuxtLink></li>
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
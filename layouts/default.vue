<template>
    <header>
        <nav>
            <ul>
                <li><NuxtLink to="/">HOME</NuxtLink></li>
                <li><NuxtLink to="/about">ABOUT</NuxtLink></li>
                <li><NuxtLink to="/bikeshop/123">123</NuxtLink></li>
            </ul>
        </nav>
    </header>
    <div>
        <slot />
    </div>
</template>
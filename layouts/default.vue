<template>
    <header class="shadow-sm">
        <nav class="container mx-auto p-4 flex justify-between">
            <ULink to="/" class="font-bold">Bikecheck!</ULink>
            <ul class="flex gap-4">
                <li><ULink to="/">HOME</ULink></li>
                <li><ULink to="/about">ABOUT</ULink></li>
                <li v-show="user"><UButton @click="signOut">Logout</UButton></li>
                <li v-show="!user"><UButton to="/login">Login</UButton></li>
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



<script setup>
// dark-light mode
const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

// user?
const user = useSupabaseUser()
const supabase = useSupabaseClient()

async function signOut() {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    user.value = null
  } catch (error) {
    alert(error.message)
  }
}

</script>

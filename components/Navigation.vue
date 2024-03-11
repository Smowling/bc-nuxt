<template>
    <div>
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
        <ModeSwitch />
        <li v-if="user">
          <Button @click="signOut">Logout</Button>
        </li>
        <li v-if="!user">
          <Button to="/login">Login</Button>
        </li>
      </ul>
    </nav>
    </div>
</template>

<script setup lang="ts">
const search = ref('')

const user = useSupabaseUser()
const supabase = useSupabaseClient()

async function signOut() {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    user.value = null
    return navigateTo('/')
  } catch (error) {
    alert(error.message)
  }
}


</script>

<style scoped>

</style>
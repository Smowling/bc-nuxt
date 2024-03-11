<template>
    <div>
        <nav class="container mx-auto p-4 flex justify-between">
      <ULink :to="localePath('/')" class="font-bold">Bikecheck!</ULink>
      <UInput v-model="search" color="white" variant="outline" placeholder="Search..." />
      <ul class="flex gap-4">
        <li>
          <ULink :to="localePath('/')">HOME</ULink>
        </li>
        <li>
          <ULink :to="localePath('/about')">ABOUT</ULink>
        </li>
        <li>
          <ULink :to="localePath('/settings')">SETTINGS</ULink>
        </li>
        <Language />
        <ModeSwitch />
        <li v-if="user">
          <Button @click="signOut">Logout</Button>
        </li>
        <li v-if="!user">
          <Button :to="localePath('/login')">Login</Button>
        </li>
      </ul>
    </nav>
    </div>
</template>

<script setup lang="ts">
const search = ref('')
const localePath = useLocalePath()

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
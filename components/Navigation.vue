<template>
  <div>
    <nav class="container mx-auto p-4 flex justify-between">
      <ULink :to="localePath('/')" class="text-lg">
        <span class="font-bold text-slate-800 text-2xl">Bike</span><span
          class="text-slate-500 text-2xl">check</span><span class="font-bold text-slate-800 text-2xl">!</span>
      </ULink>
      <UInput v-model="search" color="white" variant="outline" placeholder="Search..." />
      <ul class="flex gap-4">
        <li>
          <ULink :to="localePath('/')">{{ $t('navHome') }}</ULink>
        </li>
        <li>
          <ULink :to="localePath('/about')">{{ $t('navAbout') }}</ULink>
        </li>
        <li>
          <ULink :to="localePath('/buisiness')">{{ $t('navBuisines') }}</ULink>
        </li>
        <li v-if="user">
          <ULink :to="localePath('/settings')">{{ $t('navSettings') }}</ULink>
        </li>
        <Language />
        <ModeSwitch />
        <li v-if="user">
          <Button @click="signOut">{{ $t('navLogout') }}</Button>
        </li>
        <li v-if="!user">
          <Button @click="navigateToLogin">{{ $t('navLogin') }}</Button>
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
const router = useRouter();

const navigateToLogin = () => {
  router.push(localePath('/login'));
};
async function signOut() {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    user.value = null
    return navigateTo(localePath('/'))
  } catch (error) {
    alert(error.message)
  }
}


</script>

<style scoped></style>
<template>
    <div>
        <p>Bikes</p>
        <ul>
            <li v-for="(bike, index) in settings" :key="index">
                <p> {{ bike.brand }}</p>
                <p> {{ bike.model }}</p>
                <p> {{ bike.year }}</p>
            </li>
        </ul>
    </div>
</template>


<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()
const settings = ref('')


onMounted(() => {
    getUserSettings();
})

async function getUserSettings() {
  const { data, error } = await supabase.from('bikes').select().eq("user_id", user.value.id)
  if (error) { console.log(error.message) }
  else {
    return data
  }
}

</script>
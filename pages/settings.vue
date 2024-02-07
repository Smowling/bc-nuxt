<template>
    <div>
        <p>Bikes</p>
        <ul>
            <li v-for="(bike, index) in settings" :key="index">
                <UCard>
                    <p> {{ bike.brand }}</p>
                    <p> {{ bike.model }}</p>
                    <p> {{ bike.year }}</p>
                    <UButton>History</UButton>
                    <UButton>Edit</UButton>
                    <UButton @click="deleteBike(bike.id)">Delete</UButton>
                </UCard>
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

async function deleteBike(bike_id){
    const { error } = await supabase.from("bikes").delete().eq("id", bike_id)
}

async function getUserSettings() {
  const { data, error } = await supabase.from('bikes').select().eq("user_id", user.value.id)
  if (error) { console.log(error.message) }
  else {
    settings.value = data
  }
}

</script>
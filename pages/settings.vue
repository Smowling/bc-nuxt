<template>
    <div>
        <p>Bikes</p>
        <AddBike />
        <ul>
            <li v-for="(bike, index) in settings" :key="index">
                <BikeCard :bike="bike" :index="index" v-on:deleteBike="deleteBike" />
            </li>
        </ul>
        <p>Address</p>
        <AddAddress />



    </div>
</template>


<script setup>
import { ref } from 'vue'

const user = useSupabaseUser()
const supabase = useSupabaseClient()
const settings = ref('')

onMounted(() => {
    getUserSettings()
})
async function deleteBike(bike_id, index) {
    console.log(index, bike_id)

    // const { error } = await supabase.from("bikes").delete().eq("id", bike_id)
    // if (error) {
    //     console.log(error.message)
    // }
    // else {
    //     await refreshNuxtData(bike)
    //     console.log(index)
    // }
}

async function getUserSettings() {
    const { data, error } = await supabase.from('bikes').select().eq("user_id", user.value.id)
    if (error) { console.log(error.message) }
    else {
        settings.value = data
    }
}

</script>
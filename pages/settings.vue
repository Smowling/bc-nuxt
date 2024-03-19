<template>
    <div>
        <p>Bikes</p>
        <AddBike />
        <ul>
            <li v-for="(bike, index) in bikes" :key="index">
                <BikeCard :bike="bike" :index="index" @deleteBike="handleDeleteBike" />
            </li>
        </ul>
        <p>Address</p>
        <AddAddress />
        <ul>
            <li v-for="(address, index) in address" :key="index">
                <p>{{ address.street }}</p>
            </li>
        </ul>
    </div>
</template>


<script setup>
import { ref } from 'vue'

const user = useSupabaseUser()
const supabase = useSupabaseClient()
const bikes = ref([])
const address = ref([])
onMounted(() => {
    getUserBikes();
    getUserAddress();
})
async function handleDeleteBike(bike_id, index) {
    const { error } = await supabase.from("bikes").delete().eq("id", bike_id)
    if (error) {
        console.log(error.message)
    } else {
        // Remove the bike from the bikes array after successful deletion
        bikes.value.splice(index, 1);
    }
}

async function getUserBikes() {
    const { data, error } = await supabase.from('bikes').select().eq("user_id", user.value.id)
    if (error) { console.log(error.message) }
    else {
        bikes.value = data
    }
}

async function getUserAddress() {
    const { data, error } = await supabase.from('address').select().eq("user_id", user.value.id)
    if (error) { console.log(error.message) }
    else {
        address.value = data
    }
}
</script>
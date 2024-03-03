<template>
    <div>
        <p>Bikes</p>
        <AddBike />
        <ul>
            <li v-for="(bike, index) in settings" :key="index">
                <BikeCard :bike="bike" />
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
const add_bike = ref(false)

const bikeForm = ref({
    brand: "",
    model: "",
    year: "",
    sn: "",
    user_id: user.value.id,
})

onMounted(() => {
    getUserSettings();
})

// onUpdated(() => {
//     getUserSettings();
// })

// Reset form function
function resetForm() {
    bikeForm.value = {
        brand: "",
        model: "",
        year: "",
        sn: "",
        user_id: user.value.id,
    }
}



async function getUserSettings() {
    const { data, error } = await supabase.from('bikes').select().eq("user_id", user.value.id)
    if (error) { console.log(error.message) }
    else {
        settings.value = data
    }
}

</script>
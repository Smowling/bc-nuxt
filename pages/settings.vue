<template>
    <div>
        <p>Bikes</p>
        <UButton :label="add_bike ? 'Cancel' : 'Add'" @click="add_bike = !add_bike"
            :icon="add_bike ? '' : 'i-heroicons-plus-solid'" />
        <UContainer v-if="add_bike">
            <UInput v-model="bikeForm['brand']" placeholder="Brand" />
            <UInput v-model="bikeForm['model']" placeholder="Model" />
            <UInput v-model="bikeForm['year']" placeholder="Year" />
            <UButton label="Add" @click="addBike()" />
        </UContainer>

        <ul>
            <li v-for="(bike, index) in settings" :key="index">
                <BikeCard :bike="bike" />
                <UButton label="History" />
                <UButton label="Edit" />
                <UButton label="Delete" icon="i-heroicons-minus-solid" @click="deleteBike(bike.id)" />
            </li>
        </ul>
    </div>
</template>


<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()
const settings = ref('')
const add_bike = ref(false)

const bikeForm = ref({
    brand: "",
    model: "",
    year: "",
    user_id: user.value.id,
})

onMounted(() => {
    getUserSettings();
})

onUpdated(() => {
    getUserSettings();
})

async function deleteBike(bike_id) {
    const { error } = await supabase.from("bikes").delete().eq("id", bike_id)
    if (error) {
        console.log(error.message)
    }
}

async function addBike() {
    console.log(bikeForm.value)
    const { error } = await supabase.from("bikes").insert(bikeForm.value)
    if (error) {
        console.log(error.message)
    }
    else {
        add_bike.value = !add_bike;
        bikeForm.value = {
            brand: "",
            model: "",
            year: "",
            user_id: user.value.id,
        }
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
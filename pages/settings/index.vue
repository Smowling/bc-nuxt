<template>
    <div>
        <p>Bikes</p>

        <AddBike @addBike="handleAddBike" />

        <ul>
            <li v-for="(bike, index) in bikes" :key="index">
                <BikeCard :bike="bike" :index="index" @deleteBike="handleDeleteBike" />
            </li>
        </ul>
        <p>Address</p>

        <AddAddress @addAddress="handleAddAddress" />

        <ul>
            <li v-for="(address, index) in addresses.value" :key="index">
                <AddressCard :address="address" :index="index" @addressDelete="handleDeleteAddress"
                    @addressEdit="handleEditAddress" />
            </li>
        </ul>
    </div>
</template>


<script setup>
import { ref } from 'vue'

const user = useSupabaseUser()
const supabase = useSupabaseClient()
const bikes = ref([])
const addresses = ref([])
onMounted(() => {
    getUserBikes();
    getUserAddresses();
})
async function handleDeleteBike(bike_id, index) {
    const { error } = await supabase.from("bikes").delete().eq("id", bike_id)
    if (error) {
        console.log(error.message)
    } else {
        bikes.value.splice(index, 1);
    }
}
async function handleAddBike(bikeForm) {
    const { data, error } = await supabase.from("bikes").insert(bikeForm).select()
    if (error) {
        console.log(error.message)
    } else {
        bikes.value.push(data[0])
    }
}

async function handleDeleteAddress(address_id, index) {
    const { error } = await supabase.from("address").delete().eq("id", address_id)
    if (error) {
        console.log(error.message)
    } else {
        addresses.value.splice(index, 1);
    }
}
async function handleAddAddress(addressForm) {
    const { data, error } = await supabase.from("address").insert(addressForm).select()
    if (error) {
        console.log(error.message)
    } else {
        addresses.value.push(data[0])
    }
}
async function handleEditAddress(addressForm, index) {
    const { data, error } = await supabase.from("address").update(addressForm).eq('id', addressForm.id).select()
    if (error) {
        console.log(error.message)
    } else {
        addresses.value.splice(index, 1)
        addresses.value.push(data[0])
    }
}
async function getUserBikes() {
    const { data, error } = await supabase.from('bikes').select().eq("user_id", user.value.id)
    if (error) { console.log(error.message) }
    else {
        bikes.value = data
    }
}

async function getUserAddresses() {
    const { data, error } = await supabase.from('address').select().eq("user_id", user.value.id)
    if (error) { console.log(error.message) }
    else {
        addresses.value = data
    }
}
</script>
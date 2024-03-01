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
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-vue-next'

import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'

const date = ref < Date > ('')
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
        add_bike.value = !add_bike
        resetForm()
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
<template>
    <div>
        <p>Bikes</p>
        <Popover>
            <PopoverTrigger>
                <Button>Add bike</Button>
            </PopoverTrigger>
            <PopoverContent>
                <AddBike />
            </PopoverContent>
        </Popover>
        <ul>
            <li v-for="(bike, index) in settings" :key="index">
                <BikeCard :bike="bike" />
                <UButton label="History" />
                <UButton label="Delete" icon="i-heroicons-minus-solid" @click="deleteBike(bike.id)" />
            </li>
        </ul>


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
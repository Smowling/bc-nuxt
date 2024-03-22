<template>
    <div>
        <Popover>
            <PopoverTrigger>
                <Button :variant="'outline'" :class="cn(
                    'justify-start text-left font-normal'
                )">
                    <span>Add bike</span>
                </Button>
            </PopoverTrigger>

            <PopoverContent class="w-auto p-0">
                <Input type="text" placeholder="Brand" v-model="bikeForm.brand" />
                <Input type="text" placeholder="Model" v-model="bikeForm.model" />
                <Input type="text" placeholder="SN" v-model="bikeForm.sn" />

                <Popover>
                    <PopoverTrigger as-child>
                        <Button :variant="'outline'" :class="cn(
                    'w-[280px] justify-start text-left font-normal',
                    !date && 'text-muted-foreground',
                )">
                            <CalendarIcon class="mr-2 h-4 w-4" />
                            <span>{{ date ? format(date, "PPP") : "Pick a date" }}</span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent class="w-auto p-0">
                        <Calendar v-model="date" />
                    </PopoverContent>
                </Popover>
                <Button @click="adBike">Add bike</Button>
            </PopoverContent>
        </Popover>

    </div>
</template>

<script setup lang="ts">
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { Input } from '@/components/ui/input'

import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'

const date = ref<Date>()
const user = useSupabaseUser()
const supabase = useSupabaseClient()

const bikeForm = ref({
    brand: "",
    model: "",
    year: date.value,
    sn: "",
    user_id: user.value.id,
})

function resetForm() {
    bikeForm.value = {
        brand: "",
        model: "",
        sn: "",
        year: Date,
        user_id: user.value.id,
    }
}
async function addBike() {
    bikeForm.value.year = date.value
    console.log(bikeForm.value)
    const { error } = await supabase.from("bikes").insert(bikeForm.value)
    if (error) {
        console.log(error.message)
    }
    else {
        resetForm()
    }
}

const emit = defineEmits(["addBike"])

function adBike() {
    bikeForm.value.year = date.value
    emit("addBike", bikeForm.value);
    resetForm();
}

</script>

<style scoped></style>
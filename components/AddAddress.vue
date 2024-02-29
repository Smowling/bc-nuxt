<template>
    <div>
        <Popover>
            <PopoverTrigger>
                <Button :variant="'outline'" :class="cn(
                    'justify-start text-left font-normal'
                )">
                    <span>Add address</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0">
                <Input type="text" placeholder="Country" v-model="addressForm.country" />
                <Input type="text" placeholder="City" v-model="addressForm.city" />
                <Input type="text" placeholder="Street" v-model="addressForm.street" />
                <Input type="text" placeholder="Number" v-model="addressForm.number" />
                <Button @click="addAddress">Add address</Button>
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

const addressForm = ref({
    country: "",
    city: "",
    street: "",
    number: "",
    user_id: user.value.id,
})

function resetForm() {
    addressForm.value = {
        country: "",
        city: "",
        street: "",
        number: "",
        user_id: user.value.id,
    }
}
async function addAddress() {
    console.log(addressForm.value)
    const { error } = await supabase.from("bikes").insert(addressForm.value)
    if (error) {
        console.log(error.message)
    }
    else {
        resetForm()
    }
}
</script>

<style scoped></style>
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
                <Button @click="addAddress">{{ $t('btnSave') }}</Button>
            </PopoverContent>
        </Popover>
    </div>
</template>

<script setup lang="ts">

import { Input } from '@/components/ui/input'
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'

const user = useSupabaseUser()

const addressForm = ref({
    country: "",
    city: "",
    street: "",
    number: "",
    user_id: user.value.id,
})

function resetAddressForm() {
    addressForm.value = {
        country: "",
        city: "",
        street: "",
        number: "",
        user_id: user.value.id,
    }
}

const emit = defineEmits(["addAddress"])

function addAddress() {
    emit("addAddress", addressForm.value);
    resetAddressForm();
}
</script>

<style scoped></style>
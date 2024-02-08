<template>
    <div>
        <UCard>
            <p> {{ bike.brand }}</p>
            <p> {{ bike.model }}</p>
            <p> {{ bike.year }}</p>
            <UButton label="History" />
            <UButton label="Edit" />
            <UButton label="Delete" icon="i-heroicons-minus-solid" @click="deleteBike(bike.id)" />
        </UCard>
    </div>
</template>

<script setup>
defineProps(["bike"])
const supabase = useSupabaseClient()

async function deleteBike(bike_id) {
    const { error } = await supabase.from("bikes").delete().eq("id", bike_id)
    if (error) {
        console.log(error.message)
    }
    else {
        getUserSettings()
    }
}
</script>

<style scoped></style>
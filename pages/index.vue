<template>
    <div class="grid grid-cols-4 gap-4">
        <ULink v-for="(bikeshop, index) in bikeshops" :key="index" :to="'/bikeshop/' + bikeshop.url">
            <UCard>
                <p>{{ bikeshop.description }}</p>
                <template #footer>
                    <p>{{ bikeshop.name }}</p>
                </template>
            </UCard>
        </ULink>
        <Button>test</Button>
        <UCard v-for="index in 40" :key="index">
            <template #header>
                <p>test case {{ index }}</p>
            </template>
            <template #footer>
                <p>footer {{ index }}</p>
            </template>
        </UCard>
    </div>
</template>

<script setup>
const supabase = useSupabaseClient()

const bikeshops = ref();

onMounted(() => {
    getBikeshops();

})

async function getBikeshops() {
    const { data: dbData, error } = await supabase.from('bikeshops').select()
    if (error) console.log("Error", error);
    else bikeshops.value = dbData;
}

</script>

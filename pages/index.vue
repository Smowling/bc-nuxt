<template>
    <div class="grid grid-cols-4 gap-4">
        <ULink v-for="(bikeshop, index) in bikeshops" :key="index" :to="localePath('/bikeshop/' + bikeshop.url)">
            <UCard>
                <p>{{ bikeshop.description }}</p>
                <template #footer>
                    <p>{{ bikeshop.name }}</p>
                </template>
            </UCard>
        </ULink>
        <ULink v-for="index in 40" :key="index" :to="localePath('/bikeshop/' + index)">
            <UCard>
                <template #header>
                    <p>test case {{ index }}</p>
                </template>
                <template #footer>
                    <p>footer {{ index }}</p>
                </template>
            </UCard>
        </ULink>
    </div>
</template>

<script setup>
const supabase = useSupabaseClient()
const bikeshops = ref([]);


onMounted(() => {
    getBikeshops();

})

async function getBikeshops() {
    // First, try to load the data from the local cache (reactive)
    if (bikeshops.value && bikeshops.value.length > 0) {
        console.log("Loading bikeshops from local cache");
        return;
    }

    // Then, try to load the data from localStorage (persistent)
    const cachedData = localStorage.getItem('bikeshops');
    if (cachedData) {
        const { data, timestamp } = JSON.parse(cachedData);
        const dataAge = Date.now() - timestamp;
        const tenMinutes = 10 * 60 * 1000; // 10 minutes in milliseconds

        if (dataAge < tenMinutes) {
            console.log("Loading bikeshops from localStorage");
            bikeshops.value = data;
            return;
        } else {
            console.log("Cached data is older than 10 minutes");
        }
    }

    // If no data is found in the cache or it's too old, fetch it from the database
    const { data: dbData, error } = await supabase.from('bikeshops').select();
    if (error) {
        console.log("Error", error);
    } else {
        console.log("Fetching bikeshops from database");
        bikeshops.value = dbData;
        // Update both the local cache and localStorage with new data and current timestamp
        const newData = {
            data: dbData,
            timestamp: Date.now()
        };
        localStorage.setItem('bikeshops', JSON.stringify(newData));
    }
}

</script>

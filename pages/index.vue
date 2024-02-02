<template>
    <div class="grid grid-cols-4 gap-4">
        <ULink v-for="(bikeshop, index) in bikeshops" :key="index" :to="'/bikeshop/' + bikeshop.name">
            <UCard>
                <p>{{ bikeshop.description }}</p>
                <template #footer>
                    <p>{{ bikeshop.name }}</p>
                </template>
            </UCard>
        </ULink>
    </div>
</template>

<script setup>
const supabase = useSupabaseClient()

    const bikeshops = ref();

    onMounted(()=> {
    getBikeshops();

    })

  async function getBikeshops() {
    const { data: dbData, error } = await supabase.from('bikeshops').select()
    if (error) console.log("Error", error);
    else bikeshops.value = dbData;
  }

</script>

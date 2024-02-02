<template>
    <div>
        <p>{{ bikeshop }}</p>
        <p>{{ details.name }}</p>
        <p>{{ details.details }}</p>
    </div>
</template>



<script setup>

const { bikeshop } = useRoute().params
const supabase = useSupabaseClient()
const details = ref()
async function getBikeshopDetails() {
  const { data } = await supabase.from('bikeshops').select().filter("url", "eq", bikeshop)
  details.value = data
}

onMounted(() => {
    getBikeshopDetails()
})

</script>


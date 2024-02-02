<template>
    <div>
        <p>{{ bikeshop }}</p>
        <p>{{ details.name }}</p>
        <p>{{ details.description }}</p>
        <p>{{ details.email }}</p>
    </div>
</template>



<script setup>

const { bikeshop } = useRoute().params
const supabase = useSupabaseClient()
const details = ref('')
async function getBikeshopDetails() {
  const { data } = await supabase.from('bikeshops').select().eq("url", bikeshop).single()
  if (data) {
    details.value = data
  }
}

onMounted(() => {
    getBikeshopDetails();
})

</script>


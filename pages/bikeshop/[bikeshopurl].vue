<template>
      <div>
        <p v-if="bikeshop.value.length > 0">{{ bikeshop.value[0].bikeshop }}</p>
        <ServiceCard :bikeshop="bikeshop"></ServiceCard>
      </div>

</template>



<script setup>

const supabase = useSupabaseClient()

const route = useRoute()
const bikeshopurl = route.params.bikeshopurl
const bikeshop = ref([])

async function getBikeshop() {
  const { data, error } = await supabase.from('bikeshop_and_services').select().eq("url", bikeshopurl)
  if (error) { console.error("Failed to fetch bikeshop data:", error.message); }
  else {
    bikeshop.value = data
  }
}
await getBikeshop();


console.log(bikeshop.value[0].bikeshop)
onMounted(() => {
  getBikeshop();
});

</script>

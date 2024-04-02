<template>
  <Suspense>
    <template #default>
      <div>
        <UContainer>
          <p>{{ bikeshop.value[0].bikeshop }}</p>
          <p>{{ bikeshop.value[0].description }}</p>
        </UContainer>

        <ServiceCard :bikeshop="bikeshop.value"></ServiceCard>
      </div>
    </template>

    <template #fallback>
      <div>Loading ...</div>
    </template>
  </Suspense>
</template>



<script setup>

const supabase = useSupabaseClient()
// const bikeshop = useBikeshopStore();

const route = useRoute()
const bikeshopurl = route.params.bikeshopurl
const bikeshop = ref([])

async function getBikeshop() {
  const { data, error } = await supabase.from('bikeshop_and_services').select().eq("url", bikeshopurl)
  if (error) { console.log(error.message) }
  else {
    bikeshop.value = data
  }
}


onMounted(() => {
  getBikeshop();
  console.log(bikeshop.value)
})

</script>

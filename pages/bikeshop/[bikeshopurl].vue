<template>
  <Suspense>
    <template #default>
      <div>
        <UContainer>
          <p>{{ bikeshopurl }}</p>
          <!-- <p>{{ bikeshop[0].bikeshop }}</p>
        <p>{{ bikeshop[0].description }}</p>
        <p>{{ bikeshop[0].email }}</p> -->
        </UContainer>
        <UCard v-for="(bs, index) in bikeshop" :key="index">
          <template #header>
            <h2>{{ bs.service }}</h2>
            <p>{{ bs.details }}</p>
          </template>
          <template #footer>
            <p>{{ bs.price }}</p>
          </template>
        </UCard>
      </div>
    </template>

    <template #fallback>
      <div>Loading ...</div>
    </template>
  </Suspense>
</template>



<script setup>

const { bikeshopurl } = useRoute().params
const supabase = useSupabaseClient()
const bikeshop = ref('')

async function getBikeshop() {
  const { data, error } = await supabase.from('bikeshop_and_services').select().eq("url", bikeshopurl)
  if (error) { console.log(error.message) }
  else {
    bikeshop.value = data
  }
}


onBeforeMount(() => {
  getBikeshop();
})

onUpdated(() => {
  getBikeshop();
})

</script>


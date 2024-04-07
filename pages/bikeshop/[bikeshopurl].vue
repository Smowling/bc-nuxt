<template>
      <div>
        <UContainer>
          <!-- <p>{{ bikeshop.value[0].bikeshop }}</p> -->

        </UContainer>
        <UContainer>
          <ServiceCard :bikeshop="bikeshop.value"></ServiceCard>
        </UContainer>
        <!-- <ServiceCard :bikeshop="bikeshop.value"></ServiceCard> -->
      </div>

</template>



<script setup>

const supabase = useSupabaseClient()

const route = useRoute()
const bikeshopurl = route.params.bikeshopurl
const bikeshop = ref([])

async function getBikeshop() {
  const { data, error } = await supabase.from('bikeshop_and_services').select().eq("url", bikeshopurl)
  if (error) { console.log(error.message) }
  else {
    bikeshop.value = data
    console.log("loading bikeshop: ", bikeshop.value[0])
  }
}


onMounted(() => {
  getBikeshop();
})

</script>

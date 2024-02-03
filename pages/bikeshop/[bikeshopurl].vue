<template>
    <UContainer>
        <p>{{ bikeshopurl }}</p>
        <p>{{ bikeshop.name }}</p>
        <p>{{ bikeshop.description }}</p>
        <p>{{ bikeshop.email }}</p>
    </UContainer>
    <!-- <UCard v-for="(bs, index) in bikeshop" :key="index">
      <template #header>
        <h2>{{ bs.service }}</h2>
        <p>{{ bs.details }}</p>
      </template>
      <template #footer>
        <p>{{ bs.price }}</p>
      </template>
    </UCard> -->
</template>



<script setup>

const { bikeshopurl } = useRoute().params
const supabase = useSupabaseClient()
const bikeshop = ref('')

async function getBikeshop() {
  const { data, error } = await supabase.from('bikeshop_and_services').select().eq("url", bikeshopurl).single()
  if (error) { console.log(error.message) }
  else {
    bikeshop.value = data
    console.log(bikeshop)
  }
}


onMounted(() => {
    getBikeshop();
})

</script>


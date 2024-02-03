<template>
    <UContainer>
        <p>{{ bikeshopurl }}</p>
        <p>{{ bikeshop.name }}</p>
        <p>{{ bikeshop.description }}</p>
        <p>{{ bikeshop.email }}</p>
    </UContainer>
    <UCard v-for="(service, index) in services" :key="index">
      <template #header>
        <p>{{ service.service }}</p>
      </template>
      <template #footer>
        <p>{{ service.price }}</p>
      </template>
    </UCard>
</template>



<script setup>

const { bikeshopurl } = useRoute().params
const supabase = useSupabaseClient()
const bikeshop = ref('')
const services = ref('')

async function getBikeshopServices(bikeshopId){
  const { s } = await supabase.from('services').select.eq("bikeshop", bikeshopId)
  if (s) {
    services.value = s
  }
}

async function getBikeshop() {
  const { data } = await supabase.from('bikeshops').select().eq("url", bikeshopurl).single()
  if (data) {
    bikeshop.value = data
  }
}


onMounted(() => {
    getBikeshop();
    getBikeshopServices(bikeshop.id)
})

</script>


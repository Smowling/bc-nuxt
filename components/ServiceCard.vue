<template>
    <UCard v-for="(bs, index) in bikeshop" :key="index" class="shadow-sm">
      <template #header>
        <h2>{{ bs.service }}</h2>
      </template>
        <p>{{ bs.details }}</p>
      <template #footer>
        <p><UButton>{{ bs.price }}</UButton></p>
      </template>
    </UCard>
</template>

<script>
    props: ["bikeshop"]
</script>

<style scoped>

</style>
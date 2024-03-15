<template>
    <div>
        <div>
        <h3 class="font-semibold text-lg">{{ $t(`ListOfDict[${index}].title`) }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed text-justify">
          {{ $t(`ListOfDict[${index}].description`) }}
        </p>
        <p>{{ $t('locales_key') }}</p>
      </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
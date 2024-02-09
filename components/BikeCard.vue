<template>
    <div>
        <UCard>
            <p> {{ bike.brand }}</p>
            <p> {{ bike.model }}</p>
            <p> {{ bike.year }}</p>

        </UCard>
    </div>
</template>

<script setup>
defineProps(["bike"])
</script>

<style scoped></style>
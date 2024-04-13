<template>
        <ULink v-for="(bikeshop, index) in bikeshops" :key="index" :to="localePath('/bikeshop/' + bikeshop.url)">
            <UCard>
                <p>{{ bikeshop.description }}</p>
                <template #footer>
                    <p>{{ bikeshop.name }}</p>
                </template>
            </UCard>
        </ULink>
</template>


<script setup>
import { Bikeshop } from '@/types/interfaces';

defineProps<{ bikeshops: Bikeshop[] }>();


</script>
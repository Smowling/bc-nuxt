<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
props: ["bikeshop"]

</script>

<template>
  <Card v-for="(bs, index) in bikeshop" :key="index" class="shadow-sm">
    <CardHeader>
      <CardTitle>{{ bs.service }}</CardTitle>
      <CardDescription>bs.details</CardDescription>
    </CardHeader>
    <CardContent>
      bs.details
    </CardContent>
    <CardFooter>
      <Button>{{ bs.price }}</Button>
    </CardFooter>
  </Card>
</template>
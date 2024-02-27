<template>
    <div>
        <Card>
            <CardHeader>
                <CardTitle>{{ bike.brand }}</CardTitle>
            </CardHeader>
            <CardContent>
                {{ bike.model }}
            </CardContent>
            <CardContent>
                {{ bike.sn }}
            </CardContent>
            <CardContent>
                {{ bike.year }}
            </CardContent>
        </Card>
    </div>
</template>

<script setup>
defineProps(["bike"])



</script>

<style scoped></style>
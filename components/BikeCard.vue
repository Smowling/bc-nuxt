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
                {{ bike.id }}
                {{ index }}
            </CardContent>
            <CardFooter>
                <Button><span>{{ $t('btnHistory') }}</span></Button>
                <Button @click="bikeDelete(bike.id, index)"><span>{{ $t('btnDelete') }}</span></Button>
            </CardFooter>
        </Card>
    </div>
</template>

<script setup>
// import { test1 } from '~/lib/consts';

defineProps(["bike", "index"])
const emit = defineEmits(["deleteBike"])

function bikeDelete(bikeid, index) {
    emit("deleteBike", bikeid, index)
}


</script>

<style scoped></style>
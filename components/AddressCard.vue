<template>
    <div>
        <Card>
            <CardHeader>
            </CardHeader>
            <CardContent>
                {{ address.city }}
            </CardContent>
            <CardContent>
                {{ address.street }}
            </CardContent>
            <CardContent>
                {{ address.number }}
                {{ index }}
            </CardContent>
            <CardFooter>
                <Button><span>{{ $t('btnEdit') }}</span></Button>
                <Button @click="addressDelete(address.id, index)"><span>{{ $t('btnDelete') }}</span></Button>
            </CardFooter>
        </Card>
    </div>
</template>

<script setup>
// import { test1 } from '~/lib/consts';

defineProps(["address", "index"])
const emit = defineEmits(["addressDelete"])

function addressDelete(addressid, index) {
    emit("addressDelete", addressid, index)
}

</script>

<style scoped></style>
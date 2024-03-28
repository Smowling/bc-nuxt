<template>
    <div>

        <Card v-if="!edit">
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
                <Button @click="edit = !edit"><span>{{ $t('btnEdit') }}</span></Button>
                <Button @click="addressDelete(address.id, index)"><span>{{ $t('btnDelete') }}</span></Button>
            </CardFooter>

        </Card>
        <Card v-else>
            <CardContent>
                <Input type="text" placeholder="Country" v-model="temp.country" />
                <Input type="text" placeholder="City" v-model="temp.city" />
                <Input type="text" placeholder="Street" v-model="temp.street" />
                <Input type="text" placeholder="Number" v-model="temp.number" />
            </CardContent>
            <CardFooter>
                <Button @click="edit = !edit"><span>{{ $t('btnCancel') }}</span></Button>
                <Button @click="addressEdit(temp, index)">{{ $t('btnEdit') }}</Button>
            </CardFooter>
        </Card>

    </div>
</template>

<script setup>

const edit = ref(false)
const temp = ref()

defineProps(["address", "index"])
const emit = defineEmits(["addressDelete", "addressEdit"])

console.log(address)

temp.value = address

function addressDelete(addressid, index) {
    emit("addressDelete", addressid, index)
}
function addressEdit(addressForm, index) {
    edit.value = !edit;
    emit("addressEdit", addressForm, index);
}

</script>

<style scoped></style>
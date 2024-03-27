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
                <Input type="text" placeholder="Country" v-model="address.country" />
                <Input type="text" placeholder="City" v-model="address.city" />
                <Input type="text" placeholder="Street" v-model="address.street" />
                <Input type="text" placeholder="Number" v-model="address.number" />
            </CardContent>
            <CardFooter>
                <Button @click="edit = !edit"><span>{{ $t('btnCancel') }}</span></Button>
                <Button @click="editAddress(address, index)">Edit</Button>
            </CardFooter>
        </Card>
    </div>
</template>

<script setup>

const edit = ref(false)
defineProps(["address", "index"])
const emit = defineEmits(["addressDelete", "editAddress"])

function addressDelete(addressid, index) {
    emit("addressDelete", addressid, index)
}
function editAddress(addressForm, index) {
    edit.value = !edit;
    emit("editAddress", addressForm, index);
}

</script>

<style scoped></style>
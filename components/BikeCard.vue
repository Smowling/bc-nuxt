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
// const supabase = useSupabaseClient()
// async function deleteBike(bike_id) {
//     const { error } = await supabase.from("bikes").delete().eq("id", bike_id)
//     if (error) {
//         console.log(error.message)
//     }
//     else {
//         await refreshNuxtData(bike)
//     }
// }

</script>

<style scoped></style>
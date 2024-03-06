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
                <Button><span>History</span></Button>
                <Button @click="$emit(deleteBike, bike.id, index)"><span>Delete</span></Button>
            </CardFooter>
        </Card>
    </div>
</template>

<script setup>
// import { test1 } from '~/lib/consts';

defineProps(["bike", "index"])
defineEmits(["deleteBike"])
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
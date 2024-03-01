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
            <CardFooter>
                <Button><span>History</span></Button>
                <Button @click="deleteBike(bike.id)"><span>Delete</span></Button>
            </CardFooter>
        </Card>
    </div>
</template>

<script setup>
defineProps(["bike"])
const supabase = useSupabaseClient()

async function deleteBike(bike_id) {
    const { error } = await supabase.from("bikes").delete().eq("id", bike_id)
    if (error) {
        console.log(error.message)
    }
}

</script>

<style scoped></style>
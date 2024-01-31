<!-- <script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

const state = reactive({
  email: undefined,
  password: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: 'Required' })
  if (!state.password) errors.push({ path: 'password', message: 'Required' })
  return errors
}

async function onSubmit (event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)
}
</script> -->

<!-- <template>
  <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UButton type="submit" label="Submit" />
  </UForm>
</template> -->


<script setup lang="ts">
const supabase = useSupabaseClient()
const email = ref('')
const state = reactive({
  email: undefined,
})
import type { FormError, FormSubmitEvent } from '#ui/types'

const signInWithOtp = async () => {
  const { error } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      emailRedirectTo: 'http://localhost:3000/confirm',
    }
  })
  if (error) console.log(error)
}

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: 'Required' })
  return errors
}

</script>
<template>
  <UForm :validate="validate" :state="state" class="space-y-4" @submit="signInWithOtp">
      
    <UFormGroup label="Email" name="email">
        <UInput v-model="email" />
    </UFormGroup>

    <UButton type="submit" label="Sigh in with email" @click="signInWithOtp" />

  </UForm>
</template>

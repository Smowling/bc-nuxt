<script setup lang="ts">
    import type { FormError, FormSubmitEvent } from '#ui/types'
    
    const supabase = useSupabaseClient()
    const email = ref('')
    const state = reactive({
        email: undefined,
    })

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

    async function signInWithGoogleOAuth() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        })
        if (error)
        {
            console.log(error);
        }
        else
        {
            console.log(data);
        }
    }
</script>
<template>
    
  <UForm :validate="validate" :state="state" class="space-y-4" @submit="signInWithOtp">
    <UFormGroup label="Email" name="email">
        <UInput v-model="email" />
    </UFormGroup>
    <UButton type="submit" label="Sigh in with email" @click="signInWithOtp" />
  </UForm>
  <p>or</p>
  <UButton class="space-y-4" label="Sign in with Google" @click="signInWithGoogleOAuth" />

</template>

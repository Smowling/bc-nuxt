// middleware/auth.ts

export default defineNuxtRouteMiddleware((context) => {
    const user = useSupabaseUser();
    const routes: string[] = ['/settings'];

    if (!user.value && routes.includes(context.path)) {
        return navigateTo('/login');
    }
});
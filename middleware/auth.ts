import { useAuthStore } from '@/store/auth'

export default defineNuxtRouteMiddleware(async (to, from) => {

    const authStore = useAuthStore()
    console.log(authStore.isAuthenticated)
    // if( !authStore.isAuthenticated ){
    //     try{
    //         await authStore.fetchUser()
    //     }catch(error){
    //         console.log('error:',error)
    //         console.log(error)
    //         return navigateTo('/account/login')
    //     }
    // }

    if( !authStore.isAuthenticated ){
        return navigateTo('/account/login')
    }else{
        return true
    }

})





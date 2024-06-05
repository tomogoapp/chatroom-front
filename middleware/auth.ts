import { useAuthStore } from '@/store/auth'

export default defineNuxtRouteMiddleware(async (to, from) => {

    const authStore = useAuthStore()
    try{
        const response = await authStore.fetchUser()
        console.log(' -->',response)
    }catch(error){
        console.log(error)
        return navigateTo('/account/login')
    }

    // if( !authStore.isAuthenticated ){
    //     return navigateTo('/account/login')
    // }else{
    //     return true
    // }

    //if(to)

})





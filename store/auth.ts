import { defineStore } from 'pinia'
import type { AuthState } from '@/types'

export const useAuthStore = defineStore('auth', {

    state:():AuthState => ({
        user: '',
        token: null
    }),

    actions: {

        initializeStore(){

            const tokenCookie = useCookie('token')

            if (tokenCookie.value) {
                this.token = tokenCookie.value
              }

        },

        async login(email: string, password: string){

            const config = useRuntimeConfig()
            const apiUrl = config.public.apiUrl

            try{

                const response = await fetch (`${apiUrl}/auth/login`,{
                    method: 'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({email,password})
                })

                if (response.ok) {
                    const data: AuthState = await response.json()
                    this.user = data.user
                    this.token = data.token

                    // Establecer cookies utilizando useCookie
                    const tokenCookie = useCookie('token')
                    //const userCookie = useCookie('user')

                    tokenCookie.value = this.token
                    //userCookie.value = JSON.stringify(this.user)

                    console.log('%cLoogueado!!!','color: green;')
                    navigateTo('/dashboard')
                    return data
                }

            }catch(error){
                console.error('Error during login:', error)
            }
        },

        async register (){
            
        },

        async fetchUser(): Promise<boolean> {
            const config = useRuntimeConfig()
            const apiUrl = config.public.apiUrl
        
            try {
                const response = await fetch(`${apiUrl}/auth/check-status`, {
                    headers: {
                        'Authorization': `Bearer ${this.token}`
                    }
                })
        
                if (response.ok) {
                    const data = await response.json()
                    this.user = data.user
                    return true
                } else {
                    console.error('Error fetching user:', response.status.toString())
                    return false
                }
            } catch (error) {
                return false
            }
        }

    },

    getters: {
        isAuthenticated: (state) => !!state.user
    }

})
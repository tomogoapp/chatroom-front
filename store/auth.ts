import { defineStore } from 'pinia'
import type { AuthState,LoginEntity } from '@/types'

export const useAuthStore = defineStore('auth', {

    state:():AuthState => ({
        user: null,
        token: null
    }),

    actions: {

        async login(email: string, password: string){

            const config = useRuntimeConfig()
            const apiUrl = config.public.apiUrl

            try{

                const response = await fetch (`${apiUrl}/login`,{
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
                }

            }catch(error){
                console.error('Error during login:', error)
            }
        },

        async register (){
            
        }

    },

    getters: {
        isAuthenticated: (state) => !!state.user
    }

})
import { defineStore } from 'pinia'
import type { AuthState } from '@/types'

export const useAuthStore = defineStore('auth', {


    state:():AuthState => ({
        user: '',
        token: null
    }),

    actions: {

/* The `initializeStore` method in the `useAuthStore` store is responsible for initializing the store
by checking for a token in a cookie and setting it in the store's state if it exists. Here is a
breakdown of what the method does: */
        initializeStore(){

            const tokenCookie = useCookie('token')

            if (tokenCookie.value) {
                this.token = tokenCookie.value
              }

        },

/* The `login` method in the `useAuthStore` store is responsible for handling the login functionality.
Here is a breakdown of what the method does: */
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

/* The `register` method in the `useAuthStore` store is currently empty, meaning it does not contain
any functionality or code. It is a placeholder method that can be used to implement registration
functionality in the future. */
        async register (){
            
        },

/**
 * This TypeScript function fetches user data from an API endpoint and returns a boolean indicating
 * success or failure.
 * @returns The `fetchUser` method returns a Promise<boolean>. It returns `true` if the user is
 * successfully fetched and `false` if there is an error during the process.
 */
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
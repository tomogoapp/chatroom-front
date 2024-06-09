import { useAuthStore } from '@/store'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore()

/* This code snippet is a route middleware in a Nuxt.js application that handles authentication logic.
Here's a breakdown of what it does: */
  try {
    // Intenta obtener el usuario autenticado
    const response = await authStore.fetchUser()
    const token = authStore.token

/* This code snippet is checking if the response from fetching the user is falsy and if the current
route name is not 'account-login'. If both conditions are met, it will navigate the user to the
'/account/login' route using the `navigateTo` function. This logic ensures that if the user is not
authenticated and is trying to access a route other than the login page, they will be redirected to
the login page. */
    if (!response && to.name !== 'account-login' && to.name !== 'account-register') {
      return navigateTo('/account/login')
    }


/* The code snippet `if (token && to.name === 'account-login')` is checking if the `token` exists and
if the current route name is 'account-login'. If both conditions are met, it will navigate the user
to the '/dashboard' route using the `navigateTo` function. This logic ensures that if the user is
authenticated and is trying to access the login page, they will be redirected to the dashboard
instead. */
    if (token && (to.name === 'account-login' || to.name === 'account-register')) {
      return navigateTo('/dashboard')
    }


/* The code snippet `if (!token && to.name !== 'account-login')` is checking if the `token` does not
exist (is falsy) and if the current route name is not 'account-login'. If both conditions are met,
it will navigate the user to the '/account/login' route using the `navigateTo` function. This logic
ensures that if the user is not authenticated and is trying to access a route other than the login
page, they will be redirected to the login page. */
    if (!token && to.name !== 'account-login' && to.name !== 'account-register') {
      return navigateTo('/account/login')
    }

  } catch (error) {
    console.log(error)
    if (to.name !== 'account-login') {
      return navigateTo('/account/login')
    }
  }
})




export default defineNuxtRouteMiddleware(() => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return navigateTo('/login')
  }
})
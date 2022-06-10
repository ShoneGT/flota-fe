export default (to: any, from: any, next: any) => {
  if (localStorage.getItem('auth') != null && localStorage.getItem('auth').length > 0) {
    next()
  } else {
    localStorage.removeItem('auth')
    next('/login')
  }
}

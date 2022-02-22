export default ({ redirect, store }) => {
  if (!process.server && !store.state.auth.isAuthenticated) {
    redirect('/')
  }
}

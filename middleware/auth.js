export default function ({ store, redirect }) {
  if (!store.state.authUser)
    redirect('/login')
  else
    redirect('/dashboard')
}

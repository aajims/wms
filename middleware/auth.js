export default function ({ store, redirect }) {
  if (!store.state.authToken)
    redirect('/login')
  else
    redirect('/dashboard')
}

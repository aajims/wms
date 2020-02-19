import menus from '@/data/menu'
import { STATUS_FALSE } from '@/utils/constants'

export default function ({ store, redirect, route }) {
  if (!store.state.authToken)
    redirect('/login')
  else {
    let moduleCode   = ''
    const menuAccess = store.getters['getMenuAccess']
    for (const key in menus) {
      if (route.path.includes(menus[key].url)) {
        moduleCode = menus[key].moduleCode
        if (menus[key].children.length !== 0) {
          for (const childKey in menus[key].children) {
            if (route.path.includes(menus[key].children[childKey].url) && menus[key].children[childKey].moduleCode !== '') {
              moduleCode = menus[key].children[childKey].moduleCode
              break
            }
          }
        }
        break
      }
    }

    if (menuAccess[moduleCode] === STATUS_FALSE)
      redirect('/error/noaccess')

    const userProvilege = store.getters['getUserData'].privilege
    for (const key in userProvilege) {
      if (userProvilege[key].module_code === moduleCode) {
        // userProvilege[key].add = 0
        if (route.path.includes('/add')) {
          if (userProvilege[key].add === STATUS_FALSE)
            redirect('/error/noaccess')
        } else if (route.path.includes('/edit')) {
          if (userProvilege[key].add === STATUS_FALSE)
            redirect('/error/noaccess')
        }
        store.dispatch('setAccessPage', { data: userProvilege[key] })
        break
      }
    }
  }
}

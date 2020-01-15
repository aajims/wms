export default [
  {
    name    : 'Dashboard',
    icon    : 'fa flaticon-laptop',
    url     : '/dashboard',
    children: [],
  },
  {
    name    : 'Company',
    icon    : 'fa flaticon2-avatar',
    url     : '/company',
    children: [],
  },
  {
    name    : 'Master',
    icon    : 'fa flaticon-layer',
    url     : '/',
    children: [
      {
        name    : 'Location',
        icon    : 'kt-menu__link-bullet kt-menu__link-bullet--dot',
        url     : '/location',
        children: [],
      },
      {
        name    : 'Warehouse',
        icon    : 'kt-menu__link-bullet kt-menu__link-bullet--dot',
        url     : '/warehouse',
        children: [],
      },
    ],
  },
]

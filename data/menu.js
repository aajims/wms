export default [
  {
    name    : 'Dashboard',
    icon    : 'fa flaticon-laptop',
    url     : '/dashboard',
    children: [],
  },
  {
    name    : 'Company',
    icon    : 'la la-building',
    url     : '/company',
    children: [],
  },
  {
    name    : 'Master',
    icon    : 'fa flaticon-layer',
    url     : '/',
    children: [
      {
        name    : 'Category',
        icon    : 'kt-menu__link-bullet kt-menu__link-bullet--dot',
        url     : '/category',
        children: [],
      },
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
  {
    name    : 'Order List',
    icon    : 'fa flaticon2-shopping-cart-1',
    url     : '/order',
    children: [],
  },
]

export default [
  {
    name        : 'Dashboard',
    icon        : 'fa flaticon-laptop',
    url         : '/dashboard',
    folder      : false,
    childDisplay: false,
    children    : [],
  },
  {
    name        : 'Company',
    icon        : 'la la-building',
    url         : '/company',
    folder      : false,
    childDisplay: false,
    children    : [
      {
        name    : 'Packing',
        icon    : 'kt-menu__link-bullet kt-menu__link-bullet--dot',
        url     : '/packing/list',
        param   : true,
        children: [],
      },
      {
        name    : 'Product',
        icon    : 'kt-menu__link-bullet kt-menu__link-bullet--dot',
        url     : '/product/list',
        param   : true,
        children: [],
      },
    ],
  },
  {
    name        : 'Master',
    icon        : 'fa flaticon-layer',
    url         : '/master',
    folder      : true,
    childDisplay: true,
    children    : [
      {
        name    : 'Category',
        icon    : 'kt-menu__link-bullet kt-menu__link-bullet--dot',
        url     : '/category',
        param   : false,
        children: [],
      },
      {
        name    : 'Location',
        icon    : 'kt-menu__link-bullet kt-menu__link-bullet--dot',
        url     : '/location',
        param   : false,
        children: [],
      },
      {
        name    : 'Warehouse',
        icon    : 'kt-menu__link-bullet kt-menu__link-bullet--dot',
        url     : '/warehouse',
        param   : false,
        children: [],
      },
    ],
  },
]

export default [
  {
    name        : 'Dashboard',
    moduleCode  : 'DBD',
    icon        : 'fa flaticon-laptop',
    url         : '/dashboard',
    folder      : false,
    childDisplay: false,
    children    : [],
  },
  {
    name        : 'Company',
    moduleCode  : 'CMP',
    icon        : 'la la-building',
    url         : '/company',
    folder      : false,
    childDisplay: false,
    children    : [
      {
        name      : 'Packing',
        moduleCode: 'PCK',
        icon      : 'kt-menu__link-bullet kt-menu__link-bullet--dot',
        url       : '/packing/list',
        param     : true,
        children  : [],
      },
      {
        name      : 'Product',
        moduleCode: 'PDC',
        icon      : 'kt-menu__link-bullet kt-menu__link-bullet--dot',
        url       : '/product/list',
        param     : true,
        children  : [],
      },
    ],
  },
  {
    name        : 'Incoming Stock',
    moduleCode  : 'JIN',
    icon        : 'la la-sign-in',
    url         : '/incoming',
    folder      : false,
    childDisplay: false,
    children    : [],
  },
  {
    name        : 'Master',
    moduleCode  : '',
    icon        : 'fa flaticon-layer',
    url         : '/master',
    folder      : true,
    childDisplay: true,
    children    : [
      {
        name      : 'Category',
        moduleCode: 'PCG',
        icon      : 'kt-menu__link-bullet kt-menu__link-bullet--dot',
        url       : '/category',
        param     : false,
        children  : [],
      },
      {
        name      : 'Location',
        moduleCode: 'LOC',
        icon      : 'kt-menu__link-bullet kt-menu__link-bullet--dot',
        url       : '/location',
        param     : false,
        children  : [],
      },
      {
        name      : 'User',
        moduleCode: 'USR',
        icon      : 'kt-menu__link-bullet kt-menu__link-bullet--dot',
        url       : '/user',
        param     : false,
        children  : [],
      },
      {
        name      : 'Warehouse',
        moduleCode: 'WHE',
        icon      : 'kt-menu__link-bullet kt-menu__link-bullet--dot',
        url       : '/warehouse',
        param     : false,
        children  : [],
      },
    ],
  },
  {
    name        : 'Outgoing Stock',
    moduleCode  : 'JOG',
    icon        : 'la la-sign-out',
    url         : '/outgoing',
    folder      : false,
    childDisplay: false,
    children    : [],
  },
  {
    name        : 'Transfer Stock',
    moduleCode  : 'JTF',
    icon        : 'la la-refresh',
    url         : '/transfer',
    folder      : true,
    childDisplay: true,
    children    : [
      {
        name      : 'External',
        moduleCode: '',
        icon      : 'kt-menu__link-bullet kt-menu__link-bullet--dot',
        url       : '/external',
        param     : false,
        children  : [],
      },
      {
        name      : 'Internal',
        moduleCode: '',
        icon      : 'kt-menu__link-bullet kt-menu__link-bullet--dot',
        url       : '/internal',
        param     : false,
        children  : [],
      },
    ],
  },
]

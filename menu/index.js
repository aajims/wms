export default [
  {
    name  : 'dashboard',
    title : 'Dashboard',
    url   : '/dashboard',
    icon  : 'icon-speedometer',
    access: '*',
  },
  {
    name    : 'element',
    title   : 'Elements',
    url     : 'javascript:;',
    icon    : 'icon-layers',
    access  : '*',
    children: [
      {
        name : 'button',
        title: 'Button',
        url  : '/element/buttons',
        icon : '',
      },
      {
        name : 'alert',
        title: 'Alerts',
        url  : '/element/alert',
        icon : '',
      },
      {
        name : 'cards',
        title: 'Cards',
        url  : '/element/cards',
        icon : '',
      },
      {
        name : 'colors',
        title: 'Colors',
        url  : '/element/colors',
        icon : '',
      },
      {
        name : 'modals',
        title: 'Modals',
        url  : '/element/modals',
        icon : '',
      },
      {
        name : 'typography',
        title: 'Typography',
        url  : '/element/typography',
        icon : '',
      },
      {
        name : 'tabs-accordions',
        title: 'Tabs & Accordions',
        url  : '/element/tabs',
        icon : '',
      },
    ],
  },
  {
    name  : 'users',
    title : 'Users',
    url   : '/users',
    icon  : 'icon-people',
    access: '*',
  },
  {
    name  : 'activity-log',
    title : 'Activity Log',
    url   : '/activity',
    icon  : 'icon-refresh',
    access: '*',
  },
]

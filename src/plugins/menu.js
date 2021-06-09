const menus = [
  {
    name: 'Dashboard',
    routeName: 'dashboard',
    children: [],
  },
  {
    name: 'Menu',
    routeName: null,
    children: [
      {
        name: 'Sub Menu',
        routeName: 'login',
      },
      {
        name: 'Sub Menu 2',
        routeName: 'login',
      },
    ],
  },
]

export default menus

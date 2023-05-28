export default [
  {
    menuUrl: "/index",
    menuName: "Dashborad",
    routeName: "dashborad",
    icon: "icon-dashboard",
    parentPath: "",
    children: [
      {
        parentPath: "/index",
        menuUrl: "/index/index",
        menuName: "首页",
        routeName: "Index",
      },
    ],
  },
  {
    menuUrl: "/table",
    menuName: "Table",
    routeName: "Table",
    icon: "icon-table",
    parentPath: "",
    children: [
      {
        parentPath: "/table",
        menuUrl: "/table/menu",
        menuName: "菜单",
        routeName: "TableMenu",
      },
    ],
  },
];

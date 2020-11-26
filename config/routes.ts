export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/dataservice',
    name: 'dataService',
    routes: [
      {
        name: 'dataCollection',
        path: '/dataservice/datacollection',
        component: './Dataservice/Collection',
      },
      {
        name: 'dataManager',
        path: '/dataservice/datamanager',
        component: './Dataservice/DataManager',
      },
      {
        name: 'search',
        path: '/dataservice/search',
        component: './Dataservice/Search',
      },
      {
        name: 'dataset',
        path: '/dataservice/dataset',
        component: './Dataservice/Dataset',
      },
    ],
  },
  {
    path: '/reportservice',
    name: 'reportService',
    routes: [
      {
        name: 'statChart',
        path: '/reportservice/statchart',
        component: './Reportservice/Statchart',
      },
      {
        name: 'dashboard',
        path: '/reportservice/dashboard',
        component: './Reportservice/Dashboard',
      },
      {
        name: 'presetReport',
        path: '/reportservice/presetreport',
        component: './Reportservice/Presetreport',
      },
    ],
  },
  {
    path: '/alertservice',
    name: 'alertService',
    routes: [
      {
        name: 'overview',
        path: '/alertservice/overview',
        component: './Alertservice/Overview',
      },
      {
        name: 'regulation',
        path: '/alertservice/regulation',
        component: './Alertservice/Regulation',
      },
      {
        name: 'servicemanage',
        path: '/alertservice/servicemanage',
        component: './Alertservice/ServiceManage',
      },
    ],
  },
];

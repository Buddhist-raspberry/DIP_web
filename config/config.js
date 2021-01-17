// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  history: {
    type: 'browser',
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/',
      // component: '../layouts/BlankLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/UserLayout',
          routes: [
            {
              path: '/',
              redirect: '/upload',
            },
            {
              path: '/home',
              component: './home',
            },
            {
              path: '/col',
              component: './col',
            },
            {
              path: '/upload',
              component: './uploadFile',
            },
            {
              component: '404',
            },
          ]
        }
      ],
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // 'primary-color': defaultSettings.primaryColor,
    'primary-color': defaultSettings.primaryColor,
    'component-background': '#7f8fa6',
    // 'table-bg':'#0097e6',//背景
    'table-header-bg': '#353b48',//首行背景颜色
    'table-header-color': '#0abde3',//首行字体颜色
    'table-row-hover-bg':'#00a8ff',//鼠标选择
    'upload-actions-color':'#7f8fa6'

  },
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});

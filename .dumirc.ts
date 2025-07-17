import { defineConfig } from 'dumi';

export default defineConfig({
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'EN' },
  ],
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'Secure State',
  },
  base: '/react-secure-state/',
  publicPath: '/react-secure-state/',
});

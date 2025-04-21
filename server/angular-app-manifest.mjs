
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-19-project/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-19-project"
  },
  {
    "renderMode": 2,
    "route": "/angular-19-project/profile"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 532, hash: '75a153e2f05b745d9d72d66f3f18ab02dca4191fd2f1a4a4c48bfb4cf1daaab7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1045, hash: '848adba5c0b1b4dd41c3fced351750c925a0c07e5478bd34044c872478006197', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22088, hash: '339a63ae6bdcaf2d57f5d6a909385de42a604dc4f10ec95a1ae036b070e216bf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 22152, hash: '8e9eca5535698787a76a14060e4589117ea18d3c9d602f586f9d0afb0678a32c', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

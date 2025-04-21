
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-19',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-19"
  },
  {
    "renderMode": 2,
    "route": "/angular-19/profile"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 523, hash: '04c55f0e4bc50a2f8e90c13fea481edded15d3aa9206e83a4b28617f56e5c62e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1036, hash: '625336628fab0c2148c4b2592aaad00242534ebf7d3c12f8046211a7e5e39528', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22063, hash: 'd6a6b4f72869697b75083e2cdbeb399c50bf5c84b12daeadcdc35aaa49266229', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 22127, hash: '1186565d7cd554975c29585a7be41177cbc5caa0ed6d506299db19a8adf827bb', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};


export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/profile"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 513, hash: 'dfa9c8a7c56864299702b14de50546507dbaf8947976a53ac8db9ebb7c98c07a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1026, hash: '4427b474383b02a6bc8079286703d821d2233d492fe19b211a799f1fa2e8d73e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22031, hash: '333050c6ac0c84910e0f8e63782998f4f7294cd4d230f55ff5bf6f3d4f14fac2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 22095, hash: 'a5f1fff677f9792ca22f6be89d70bac2b2b6eaf50c6a2e220b11c0a0f2f950a5', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

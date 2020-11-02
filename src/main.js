// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  const gIndex = head.meta.findIndex(e => e.name === 'generator')
  if (gIndex !== -1) head.meta.splice(gIndex, 1)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}

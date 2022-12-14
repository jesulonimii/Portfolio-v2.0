import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Redirect from '../views/RedirectView.vue'
import ProjectView from '../views/Projects.vue'
import ProjectInfo from '../views/ProjectInfo.vue'
import NotFound from '../views/NotFound.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        title: 'Home - Jèsúlonimii™',
        metaTags: [
          {
            name: 'description',
            content: 'Jèsúlonimii™ | Fullstack Developer & Designer'
          },
          {
            property: 'og:description',
            content: 'Jèsúlonimii™ | Fullstack Developer & Designer'
          },
          {
            property: 'og:image',
            content: 'https://i.ibb.co/dJr1wt7/og-image.png'
          }
        ]
      }
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/cv',
      beforeEnter() {location.href = '/assets/[resume]-Jesulonimii.pdf'}
    },
    {
      path: '/resume',
      beforeEnter() {location.href = '/assets/[resume]-Jesulonimii.pdf'}

    },
    {
      name: 'Github',
      path: '/github',
      component: Redirect,
      beforeEnter() {location.href = 'https://github.com/jesulonimii'}
    },
    {
      name: 'Email',
      path: '/mail',
      component: Redirect,
      beforeEnter() {location.href = 'mailto:jesulonimii.will@gmail.com'}
    },
    {
      path: '/about',
      name: 'About',
      component: Redirect,
      beforeEnter() {location.href = `/#about`}
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Redirect,
      beforeEnter() {location.href = `/#contact`}
    },
    {
      name: 'Twitter',
      path: '/twitter',
      component: Redirect,
      beforeEnter() {location.href = 'https://twitter.com/jesulonimii'}

    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: ProjectView,
      meta: {
        title: 'Portfolio - Jèsúlonimii™',
        metaTags: [
          {
            name: 'description',
            content: 'Jèsúlonimii™ | Fullstack Developer & Designer'
          },
          {
            property: 'og:description',
            content: 'Jèsúlonimii™ | Fullstack Developer & Designer'
          },
          {
            property: 'og:image',
            content: 'https://i.ibb.co/dJr1wt7/og-image.png'
          }
        ]
      }
    },
    {
      path: '/portfolio/:name',
      name: 'page for',
      component: ProjectInfo,
      meta: {
        title: 'Portfolio - Jèsúlonimii™',
        metaTags: [
          {
            name: 'description',
            content: 'William Jesulonimi Abodunrin Portfolio'
          },
          {
            property: 'og:description',
            content: 'William Jesulonimi Abodunrin Portfolio'
          }
        ]
      }
    },
    {
      path: '/playlist',
      name: 'Playlist',
      component: Redirect,
      beforeEnter() {location.href = `/#playlist`}
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
      meta: {
        title: 'Not Found- Jèsúlonimii™',
        metaTags: [
          {
            name: 'description',
            content: 'William Jesulonimi Abodunrin Portfolio'
          },
          {
            property: 'og:description',
            content: 'William Jesulonimi Abodunrin Portfolio'
          }
        ]
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  window.scrollTo(0, 0)

  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
      // Add the meta tags to the document head.
      .forEach(tag => document.head.appendChild(tag));

  next();
});


export default router

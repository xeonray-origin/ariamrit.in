import { HomePage, AboutPage, NewsPage } from './../pages';

export const appConfig = {
  name: 'Ariamrit Engineering Ltd',
  slogan: 'Promoting Efficiency',
  routes: [
    {
      path: '/',
      component: <HomePage />,
    },
    {
      path: '/about',
      component: <AboutPage />,
    },
    {
      path: '/news',
      component: <NewsPage />,
    },
  ],
};

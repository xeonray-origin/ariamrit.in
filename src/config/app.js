import { HomePage, AboutPage } from 'pages';

export const appConfig = {
  name: 'Ariamrit Engineering Ltd',
  slogan: 'Promoting Efficiency',
  appUrl: process.env.PUBLIC_URL,
  logo: `${process.env.PUBLIC_URL}/resources/logo.png`,
  menuItems: ['Contact', 'Research', 'Products', 'About', 'Home'],
  routes: [
    {
      path: '/',
      component: <HomePage />,
    },
    {
      path: '/about',
      component: <AboutPage />,
    },
  ],
};

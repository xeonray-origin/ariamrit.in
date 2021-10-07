import { HomePage, AboutPage } from 'pages';

export const appConfig = {
  name: 'Ariamrit Engineering Ltd',
  slogan: 'Promoting Efficiency',
  appUrl: process.env.PUBLIC_URL,
  logo: `${process.env.PUBLIC_URL}/resources/logo.png`,
  menuItems: ['Home', 'About', 'Products', 'Research', 'Contact'],
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

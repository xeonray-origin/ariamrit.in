import { HomePage, AboutPage } from 'pages';

export const appConfig = {
  name: 'Ariamrit Engineering Ltd',
  slogan: 'Promoting Efficiency',
  logo: `${process.env.PUBLIC_URL}/resources/logo.png`,
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

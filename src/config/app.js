import { HomePage, AboutPage, ProductPage, ProductViewPage } from 'pages';

export const appConfig = {
  name: 'Ariamrit Engineering Ltd',
  slogan: 'Promoting Efficiency',
  appUrl: process.env.PUBLIC_URL,
  logo: `${process.env.PUBLIC_URL}/resources/logo.png`,
  menuItems: [
    { path: 'Contact', icon: 'contact_phone' },
    { path: 'Research', icon: 'science' },
    { path: 'Products', icon: 'local_shipping_icon' },
    { path: 'About', icon: 'info' },
    { path: 'Home', icon: 'home' },
  ],
  routes: [
    {
      path: '/',
      component: <HomePage />,
    },
    {
      path: '/home',
      component: <HomePage />,
    },
    {
      path: '/about',
      component: <AboutPage />,
    },
    {
      path: '/products',
      component: <ProductPage />,
    },
    {
      path: '/product/:id',
      component: <ProductViewPage />,
    },
  ],
};

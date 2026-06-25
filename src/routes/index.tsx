
import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import Careers from '../pages/Careers';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import Login from '../pages/Login';
import ServiceDetail from '../pages/ServiceDetail';
import PortfolioDetail from '../pages/PortfolioDetail';
import BlogDetail from '../pages/BlogDetail';
import CareerDetail from '../pages/CareerDetail';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfService from '../pages/TermsOfService';
import TechnologyDetail from '../pages/TechnologyDetail';
import Admin from '../pages/Admin';
import ClientDashboard from '../pages/ClientDashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'services/:slug',
        element: <ServiceDetail />,
      },
      {
        path: 'technologies/:slug',
        element: <TechnologyDetail />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'careers',
        element: <Careers />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'portfolio/:slug',
        element: <PortfolioDetail />,
      },
      {
        path: 'blog/:slug',
        element: <BlogDetail />,
      },
      {
        path: 'careers/:id',
        element: <CareerDetail />,
      },
      {
        path: 'privacy',
        element: <PrivacyPolicy />,
      },
      {
        path: 'terms',
        element: <TermsOfService />,
      },
      {
        path: 'admin',
        element: <Admin />,
      },
      {
        path: 'dashboard',
        element: <ClientDashboard />,
      },
    ],
  },
]);

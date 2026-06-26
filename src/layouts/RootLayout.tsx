
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';
import { ScrollToTop } from '../components/shared/ScrollToTop';

export const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[black] text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

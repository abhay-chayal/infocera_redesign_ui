import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { navigationData } from '../../data/navigation';
import { MobileMenu } from './MobileMenu';
import { cn } from '../../utils/cn';
import { Button } from './Button';
import { supabase } from '../../lib/supabase';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Auth listener
    const { data: authListener } = supabase.auth.onAuthStateChange(async (_, session) => {
      if (session) {
        setIsAuthenticated(true);
        const { data: profile } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', session.user.id)
          .single();
        setUserRole(profile?.role || 'client');
      } else {
        setIsAuthenticated(false);
        setUserRole(null);
      }
    });

    // Check initial session
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (session) {
        setIsAuthenticated(true);
        const { data: profile } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', session.user.id)
          .single();
        setUserRole(profile?.role || 'client');
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      authListener.subscription.unsubscribe();
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-700 border-b",
          scrolled || isMobileMenuOpen
            ? "bg-[#070b14]/60 backdrop-blur-xl border-white/10 py-3 shadow-2xl"
            : "bg-[#070b14]/0 border-transparent py-5"
        )}
      >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">

        {/* Brand Logo */}
        <Link
          to="/"
          className="flex flex-col items-start py-2 leading-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] relative z-50 mr-8 hover:opacity-90 transition-opacity"
          aria-label="Infocera Home"
        >
          <span className="font-['Exo','Orbitron',sans-serif] font-[900] text-[28px] tracking-[3px] bg-gradient-to-br from-[#5b21b6] via-[#9333ea] to-[#4f46e5] bg-clip-text text-transparent">
            INFOCERA
          </span>
          <span className="font-sans font-[700] text-[9px] tracking-[4px] text-white mt-[3px] uppercase">
            Seamless Connections
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-7" aria-label="Main Navigation">
          {navigationData.map((item) => (
            <div
              key={item.label}
              className="relative group px-3 py-2"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.isMegaMenu ? (
                <>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center text-[15px] font-medium transition-colors outline-none",
                      activeDropdown === item.label ? "text-purple-400" : "text-white hover:text-purple-300"
                    )}
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.label}
                    <ChevronDown className={cn("w-4 h-4 ml-1 opacity-70 transition-transform duration-200", activeDropdown === item.label && "rotate-180")} />
                  </Link>

                  {/* Mega Menu Dropdown */}
                  <div
                    className={cn(
                      "absolute top-full -left-[300px] w-[800px] bg-[#111827] border border-white/10 rounded-xl shadow-2xl py-8 px-8 transition-all duration-200 origin-top mt-5",
                      activeDropdown === item.label ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    )}
                    role="menu"
                  >
                    <div className="grid grid-cols-3 gap-x-8 gap-y-10">
                      {item.megaMenuColumns?.map((col) => (
                        <div key={col.title}>
                          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                            {col.title}
                          </h3>
                          <ul className="space-y-2.5">
                            {col.items.map((child) => (
                              <li key={child.label}>
                                <Link
                                  to={child.path}
                                  className="text-sm text-gray-300 hover:text-white hover:underline decoration-purple-500 underline-offset-4 transition-all block"
                                  role="menuitem"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : item.children ? (
                <>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center text-[15px] font-medium transition-colors outline-none",
                      activeDropdown === item.label ? "text-purple-400" : "text-white hover:text-purple-300"
                    )}
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.label}
                    <ChevronDown className={cn("w-4 h-4 ml-1 opacity-70 transition-transform duration-200", activeDropdown === item.label && "rotate-180")} />
                  </Link>

                  {/* Standard Dropdown */}
                  <div
                    className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 w-64 bg-[#111827] border border-white/10 rounded-xl shadow-2xl py-3 transition-all duration-200 origin-top mt-5",
                      activeDropdown === item.label ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    )}
                    role="menu"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="block px-6 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                        role="menuitem"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  className={cn(
                    "text-[15px] font-medium transition-colors hover:text-purple-400",
                    location.pathname === item.path ? "text-white" : "text-gray-200"
                  )}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden xl:flex items-center space-x-6 ml-4">
          <Button
            href={isAuthenticated ? (userRole === 'admin' ? '/admin' : '/dashboard') : '/login'}
            variant="secondary"
            size="sm"
            className="bg-[#6b21a8] hover:bg-[#581c87] rounded text-[15px] shadow-none hover:shadow-none hover:-translate-y-0"
          >
            {isAuthenticated ? (userRole === 'admin' ? 'Admin Panel' : 'Dashboard') : 'My Account'}
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-purple-400 hover:bg-transparent" aria-label="Search">
            <Search className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="xl:hidden flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-white hover:text-purple-400 hover:bg-transparent" aria-label="Search">
            <Search className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="relative z-50 text-white hover:text-purple-400 hover:bg-transparent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </Button>
        </div>
      </div>
    </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        items={navigationData}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

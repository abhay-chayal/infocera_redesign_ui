import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { navigationData } from '../../data/navigation';
import { MobileMenu } from './MobileMenu';
import { cn } from '../../utils/cn';
import { Button } from './Button';
import { supabase } from '../../lib/supabase';
import { useTheme } from '../../contexts/ThemeContext';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const isTransparentOnHome = !scrolled && location.pathname === '/';

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
          "fixed top-0 z-50 w-full transition-all duration-700",
          scrolled || isMobileMenuOpen
            ? "bg-white/80 dark:bg-[#111111]/70 backdrop-blur-2xl border-b border-slate-200 dark:border-white/5 py-4 shadow-xl"
            : "bg-transparent border-transparent py-6"
        )}
      >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">

        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center py-2 leading-none relative z-50 mr-8 hover:opacity-80 transition-opacity"
          aria-label="Infocera Home"
        >
          <span className="font-['Exo','Orbitron',sans-serif] text-[28px] tracking-[3px]">
            <span className={cn("font-[900] transition-colors", isTransparentOnHome ? "text-white" : "text-slate-900 dark:text-white")}>INFO</span>
            <span className={cn("font-[400] transition-colors", isTransparentOnHome ? "text-cyan-400" : "text-[#0ea5e9] dark:text-cyan-400")}>CERA</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-8" aria-label="Main Navigation">
          {navigationData.map((item) => (
            <div
              key={item.label}
              className="relative group py-2"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.isMegaMenu ? (
                <>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center text-[14px] font-medium transition-colors outline-none tracking-wide",
                      activeDropdown === item.label 
                        ? (isTransparentOnHome ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" : "text-slate-900 dark:text-white drop-shadow-md dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]") 
                        : (isTransparentOnHome ? "text-white/80 hover:text-white" : "text-slate-900 dark:text-zinc-300 hover:text-black dark:hover:text-white")
                    )}
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.label}
                    <ChevronDown className={cn("w-3 h-3 ml-1.5 opacity-50 transition-transform duration-300", activeDropdown === item.label && "rotate-180")} />
                  </Link>

                  {/* Mega Menu Dropdown */}
                  <div
                    className={cn(
                      "absolute top-full -left-[300px] w-[800px] bg-white/95 dark:bg-[#111111]/95 backdrop-blur-3xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl py-8 px-8 transition-all duration-300 origin-top mt-4",
                      activeDropdown === item.label ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
                    )}
                    role="menu"
                  >
                    <div className="grid grid-cols-3 gap-x-8 gap-y-10">
                      {item.megaMenuColumns?.map((col) => (
                        <div key={col.title}>
                          <h3 className="text-[11px] font-bold text-slate-500 dark:text-zinc-500 uppercase tracking-[0.2em] mb-4 border-b border-slate-200 dark:border-white/5 pb-3">
                            {col.title}
                          </h3>
                          <ul className="space-y-3">
                            {col.items.map((child) => (
                              <li key={child.label}>
                                <Link
                                  to={child.path}
                                  className="text-[13px] font-medium text-slate-600 dark:text-zinc-300 hover:text-[#0ea5e9] dark:hover:text-white transition-colors block"
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
                      "flex items-center text-[14px] font-medium transition-colors outline-none tracking-wide",
                      activeDropdown === item.label 
                        ? (isTransparentOnHome ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" : "text-slate-900 dark:text-white drop-shadow-md dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]") 
                        : (isTransparentOnHome ? "text-white/80 hover:text-white" : "text-slate-900 dark:text-zinc-300 hover:text-black dark:hover:text-white")
                    )}
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.label}
                    <ChevronDown className={cn("w-3 h-3 ml-1.5 opacity-50 transition-transform duration-300", activeDropdown === item.label && "rotate-180")} />
                  </Link>

                  {/* Standard Dropdown */}
                  <div
                    className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white/95 dark:bg-[#111111]/95 backdrop-blur-3xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl py-4 transition-all duration-300 origin-top mt-4",
                      activeDropdown === item.label ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
                    )}
                    role="menu"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="block px-6 py-2.5 text-[13px] font-medium text-slate-600 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-white/10 hover:text-[#0ea5e9] dark:hover:text-white transition-colors"
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
                    "text-[14px] font-medium transition-colors tracking-wide",
                    location.pathname === item.path 
                      ? (isTransparentOnHome ? "text-white" : "text-[#0ea5e9] dark:text-white") 
                      : (isTransparentOnHome ? "text-white/80 hover:text-white" : "text-slate-900 dark:text-zinc-300 hover:text-black dark:hover:text-white")
                  )}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden xl:flex items-center space-x-4 ml-4">
          <button
            onClick={toggleTheme}
            className={cn(
              "p-2 rounded-full transition-colors",
              isTransparentOnHome 
                ? "text-white hover:bg-white/10" 
                : "text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-white/10"
            )}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          
          <Button
            href={isAuthenticated ? (userRole === 'admin' ? '/admin' : '/dashboard') : '/login'}
            variant="secondary"
            size="sm"
            className="bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-slate-800 dark:hover:bg-zinc-200 rounded-full px-6 text-[13px] font-bold tracking-wide shadow-none hover:shadow-none transition-transform hover:scale-105"
          >
            {isAuthenticated ? (userRole === 'admin' ? 'Admin Panel' : 'Dashboard') : 'My Account'}
          </Button>
        </div>

        {/* Mobile Nav Actions */}
        <div className="xl:hidden flex items-center space-x-1 sm:space-x-4">
          <button
            onClick={toggleTheme}
            className={cn(
              "p-2 rounded-full transition-colors",
              isTransparentOnHome 
                ? "text-white hover:bg-white/10" 
                : "text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-white/10"
            )}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "relative z-50 hover:bg-transparent",
              isTransparentOnHome 
                ? "text-white hover:text-white/80" 
                : "text-slate-900 dark:text-zinc-300 hover:text-slate-700 dark:hover:text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
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

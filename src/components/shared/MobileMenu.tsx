import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { NavItem } from '../../data/navigation';
import { Button } from './Button';

interface MobileMenuProps {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ items, isOpen, onClose }: MobileMenuProps) => {
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});

  const menuRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
      // Auto-focus first element
      const timer = setTimeout(() => {
        const focusable = menuRef.current?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusable && focusable.length > 0) {
          (focusable[0] as HTMLElement).focus();
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = '';
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || e.key !== 'Tab') return;
      
      const focusable = menuRef.current?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (!focusable || focusable.length === 0) return;
      
      const firstElement = focusable[0] as HTMLElement;
      const lastElement = focusable[focusable.length - 1] as HTMLElement;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <div
      ref={menuRef}
      aria-hidden={!isOpen}
      inert={!isOpen ? true : undefined}
      className={cn(
        "fixed inset-0 top-[72px] bg-[#0B1120] z-40 transition-transform duration-300 ease-in-out xl:hidden overflow-y-auto",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <nav className="flex flex-col px-6 py-8 space-y-2 h-full">
        {items.map((item) => (
          <div key={item.label} className="border-b border-white/10 py-3">
            {item.isMegaMenu || item.children ? (
              <div>
                <div className="flex items-center justify-between w-full">
                  <Link
                    to={item.path}
                    className="font-medium text-lg text-white hover:text-purple-400 transition-colors"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="p-2 text-white hover:text-purple-300 transition-colors focus:outline-none"
                    aria-expanded={openDropdowns[item.label]}
                    aria-label={`Toggle ${item.label} menu`}
                  >
                    {openDropdowns[item.label] ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                </div>
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300 ease-in-out',
                    openDropdowns[item.label] ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                  )}
                >
                  {item.isMegaMenu ? (
                    <div className="flex flex-col space-y-6 pl-4 border-l-2 border-white/10">
                      {item.megaMenuColumns?.map((col) => (
                        <div key={col.title}>
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                            {col.title}
                          </h4>
                          <div className="flex flex-col space-y-3">
                            {col.items.map((child) => (
                              <Link
                                key={child.label}
                                to={child.path}
                                className="text-[15px] text-gray-300 hover:text-white transition-colors"
                                onClick={onClose}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col pl-4 space-y-3 border-l-2 border-white/10">
                      {item.children?.map((child) => (
                        <Link
                          key={child.label}
                          to={child.path}
                          className="text-[15px] text-gray-300 hover:text-white transition-colors"
                          onClick={onClose}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <Link
                to={item.path}
                className="block font-medium text-lg text-white hover:text-purple-400 transition-colors"
                onClick={onClose}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
        
        <div className="pt-8 pb-12 mt-auto">
          <Button
            href="/login"
            onClick={onClose}
            variant="secondary"
            size="lg"
            className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] shadow-lg hover:shadow-purple-500/25"
          >
            My Account
          </Button>
        </div>
      </nav>
    </div>
  );
};

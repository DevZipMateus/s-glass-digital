import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import logo from '@/assets/logo.png';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  const navLinks = [{
    href: '#inicio',
    label: 'Início'
  }, {
    href: '#sobre',
    label: 'Sobre'
  }, {
    href: '#produtos',
    label: 'Produtos'
  }, {
    href: '#servicos',
    label: 'Serviços'
  }, {
    href: '#contato',
    label: 'Contato'
  }];
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/95 backdrop-blur-sm shadow-lg' : 'bg-primary'}`}>
      <div className="section-container">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 z-50">
            <img src={logo} alt="Logo S Glass - Vidros para máquinas agrícolas e pesadas" className="h-20 sm:h-12 md:h-14 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map(link => <a key={link.href} href={link.href} className="font-heading text-primary-foreground/80 hover:text-accent transition-colors duration-300 uppercase tracking-wide text-xs lg:text-sm">
                {link.label}
              </a>)}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a href="https://wa.me/5519991570834" target="_blank" rel="noopener noreferrer" className="btn-accent flex items-center gap-2 text-xs lg:text-sm py-2 px-4 lg:px-6" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">Fale conosco</span>
              <span className="lg:hidden">Contato</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-primary-foreground z-50 relative" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}>
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? <motion.div key="close" initial={{
              rotate: -90,
              opacity: 0
            }} animate={{
              rotate: 0,
              opacity: 1
            }} exit={{
              rotate: 90,
              opacity: 0
            }} transition={{
              duration: 0.2
            }}>
                  <X className="w-6 h-6" />
                </motion.div> : <motion.div key="menu" initial={{
              rotate: 90,
              opacity: 0
            }} animate={{
              rotate: 0,
              opacity: 1
            }} exit={{
              rotate: -90,
              opacity: 0
            }} transition={{
              duration: 0.2
            }}>
                  <Menu className="w-6 h-6" />
                </motion.div>}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: 0.3
      }} className="fixed inset-0 bg-primary z-40 md:hidden">
            <motion.nav className="flex flex-col items-center justify-center h-full gap-6 px-6" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.1
        }}>
              {navLinks.map((link, index) => <motion.a key={link.href} href={link.href} onClick={handleNavClick} className="font-heading text-primary-foreground text-2xl sm:text-3xl hover:text-accent transition-colors duration-300 uppercase tracking-wide" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.1 + index * 0.05
          }}>
                  {link.label}
                </motion.a>)}
              <motion.a href="https://wa.me/5519991570834" target="_blank" rel="noopener noreferrer" className="btn-accent inline-flex items-center gap-2 mt-6 text-lg" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4
          }}>
                <Phone className="w-5 h-5" />
                Fale conosco
              </motion.a>
            </motion.nav>
          </motion.div>}
      </AnimatePresence>
    </header>;
};
export default Header;
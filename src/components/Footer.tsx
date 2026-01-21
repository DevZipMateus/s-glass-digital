import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const linkHover = {
    x: 5,
    transition: { duration: 0.2 }
  };

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-accent rounded-full blur-3xl" />
      </div>

      {/* Main Footer */}
      <div className="section-container py-8 sm:py-10 md:py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <motion.div 
            className="sm:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src={logo}
              alt="Logo S Glass"
              className="h-12 sm:h-14 md:h-16 w-auto mb-3 sm:mb-4"
            />
            <p className="text-sm sm:text-base text-primary-foreground/70 max-w-md leading-relaxed mb-3 sm:mb-4">
              S Glass Vidros — Seu parceiro em vidros para máquinas agrícolas, pesadas e caminhões. 
              Qualidade, segurança e agilidade para todo o Brasil.
            </p>
            <div className="flex items-center gap-3">
              <motion.a
                href="https://www.instagram.com/sglass.piracicaba"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Links rápidos</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { href: '#inicio', label: 'Início' },
                { href: '#sobre', label: 'Sobre nós' },
                { href: '#produtos', label: 'Produtos' },
                { href: '#servicos', label: 'Serviços' },
                { href: '#contato', label: 'Contato' },
              ].map((link, index) => (
                <li key={index}>
                  <motion.a 
                    href={link.href} 
                    className="text-sm sm:text-base text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center"
                    whileHover={linkHover}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Contato</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 text-sm sm:text-base text-primary-foreground/70">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                <span>Rua José Linhares, 645 - Jardim dos Manacás, Piracicaba/SP</span>
              </li>
              <li>
                <motion.a
                  href="tel:1933770754"
                  className="flex items-center gap-2 text-sm sm:text-base text-primary-foreground/70 hover:text-accent transition-colors"
                  whileHover={linkHover}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  (19) 3377-0754
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="mailto:alcineia@sglassagricola.com.br"
                  className="flex items-center gap-2 text-sm sm:text-base text-primary-foreground/70 hover:text-accent transition-colors break-all"
                  whileHover={linkHover}
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="break-all">alcineia@sglassagricola.com.br</span>
                </motion.a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-4 sm:py-6">
          <p className="text-xs sm:text-sm text-primary-foreground/60 text-center">
              © {currentYear} S Glass Comércio e Distribuição de Vidros, Peças e Acessórios. 
              Todos os direitos reservados.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

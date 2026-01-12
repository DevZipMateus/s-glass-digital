import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="section-container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="Logo S Glass"
              className="h-16 w-auto mb-4"
            />
            <p className="text-primary-foreground/70 max-w-md leading-relaxed mb-4">
              S Glass Vidros — Seu parceiro em vidros para máquinas agrícolas, pesadas e caminhões. 
              Qualidade, segurança e agilidade para todo o Brasil.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/sglass.piracicaba"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Rua José Linhares, 645 - Jardim dos Manacás, Piracicaba/SP</span>
              </li>
              <li>
                <a
                  href="tel:1933770754"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (19) 3377-0754
                </a>
              </li>
              <li>
                <a
                  href="mailto:alcineia@sglassagricola.com.br"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  alcineia@sglassagricola.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>
              © {currentYear} S Glass Comércio e Distribuição de Vidros, Peças e Acessórios. 
              Todos os direitos reservados.
            </p>
            <p>CNPJ: 43.729.447/0001-09</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

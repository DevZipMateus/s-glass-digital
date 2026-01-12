import { ArrowRight, Shield, Award } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container w-full py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/90 text-accent-foreground px-4 py-2 rounded mb-6 animate-fade-in">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              +15 anos de experiência
            </span>
          </div>

          {/* H1 - Company Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 animate-slide-in-left leading-tight">
            S Glass Vidros
          </h1>

          {/* H2 - Description */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 animate-fade-in font-light leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Seu parceiro em vidros para máquinas agrícolas, pesadas e caminhões em todo o Brasil
          </h2>

          {/* Features */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 text-white/80">
              <Award className="w-5 h-5 text-accent" />
              <span>Qualidade garantida</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Shield className="w-5 h-5 text-accent" />
              <span>Segurança em primeiro lugar</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a
              href="https://wa.me/551933770754"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent inline-flex items-center gap-2"
            >
              Solicitar orçamento
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#produtos"
              className="btn-outline-light"
            >
              Nossos produtos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

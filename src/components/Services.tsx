import { motion } from 'framer-motion';
import { Wrench, Truck, Settings, Clock } from 'lucide-react';
import { FadeInWhenVisible, StaggerContainer, StaggerItem, ParallaxImage } from './animations/ParallaxEffects';
import serviceInstall from '@/assets/service-install.jpg';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Instalação profissional',
      description: 'Instalação de vidros com mão de obra especializada, garantindo perfeito acabamento e vedação.',
    },
    {
      icon: Settings,
      title: 'Manutenção',
      description: 'Serviços de manutenção e troca de vidros para máquinas agrícolas, pesadas e caminhões.',
    },
    {
      icon: Truck,
      title: 'Entrega para todo Brasil',
      description: 'Enviamos nossos produtos para todo o território nacional com segurança e agilidade.',
    },
    {
      icon: Clock,
      title: 'Atendimento rápido',
      description: 'Equipe pronta para atender suas necessidades com agilidade, mantendo suas máquinas em operação.',
    },
  ];

  return (
    <section id="servicos" className="section-padding bg-secondary overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <FadeInWhenVisible className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block bg-accent/10 text-accent-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4">
            Nossos serviços
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Soluções completas
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Além de produtos de qualidade, oferecemos serviços especializados para atender todas as suas necessidades
          </p>
        </FadeInWhenVisible>

        {/* Image + Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 sm:mb-12 md:mb-16">
          {/* Image */}
          <FadeInWhenVisible direction="left" className="order-2 lg:order-1">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl group">
              <ParallaxImage 
                src={serviceInstall} 
                alt="Técnico instalando vidro em máquina pesada" 
                className="h-56 sm:h-72 md:h-80 lg:h-[450px]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-accent/20" />
              {/* Floating badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-accent text-accent-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg"
              >
                Serviço especializado
              </motion.div>
            </div>
          </FadeInWhenVisible>

          {/* Services List */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 order-1 lg:order-2" staggerDelay={0.1}>
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-border hover:border-accent hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 group h-full">
                  <motion.div 
                    className="w-11 h-11 sm:w-12 md:w-14 sm:h-12 md:h-14 bg-accent/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-accent transition-colors duration-300"
                    whileHover={{ rotate: 10 }}
                  >
                    <service.icon className="w-5 h-5 sm:w-6 md:w-7 sm:h-6 md:h-7 text-accent-foreground group-hover:text-accent-foreground" />
                  </motion.div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5 sm:mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Highlight */}
        <FadeInWhenVisible>
          <div className="bg-accent rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center relative z-10">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-foreground mb-3 sm:mb-4">
                  Atendimento especializado
                </h3>
                <p className="text-sm sm:text-base text-accent-foreground/80 leading-relaxed">
                  Nossa equipe é formada por profissionais com vasta experiência no mercado de vidros 
                  automotivos e industriais. Estamos prontos para ajudar você a encontrar a melhor 
                  solução para sua necessidade.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-end">
                <motion.a
                  href="tel:1933770754"
                  className="bg-primary text-primary-foreground font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-center text-sm sm:text-base hover:bg-dark-lighter transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  (19) 3377-0754
                </motion.a>
                <motion.a
                  href="https://wa.me/551933770754"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-center text-sm sm:text-base hover:bg-dark-lighter transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  WhatsApp
                </motion.a>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default Services;

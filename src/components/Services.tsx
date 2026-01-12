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
        <FadeInWhenVisible className="text-center mb-16">
          <span className="inline-block bg-accent/10 text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm uppercase tracking-wide mb-4">
            Nossos serviços
          </span>
          <h2 className="section-title text-foreground">
            Soluções completas
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Além de produtos de qualidade, oferecemos serviços especializados para atender todas as suas necessidades
          </p>
        </FadeInWhenVisible>

        {/* Image + Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <FadeInWhenVisible direction="left">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <ParallaxImage 
                src={serviceInstall} 
                alt="Técnico instalando vidro em máquina pesada" 
                className="h-80 md:h-[450px]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-accent/20" />
              {/* Floating badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold text-sm shadow-lg"
              >
                Serviço especializado
              </motion.div>
            </div>
          </FadeInWhenVisible>

          {/* Services List */}
          <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.1}>
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <div className="bg-card p-6 rounded-xl border border-border hover:border-accent hover:shadow-xl transition-all duration-300 group h-full">
                  <motion.div 
                    className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300"
                    whileHover={{ rotate: 10 }}
                  >
                    <service.icon className="w-7 h-7 text-accent-foreground group-hover:text-accent-foreground" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Highlight */}
        <FadeInWhenVisible>
          <div className="bg-accent rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-accent-foreground mb-4">
                  Atendimento especializado
                </h3>
                <p className="text-accent-foreground/80 leading-relaxed">
                  Nossa equipe é formada por profissionais com vasta experiência no mercado de vidros 
                  automotivos e industriais. Estamos prontos para ajudar você a encontrar a melhor 
                  solução para sua necessidade.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                <motion.a
                  href="tel:1933770754"
                  className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl text-center hover:bg-dark-lighter transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  (19) 3377-0754
                </motion.a>
                <motion.a
                  href="https://wa.me/551933770754"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl text-center hover:bg-dark-lighter transition-colors duration-300"
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

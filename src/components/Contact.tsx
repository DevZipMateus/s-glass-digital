import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { FadeInWhenVisible, StaggerContainer, StaggerItem } from './animations/ParallaxEffects';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Rua José Linhares, 645 - Jardim dos Manacás',
      subcontent: 'Piracicaba/SP',
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(19) 3377-0754',
      link: 'tel:1933770754',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'atendimento.sglass@gmail.com',
      link: 'mailto:atendimento.sglass@gmail.com',
    },
    {
      icon: Clock,
      title: 'Horário de funcionamento',
      content: 'Seg. a qui.: 08:00 às 12:00 / 13:00 às 17:00',
      subcontent: 'Sex.: 08:00 às 12:00 / 13:00 às 16:00',
    },
  ];

  return (
    <section id="contato" className="section-padding bg-background overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <FadeInWhenVisible className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block bg-accent/10 text-accent-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4">
            Contato
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Entre em contato
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Estamos prontos para atender você. Entre em contato conosco e solicite seu orçamento.
          </p>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <FadeInWhenVisible direction="left">
            <StaggerContainer className="space-y-3 sm:space-y-4 md:space-y-6" staggerDelay={0.1}>
              {contactInfo.map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-card rounded-lg sm:rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-foreground mb-0.5 sm:mb-1 text-sm sm:text-base">{item.title}</h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-xs sm:text-sm md:text-base text-muted-foreground hover:text-accent transition-colors break-all"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-xs sm:text-sm md:text-base text-muted-foreground">{item.content}</p>
                      )}
                      {item.subcontent && (
                        <p className="text-xs sm:text-sm text-muted-foreground">{item.subcontent}</p>
                      )}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}

              {/* Social Media */}
              <div className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
                <span className="text-foreground font-semibold text-sm sm:text-base">Siga-nos:</span>
                <motion.a
                  href="https://www.instagram.com/sglass.piracicaba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors shadow-lg"
                  aria-label="Instagram da S Glass"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
                </motion.a>
              </div>

              {/* CTA */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-2">
                <motion.a
                  href="https://wa.me/5519991570834"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent inline-flex items-center gap-2 w-full sm:w-auto justify-center text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  WhatsApp 1: (19) 99157-0834
                </motion.a>
                <motion.a
                  href="https://wa.me/5519999896996"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent inline-flex items-center gap-2 w-full sm:w-auto justify-center text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  WhatsApp 2: (19) 99989-6996
                </motion.a>
              </div>
            </StaggerContainer>
          </FadeInWhenVisible>

          {/* Map */}
          <FadeInWhenVisible direction="right" delay={0.2}>
            <div className="h-72 sm:h-80 md:h-96 lg:h-full min-h-[300px] lg:min-h-[400px] rounded-xl sm:rounded-2xl overflow-hidden border border-border shadow-lg sm:shadow-xl relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.8674545723!2d-47.6967723!3d-22.6711983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c63485fd5f5ce1%3A0x702a69189aa5075b!2sS%20Glass%20-%20Vidros%20para%20M%C3%A1quinas%20Agr%C3%ADcolas%2C%20M%C3%A1quinas%20Pesadas%20e%20Caminh%C3%B5es!5e0!3m2!1spt-BR!2sbr!4v1704067200000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da S Glass Vidros"
                className="grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-accent/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};

export default Contact;

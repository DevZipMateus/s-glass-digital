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
      content: 'alcineia@sglassagricola.com.br',
      link: 'mailto:alcineia@sglassagricola.com.br',
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
        <FadeInWhenVisible className="text-center mb-16">
          <span className="inline-block bg-accent/10 text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm uppercase tracking-wide mb-4">
            Contato
          </span>
          <h2 className="section-title text-foreground">
            Entre em contato
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Estamos prontos para atender você. Entre em contato conosco e solicite seu orçamento.
          </p>
        </FadeInWhenVisible>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <FadeInWhenVisible direction="left">
            <StaggerContainer className="space-y-6" staggerDelay={0.1}>
              {contactInfo.map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 group"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.content}</p>
                      )}
                      {item.subcontent && (
                        <p className="text-muted-foreground text-sm">{item.subcontent}</p>
                      )}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}

              {/* Social Media */}
              <div className="flex items-center gap-4 pt-4">
                <span className="text-foreground font-semibold">Siga-nos:</span>
                <motion.a
                  href="https://www.instagram.com/sglass.piracicaba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors shadow-lg"
                  aria-label="Instagram da S Glass"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="w-6 h-6 text-accent-foreground" />
                </motion.a>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <motion.a
                  href="https://wa.me/551933770754"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Falar pelo WhatsApp
                </motion.a>
              </div>
            </StaggerContainer>
          </FadeInWhenVisible>

          {/* Map */}
          <FadeInWhenVisible direction="right" delay={0.2}>
            <div className="h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-border shadow-xl relative group">
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
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-accent/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};

export default Contact;

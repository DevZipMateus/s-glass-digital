import { Wrench, Truck, Settings, Clock } from 'lucide-react';

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
    <section id="servicos" className="section-padding bg-secondary">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-accent/10 text-accent-foreground px-4 py-2 rounded font-semibold text-sm uppercase tracking-wide mb-4">
            Nossos serviços
          </span>
          <h2 className="section-title text-foreground">
            Soluções completas
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Além de produtos de qualidade, oferecemos serviços especializados para atender todas as suas necessidades
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:border-accent transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors duration-300">
                <service.icon className="w-8 h-8 text-accent-foreground group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight */}
        <div className="mt-16 bg-accent rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
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
              <a
                href="tel:1933770754"
                className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded text-center hover:bg-dark-lighter transition-colors duration-300"
              >
                (19) 3377-0754
              </a>
              <a
                href="https://wa.me/551933770754"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded text-center hover:bg-dark-lighter transition-colors duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

import { Target, Eye, Heart, Handshake, Zap, Shield } from 'lucide-react';
import { FadeInWhenVisible, StaggerContainer, StaggerItem, CountUp, ParallaxImage } from './animations/ParallaxEffects';
import aboutGlass from '@/assets/about-glass.jpg';

const About = () => {
  const values = [
    { icon: Heart, title: 'Compromisso', description: 'Entender a rotina e as necessidades dos clientes' },
    { icon: Shield, title: 'Qualidade', description: 'Produtos para as condições mais exigentes' },
    { icon: Target, title: 'Segurança', description: 'Proteção e confiança para operadores' },
    { icon: Handshake, title: 'Parceria', description: 'Relacionamentos baseados em confiança' },
    { icon: Zap, title: 'Agilidade', description: 'Respostas rápidas para manter operações' },
    { icon: Eye, title: 'Ética', description: 'Atuação correta e responsável' },
  ];

  return (
    <section id="sobre" className="section-padding bg-background overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <FadeInWhenVisible className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block bg-accent/10 text-accent-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4">
            Sobre nós
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Conheça a <span className="text-accent">S Glass</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Mais de 15 anos de experiência fornecendo vidros de alta qualidade para o agronegócio e indústria brasileira
          </p>
        </FadeInWhenVisible>

        {/* History with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
          <FadeInWhenVisible direction="left" className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
              Nossa história
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              A S Glass Vidros foi fundada por especialistas com mais de 15 anos de experiência, 
              com o propósito de atender o mercado de vidros para máquinas pesadas, máquinas agrícolas 
              e caminhões, oferecendo soluções seguras, resistentes e confiáveis.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Com foco em durabilidade e segurança, construímos nossa trajetória fornecendo produtos 
              que acompanham a rotina intensa das operações agrícolas e industriais. Hoje, a S Glass 
              Vidros segue comprometida em apoiar o produtor rural e os operadores de máquinas, 
              contribuindo para a produtividade e segurança no trabalho.
            </p>
          </FadeInWhenVisible>
          
          <FadeInWhenVisible direction="right" delay={0.2} className="relative order-1 lg:order-2">
            <ParallaxImage 
              src={aboutGlass} 
              alt="Vidro temperado para cabine de trator agrícola" 
              className="rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl h-56 sm:h-72 md:h-80 lg:h-96"
            />
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-accent text-accent-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold shadow-lg text-sm sm:text-base">
              +15 anos
            </div>
            {/* Decorative elements - Hidden on mobile */}
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-16 md:w-20 sm:h-16 md:h-20 border-2 border-accent/30 rounded-xl sm:rounded-2xl hidden sm:block" />
          </FadeInWhenVisible>
        </div>

        {/* Stats */}
        <FadeInWhenVisible>
          <div className="bg-primary p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl sm:rounded-2xl mb-12 sm:mb-16 md:mb-20 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '24px 24px sm:32px sm:32px'
              }} />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 relative z-10">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-1 sm:mb-2">
                  <CountUp end={15} suffix="+" />
                </div>
                <div className="text-primary-foreground/80 text-xs sm:text-sm">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-1 sm:mb-2">
                  <CountUp end={100} suffix="%" />
                </div>
                <div className="text-primary-foreground/80 text-xs sm:text-sm">Brasil</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-1 sm:mb-2">
                  <CountUp end={500} prefix="+" />
                </div>
                <div className="text-primary-foreground/80 text-xs sm:text-sm">Clientes atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-1 sm:mb-2">
                  <CountUp end={3} />
                </div>
                <div className="text-primary-foreground/80 text-xs sm:text-sm">Segmentos atendidos</div>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Mission and Vision */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          <StaggerItem>
            <div className="card-industrial bg-secondary border-0 h-full group hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 p-5 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">Missão</h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Fornecer vidros resistentes e de alta qualidade, garantindo segurança, durabilidade 
                e desempenho, apoiando as operações agrícolas e industriais com soluções confiáveis.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="card-industrial bg-secondary border-0 h-full group hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 p-5 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">Visão</h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Ser reconhecida como referência no setor de vidros para máquinas agrícolas, pesadas 
                e caminhões, destacando-se pela qualidade, agilidade e compromisso com quem movimenta 
                o campo e a cidade.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Values */}
        <div>
          <FadeInWhenVisible>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-foreground mb-8 sm:mb-10 md:mb-12">
              Nossos valores
            </h3>
          </FadeInWhenVisible>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6" staggerDelay={0.08}>
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 bg-card rounded-lg sm:rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-accent/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <value.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1 text-sm sm:text-base">{value.title}</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">{value.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default About;

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
        <FadeInWhenVisible className="text-center mb-16">
          <span className="inline-block bg-accent/10 text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm uppercase tracking-wide mb-4">
            Sobre nós
          </span>
          <h2 className="section-title text-foreground">
            Conheça a S Glass Vidros
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Mais de 15 anos de experiência fornecendo vidros de alta qualidade para o agronegócio e indústria brasileira
          </p>
        </FadeInWhenVisible>

        {/* History with Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <FadeInWhenVisible direction="left" className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Nossa história
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A S Glass Vidros foi fundada por especialistas com mais de 15 anos de experiência, 
              com o propósito de atender o mercado de vidros para máquinas pesadas, máquinas agrícolas 
              e caminhões, oferecendo soluções seguras, resistentes e confiáveis.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Com foco em durabilidade e segurança, construímos nossa trajetória fornecendo produtos 
              que acompanham a rotina intensa das operações agrícolas e industriais. Hoje, a S Glass 
              Vidros segue comprometida em apoiar o produtor rural e os operadores de máquinas, 
              contribuindo para a produtividade e segurança no trabalho.
            </p>
          </FadeInWhenVisible>
          
          <FadeInWhenVisible direction="right" delay={0.2} className="relative">
            <ParallaxImage 
              src={aboutGlass} 
              alt="Vidro temperado para cabine de trator agrícola" 
              className="rounded-2xl shadow-2xl h-80 md:h-96"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-bold shadow-lg">
              +15 anos
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-accent/30 rounded-2xl" />
          </FadeInWhenVisible>
        </div>

        {/* Stats */}
        <FadeInWhenVisible>
          <div className="bg-primary p-8 md:p-12 rounded-2xl mb-20 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '32px 32px'
              }} />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  <CountUp end={15} suffix="+" />
                </div>
                <div className="text-primary-foreground/80 text-sm">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  <CountUp end={100} suffix="%" />
                </div>
                <div className="text-primary-foreground/80 text-sm">Brasil</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  <CountUp end={500} prefix="+" />
                </div>
                <div className="text-primary-foreground/80 text-sm">Clientes atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  <CountUp end={3} />
                </div>
                <div className="text-primary-foreground/80 text-sm">Segmentos atendidos</div>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Mission and Vision */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-20">
          <StaggerItem>
            <div className="card-industrial bg-secondary border-0 h-full group hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <Target className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Missão</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Fornecer vidros resistentes e de alta qualidade, garantindo segurança, durabilidade 
                e desempenho, apoiando as operações agrícolas e industriais com soluções confiáveis.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="card-industrial bg-secondary border-0 h-full group hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <Eye className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Visão</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
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
            <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
              Nossos valores
            </h3>
          </FadeInWhenVisible>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <value.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{value.title}</h4>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
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

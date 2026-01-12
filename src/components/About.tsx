import { Target, Eye, Heart, Handshake, Zap, Shield } from 'lucide-react';
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
    <section id="sobre" className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-accent/10 text-accent-foreground px-4 py-2 rounded font-semibold text-sm uppercase tracking-wide mb-4">
            Sobre nós
          </span>
          <h2 className="section-title text-foreground">
            Conheça a S Glass Vidros
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Mais de 15 anos de experiência fornecendo vidros de alta qualidade para o agronegócio e indústria brasileira
          </p>
        </div>

        {/* History with Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
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
          </div>
          
          <div className="relative">
            <img 
              src={aboutGlass} 
              alt="Vidro temperado para cabine de trator agrícola" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-bold shadow-lg">
              +15 anos
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-primary p-8 rounded-lg mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">15+</div>
              <div className="text-primary-foreground/80 text-sm">Anos de experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">100%</div>
              <div className="text-primary-foreground/80 text-sm">Brasil</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">+500</div>
              <div className="text-primary-foreground/80 text-sm">Clientes atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">3</div>
              <div className="text-primary-foreground/80 text-sm">Segmentos atendidos</div>
            </div>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="card-industrial bg-secondary border-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Missão</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Fornecer vidros resistentes e de alta qualidade, garantindo segurança, durabilidade 
              e desempenho, apoiando as operações agrícolas e industriais com soluções confiáveis.
            </p>
          </div>

          <div className="card-industrial bg-secondary border-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
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
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Nossos valores
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

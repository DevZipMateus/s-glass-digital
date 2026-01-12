import { motion } from 'framer-motion';
import { Tractor, Truck, Construction, CheckCircle } from 'lucide-react';
import { FadeInWhenVisible, StaggerContainer, StaggerItem, ScaleOnHover } from './animations/ParallaxEffects';
import productAgricultural from '@/assets/product-agricultural.jpg';
import productHeavy from '@/assets/product-heavy.jpg';
import productTruck from '@/assets/product-truck.jpg';

const Products = () => {
  const products = [
    {
      icon: Tractor,
      image: productAgricultural,
      title: 'Máquinas agrícolas',
      description: 'Vidros para tratores, colheitadeiras, pulverizadores e demais equipamentos agrícolas.',
      features: ['Temperados', 'Laminados', 'Planos e curvos', 'Alta resistência'],
    },
    {
      icon: Construction,
      image: productHeavy,
      title: 'Máquinas pesadas',
      description: 'Vidros para retroescavadeiras, escavadeiras, pás carregadeiras e equipamentos de terraplanagem.',
      features: ['Resistência a impacto', 'Proteção UV', 'Durabilidade', 'Padrão OEM'],
    },
    {
      icon: Truck,
      image: productTruck,
      title: 'Caminhões',
      description: 'Vidros de reposição para caminhões de todas as marcas e modelos.',
      features: ['Para-brisas', 'Vidros laterais', 'Vidros traseiros', 'Instalação'],
    },
  ];

  return (
    <section id="produtos" className="section-padding bg-primary overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <FadeInWhenVisible className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block bg-accent text-accent-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4">
            Nossos produtos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-3 sm:mb-4">
            Vidros de alta qualidade
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-foreground/70 max-w-2xl mx-auto px-4 sm:px-0">
            Vidros planos ou curvos, temperados ou laminados, para todo tipo de máquina e aplicação
          </p>
        </FadeInWhenVisible>

        {/* Products Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8" staggerDelay={0.15}>
          {products.map((product, index) => (
            <StaggerItem key={index}>
              <ScaleOnHover scale={1.02}>
                <div className="bg-dark-lighter rounded-xl sm:rounded-2xl overflow-hidden group h-full">
                  {/* Product Image */}
                  <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                    <motion.img 
                      src={product.image} 
                      alt={`Vidros para ${product.title.toLowerCase()}`}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-lighter via-dark-lighter/50 to-transparent" />
                    <motion.div 
                      className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 bg-accent rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                        <product.icon className="w-5 h-5 sm:w-6 md:w-7 sm:h-6 md:h-7 text-accent-foreground" />
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Product Content */}
                  <div className="p-4 sm:p-5 md:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-primary-foreground mb-2 sm:mb-3 group-hover:text-accent transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm sm:text-base text-primary-foreground/70 mb-4 sm:mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-primary-foreground/80 text-xs sm:text-sm">
                          <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScaleOnHover>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeInWhenVisible delay={0.4} className="text-center mt-8 sm:mt-10 md:mt-12">
          <p className="text-sm sm:text-base text-primary-foreground/70 mb-4 sm:mb-6 px-4 sm:px-0">
            Não encontrou o que procura? Fabricamos vidros sob medida conforme seu projeto.
          </p>
          <motion.a
            href="https://wa.me/551933770754"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent inline-flex items-center gap-2 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar orçamento personalizado
          </motion.a>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default Products;

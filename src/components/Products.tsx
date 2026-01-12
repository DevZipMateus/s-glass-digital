import { Tractor, Truck, Construction, CheckCircle } from 'lucide-react';
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
    <section id="produtos" className="section-padding bg-primary">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded font-semibold text-sm uppercase tracking-wide mb-4">
            Nossos produtos
          </span>
          <h2 className="section-title text-primary-foreground">
            Vidros de alta qualidade
          </h2>
          <p className="section-subtitle text-primary-foreground/70 mx-auto mt-4">
            Vidros planos ou curvos, temperados ou laminados, para todo tipo de máquina e aplicação
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-dark-lighter rounded-lg overflow-hidden hover:bg-dark transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={`Vidros para ${product.title.toLowerCase()}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-lighter/90 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <product.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                </div>
              </div>
              
              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-primary-foreground/70 mb-6">
            Não encontrou o que procura? Fabricamos vidros sob medida conforme seu projeto.
          </p>
          <a
            href="https://wa.me/551933770754"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent inline-flex items-center gap-2"
          >
            Solicitar orçamento personalizado
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;

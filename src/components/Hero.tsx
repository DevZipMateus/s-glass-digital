import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Shield, Award } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative min-h-[100svh] flex items-center pt-16 sm:pt-18 md:pt-20 overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          y: backgroundY
        }}
      >
        <div className="gradient-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-transparent to-accent/20" />
      </motion.div>

      {/* Animated Grid Pattern - Hidden on very small screens */}
      <div className="absolute inset-0 opacity-10 hidden sm:block">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px md:50px md:50px'
        }} />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 section-container w-full py-8 sm:py-12 md:py-16 lg:py-24"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-accent/90 text-accent-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 backdrop-blur-sm"
          >
            <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide">
              +15 anos de experiência
            </span>
          </motion.div>

          {/* H1 - Company Name */}
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          >
            S Glass{' '}
            <span className="text-accent">Vidros</span>
          </motion.h1>

          {/* H2 - Description */}
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90 mb-6 sm:mb-8 font-light leading-relaxed"
          >
            Seu parceiro em vidros para máquinas agrícolas, pesadas e caminhões em todo o Brasil
          </motion.h2>

          {/* Features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-10"
          >
            <div className="flex items-center gap-2 text-white/80 bg-white/10 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm text-sm sm:text-base">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
              <span>Qualidade garantida</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 bg-white/10 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm text-sm sm:text-base">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
              <span>Segurança em primeiro lugar</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <motion.a
              href="https://wa.me/551933770754"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent inline-flex items-center justify-center gap-2 group text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar orçamento
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#produtos"
              className="btn-outline-light text-center text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nossos produtos
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center pt-1.5 sm:pt-2"
        >
          <motion.div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

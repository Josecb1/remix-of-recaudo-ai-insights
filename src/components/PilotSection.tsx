import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles, Shield, Zap, HeadphonesIcon, BarChart3, Clock } from "lucide-react";

const includedFeatures = [
  {
    icon: HeadphonesIcon,
    title: "Asesores IA ilimitados",
    description: "Llamadas y mensajes sin límite de contactos"
  },
  {
    icon: BarChart3,
    title: "Dashboard en tiempo real",
    description: "Métricas de contactabilidad y recuperación"
  },
  {
    icon: Zap,
    title: "Implementación express",
    description: "Operativo en menos de 1 semana"
  },
  {
    icon: Shield,
    title: "Seguridad empresarial",
    description: "Datos encriptados y cumplimiento normativo"
  },
];

const benefits = [
  "Contactabilidad 24/7 sin costos adicionales",
  "Sin necesidad de contratar más personal",
  "Integración con tu CRM actual",
  "Reportes ejecutivos semanales",
  "Soporte dedicado incluido",
  "Escalamiento flexible según resultados",
];

const PilotSection = () => {
  return (
    <section id="inversion" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-primary/8 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary/20 border-2 border-primary/60 text-primary font-bold rounded-full text-sm sm:text-lg mb-6 sm:mb-8"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            PROPUESTA COMERCIAL
          </motion.div>
          
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 font-display px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Inversión en
            <span className="text-primary"> RECAUDO AI</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Transforma tu operación de cobranza con tecnología de última generación
          </motion.p>
        </motion.div>

        {/* Main pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12 sm:mb-16"
        >
          <div className="bg-card border-2 border-primary/30 rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              animate={{
                boxShadow: [
                  "inset 0 0 30px 0 hsl(var(--primary) / 0.1)",
                  "inset 0 0 60px 0 hsl(var(--primary) / 0.15)",
                  "inset 0 0 30px 0 hsl(var(--primary) / 0.1)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <div className="relative z-10">
              {/* Price */}
              <div className="text-center mb-8 sm:mb-10">
                <p className="text-muted-foreground text-sm sm:text-base mb-2">Inversión mensual</p>
                <div className="flex items-baseline justify-center gap-2 flex-wrap">
                  <span className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground">$1.750.905</span>
                  <span className="text-lg sm:text-xl text-muted-foreground">COP</span>
                </div>
                <p className="text-primary font-medium mt-2 text-sm sm:text-base">+ IVA</p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-border mb-8 sm:mb-10" />

              {/* Features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
                {includedFeatures.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-background/50 rounded-xl"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm sm:text-base">{feature.title}</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Benefits list */}
              <div className="bg-primary/5 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-10">
                <h4 className="font-bold text-foreground mb-4 text-center text-sm sm:text-base">Todo incluido:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + idx * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-muted-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <motion.a
                  href="https://api.whatsapp.com/send?phone=573112251150"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-4 bg-primary text-primary-foreground font-bold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
                >
                  Solicitar propuesta
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                
                <div className="flex items-center justify-center gap-2 mt-4 text-xs sm:text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  Implementación en menos de 1 semana
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <p className="text-xs sm:text-sm text-muted-foreground">
            ¿Tienes preguntas? Contáctanos y agenda una demo personalizada
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PilotSection;

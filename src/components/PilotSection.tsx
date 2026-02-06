import { motion } from "framer-motion";
import { Rocket, Target, TrendingUp, Shield, Zap, CheckCircle2, ArrowRight } from "lucide-react";

const pilotDetails = [
  {
    title: "Piloto diseñado como:",
    icon: Shield,
    items: [
      "Fase de validación controlada, sin impacto en la operación total actual.",
      "KPIs definidos desde Finanzas, alineados a Cash Flow, contactabilidad y costo por contacto.",
      "Gobierno total del proceso y visibilidad en tiempo real.",
    ],
  },
  {
    title: "Alcance del piloto:",
    icon: Target,
    items: [
      "Segmento específico de cartera, definido estratégicamente.",
      "Implementación rápida y personalizada (menos de 1 semana).",
      "Sin fricción tecnológica ni cambios estructurales.",
    ],
  },
  {
    title: "Objetivo del piloto:",
    icon: TrendingUp,
    items: [
      "Medir impacto real en tu operación, no supuestos.",
      "Determinar si Recaudo AI: Mejora contactabilidad, Optimiza costos, Acelera recuperación.",
      "Tomar una decisión informada de escalamiento corporativo.",
    ],
  },
];

const PilotSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
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
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header with animated badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/20 border-2 border-red-400/60 text-red-400 font-bold rounded-full text-lg mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-5 h-5" />
            </motion.div>
            $0 DE INVERSIÓN INICIAL
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Rocket className="w-5 h-5" />
            </motion.div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-display"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Un piloto no es una prueba:
            <br />
            <span className="text-primary">es una validación financiera y operativa.</span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Nuestro modelo de negocio se basa en hacer más rentable tu operación y escalar sobre resultados comprobados.
          </motion.p>
        </motion.div>

        {/* Cards with enhanced styling */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pilotDetails.map((section, idx) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.25)",
                  transition: { duration: 0.3 }
                }}
                className="bg-card border border-border rounded-2xl p-8 shadow-card relative overflow-hidden group"
              >
                {/* Hover gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6"
                  >
                    <Icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  
                  <h3 className="font-bold text-foreground text-xl mb-6">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.items.map((item, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.1 + i * 0.1 }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-2 border-primary/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              animate={{
                boxShadow: [
                  "inset 0 0 20px 0 hsl(var(--primary) / 0.1)",
                  "inset 0 0 40px 0 hsl(var(--primary) / 0.2)",
                  "inset 0 0 20px 0 hsl(var(--primary) / 0.1)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <div className="relative z-10">
              <motion.p 
                className="text-xl md:text-2xl text-foreground font-bold mb-2"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Bajo riesgo. Alta visibilidad. Escalabilidad inmediata.
              </motion.p>
              <p className="text-muted-foreground mb-8 text-lg">
                Comienza tu piloto gratuito y mide el impacto real en tu operación
              </p>
              
              <motion.a
                href="https://api.whatsapp.com/send?phone=573112251150"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
              >
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Rocket className="w-6 h-6" />
                </motion.span>
                Solicitar piloto gratuito
                <motion.span
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.a>
              
              <p className="text-sm text-muted-foreground mt-4">
                Sin compromiso · Implementación en menos de 1 semana
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PilotSection;

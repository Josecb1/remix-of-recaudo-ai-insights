import { motion } from "framer-motion";
import { FlaskConical, Rocket, Zap, ChevronRight, CheckCircle2 } from "lucide-react";

const phases = [
  {
    phase: "Fase 1",
    title: "Pre-Piloto",
    duration: "1-4 semanas",
    icon: FlaskConical,
    items: [
      "Despliegue controlado con número limitado de usuarios",
      "Identificación de interacciones IA con usuarios de Selección",
      "Todos los recursos provistos por RECAUDO AI",
    ],
  },
  {
    phase: "Fase 2",
    title: "Piloto",
    duration: "1-2 meses",
    icon: Rocket,
    items: [
      "Validación inicial del sistema",
      "Gestión masiva con recursos compartidos",
      "Agente resolutivo en multi-créditos",
      "Integración con procesos existentes",
      "Test A/B y experimentación continua",
    ],
  },
  {
    phase: "Fase 3",
    title: "Producción",
    duration: "Tiempo indefinido",
    icon: Zap,
    items: [
      "Descubrimiento de estrategias óptimas",
      "Estrategia masiva completamente implementada",
      "Operación continua y escalada",
      "Modelo híbrido: Full IA o IA + Humanos",
      "Optimización continua basada en resultados",
    ],
  },
];

const RoadmapSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-muted text-muted-foreground text-sm font-medium rounded-full mb-4"
          >
            Proceso estructurado
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
            Roadmap de Implementación
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un proceso estructurado para garantizar el éxito de tu transformación digital
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Animated progress line - Desktop */}
          <div className="hidden md:block absolute top-32 left-0 right-0 h-1 bg-border">
            <motion.div
              className="h-full bg-gradient-to-r from-primary/50 via-primary to-primary/50"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            />
          </div>

          {/* Connector arrows - Desktop */}
          <div className="hidden md:flex absolute top-[7.5rem] left-0 right-0 justify-around px-24 -translate-y-1/2">
            {[0, 1].map((idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + idx * 0.2 }}
                className="bg-background p-1 rounded-full"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {phases.map((phase, idx) => {
              const Icon = phase.icon;
              const isLast = idx === phases.length - 1;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="relative"
                >
                  {/* Phase number badge - positioned above */}
                  <motion.div 
                    className="flex justify-center mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`
                      relative w-20 h-20 rounded-2xl flex items-center justify-center z-10 
                      ${isLast 
                        ? 'bg-primary shadow-lg shadow-primary/30' 
                        : 'bg-card border-2 border-primary/30'
                      }
                    `}>
                      <Icon className={`w-8 h-8 ${isLast ? 'text-primary-foreground' : 'text-primary'}`} />
                      
                      {/* Phase number indicator */}
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.2, type: "spring" }}
                        className={`
                          absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold
                          ${isLast 
                            ? 'bg-primary-foreground text-primary' 
                            : 'bg-primary text-primary-foreground'
                          }
                        `}
                      >
                        {idx + 1}
                      </motion.span>
                    </div>
                  </motion.div>

                  {/* Mobile connector */}
                  {idx < phases.length - 1 && (
                    <div className="md:hidden flex justify-center my-2">
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + idx * 0.2 }}
                        className="flex flex-col items-center"
                      >
                        <div className="w-0.5 h-8 bg-gradient-to-b from-primary/50 to-primary" />
                        <ChevronRight className="w-5 h-5 text-primary rotate-90" />
                      </motion.div>
                    </div>
                  )}

                  {/* Content card */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className={`
                      bg-card border rounded-2xl p-6 shadow-soft h-full relative overflow-hidden
                      ${isLast ? 'border-primary/50' : 'border-border'}
                    `}
                  >
                    {/* Subtle gradient overlay for last phase */}
                    {isLast && (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
                    )}

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="text-center mb-6 pb-4 border-b border-border">
                        <motion.span 
                          className={`
                            inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2
                            ${isLast 
                              ? 'bg-primary text-foreground' 
                              : 'bg-secondary text-muted-foreground'
                            }
                          `}
                        >
                          {phase.phase}
                        </motion.span>
                        <h3 className="text-xl font-bold text-foreground">{phase.title}</h3>
                        <p className="text-sm text-purple-500 font-medium mt-1">{phase.duration}</p>
                      </div>

                      {/* Items with staggered animation */}
                      <ul className="space-y-3">
                        {phase.items.map((item, i) => (
                          <motion.li 
                            key={i} 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 + idx * 0.1 + i * 0.08 }}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isLast ? 'text-primary' : 'text-primary/60'}`} />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;

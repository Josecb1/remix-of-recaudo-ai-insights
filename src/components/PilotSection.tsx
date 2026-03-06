import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles, Shield, Target, TrendingUp, Rocket } from "lucide-react";

const pilotCards = [
  {
    icon: Shield,
    title: "Piloto diseñado como:",
    items: [
      "Fase de validación controlada, sin impacto en la operación total actual.",
      "KPIs definidos desde Finanzas, alineados a Cash Flow, contactabilidad y costo por contacto.",
      "Gobierno total del proceso y visibilidad en tiempo real.",
    ],
  },
  {
    icon: Target,
    title: "Alcance del piloto:",
    items: [
      "Segmento específico de cartera, definido estratégicamente.",
      "Implementación rápida y personalizada (menos de 1 semana).",
      "Sin fricción tecnológica ni cambios estructurales.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Objetivo del piloto:",
    items: [
      "Medir impacto real en tu operación, no supuestos.",
      "Determinar si Recaudo AI: Mejora contactabilidad, Optimiza costos, Acelera recuperación.",
      "Tomar una decisión informada de escalamiento corporativo.",
    ],
  },
];

const PilotSection = () => {
  return (
    <section id="inversion" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-14"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-3 bg-royal/20 border-2 border-royal/60 text-royal font-bold rounded-full text-xs sm:text-sm md:text-lg mb-4 sm:mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            $0 DE INVERSIÓN INICIAL
            <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </motion.div>

          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6 font-display px-2"
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
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Nuestro modelo de negocio se basa en hacer más rentable tu operación y escalar sobre resultados comprobados.
          </motion.p>
        </motion.div>

        {/* 3 Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-12 md:mb-16">
          {pilotCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className={`bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-soft ${
                  idx === 2 ? "sm:col-span-2 md:col-span-1" : ""
                }`}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4">{card.title}</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-primary/10 border border-primary/20 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 text-center"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2 sm:mb-3 px-2">
            Bajo riesgo. Alta visibilidad. Escalabilidad inmediata.
          </h3>
          <p className="text-muted-foreground mb-5 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base">
            Comienza tu piloto gratuito y mide el impacto real en tu operación
          </p>

          <motion.a
            href="https://wa.link/e7j55k"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 bg-primary text-primary-foreground font-bold text-sm sm:text-base md:text-lg rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
          >
            <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
            Solicitar piloto gratuito
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-3 sm:mt-4">
            Sin compromiso · Implementación en menos de 1 semana
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PilotSection;

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
    <section id="inversion" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-3 bg-royal/20 border-2 border-royal/60 text-royal font-bold rounded-full text-sm sm:text-lg mb-6"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            $0 DE INVERSIÓN INICIAL
            <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 font-display px-2"
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
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Nuestro modelo de negocio se basa en hacer más rentable tu operación y escalar sobre resultados comprobados.
          </motion.p>
        </motion.div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {pilotCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-soft"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4">{card.title}</h3>
                <ul className="space-y-3">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
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
          className="bg-primary/10 border border-primary/20 rounded-3xl p-8 sm:p-12 text-center"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3">
            Bajo riesgo. Alta visibilidad. Escalabilidad inmediata.
          </h3>
          <p className="text-muted-foreground mb-8 text-sm sm:text-base">
            Comienza tu piloto gratuito y mide el impacto real en tu operación
          </p>

          <motion.a
            href="https://api.whatsapp.com/send?phone=573112251150"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 py-3 sm:py-4 bg-primary text-primary-foreground font-bold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
          >
            <Rocket className="w-5 h-5" />
            Solicitar piloto gratuito
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <p className="text-xs sm:text-sm text-muted-foreground mt-4">
            Sin compromiso · Implementación en menos de 1 semana
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PilotSection;

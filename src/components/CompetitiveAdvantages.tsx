import { motion } from "framer-motion";
const metrics = [{
  metric: "Cobertura de Cartera",
  current: "~45%",
  recaudo: "100%",
  impact: "2x alcance"
}, {
  metric: "Tasa de Contacto",
  current: "30–40%",
  recaudo: "60%+",
  impact: "+50–100%"
}, {
  metric: "Seguimientos",
  current: "Limitado / manual",
  recaudo: "Automatizado y persistente",
  impact: "Mayor conversión"
}, {
  metric: "Promesa de Pago",
  current: "Base",
  recaudo: "Mayor vía cadencia",
  impact: "+15–25%"
}, {
  metric: "Costo por Cobranza",
  current: "Alto",
  recaudo: "Hasta 50% menor",
  impact: "–50%"
}, {
  metric: "Tasa de Recuperación",
  current: "Base",
  recaudo: "+22%",
  impact: "+22%"
}, {
  metric: "Quejas (PQRS)",
  current: "Alto",
  recaudo: "–20%",
  impact: "Menos quejas"
}];
const CompetitiveAdvantages = () => {
  return <section id="ventajas" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" animate={{
        scale: [1, 1.2, 1],
        x: [0, 30, 0],
        y: [0, -20, 0]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/8 rounded-full blur-3xl" animate={{
        scale: [1.2, 1, 1.2],
        x: [0, -40, 0],
        y: [0, 30, 0]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 to-transparent rounded-full blur-3xl" animate={{
        rotate: [0, 360],
        scale: [1, 1.1, 1]
      }} transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8 font-display">
          ¿Por qué Recaudo AI se destaca?
        </motion.h2>

        {/* Headline Stats */}
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.1
      }} className="text-lg md:text-xl text-center text-muted-foreground mb-16 max-w-4xl mx-auto">
          Después de atender a <span className="font-bold text-foreground">1M+ deudores</span> y recuperar{" "}
          <span className="font-bold text-foreground">$4.5M+</span>, hemos comprobado reducciones de hasta{" "}
          <span className="font-bold text-foreground">50% en costos de cobranza</span> y tasas de recuperación superiores al{" "}
          <span className="font-bold text-foreground">22%</span> en las carteras de nuestros clientes.
        </motion.p>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="bg-card border border-border rounded-2xl shadow-card overflow-x-auto">
          {/* Mobile Card View */}
          <div className="block sm:hidden">
            {metrics.map((row, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`p-4 border-b border-border last:border-b-0 ${idx % 2 === 0 ? "bg-background" : "bg-secondary/20"}`}
              >
                <div className="font-semibold text-foreground mb-3">{row.metric}</div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-muted-foreground text-xs block mb-1">Tradicional</span>
                    <span className="text-foreground">{row.current}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-xs block mb-1">Recaudo AI</span>
                    <span className="inline-block px-2 py-0.5 bg-primary rounded-full text-foreground text-sm font-medium">
                      {row.recaudo}
                    </span>
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-border/50">
                  <span className="text-xs text-muted-foreground">Impacto: </span>
                  <span className="text-sm font-semibold text-foreground">{row.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden sm:block">
            {/* Table Header */}
            <div className="grid grid-cols-4 bg-secondary/50 border-b border-border">
              <div className="p-4 font-semibold text-muted-foreground text-sm uppercase tracking-wide">Métrica</div>
              <div className="p-4 font-semibold text-muted-foreground text-center text-sm uppercase tracking-wide">Tradicional</div>
              <div className="p-4 font-semibold text-foreground text-center text-sm uppercase tracking-wide">Recaudo AI</div>
              <div className="p-4 font-semibold text-foreground text-center text-sm uppercase tracking-wide">Impacto</div>
            </div>

            {/* Table Rows */}
            {metrics.map((row, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`grid grid-cols-4 border-b border-border last:border-b-0 ${idx % 2 === 0 ? "bg-background" : "bg-secondary/20"}`}
              >
                <div className="p-4 text-foreground text-sm md:text-base font-medium">
                  {row.metric}
                </div>
                <div className="p-4 text-muted-foreground text-center text-sm md:text-base">
                  {row.current}
                </div>
                <div className="p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-primary rounded-full text-foreground text-sm md:text-base font-medium">
                    {row.recaudo}
                  </span>
                </div>
                <div className="p-4 text-foreground font-semibold text-center text-sm md:text-base">
                  {row.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom callout */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }} className="mt-12 text-center">
          
        </motion.div>
      </div>
    </section>;
};
export default CompetitiveAdvantages;
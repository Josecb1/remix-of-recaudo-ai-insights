import { motion } from "framer-motion";
import { TrendingDown, DollarSign, ShieldOff, AlertTriangle } from "lucide-react";
import { LucideIcon } from "lucide-react";
const problems: {
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}[] = [{
  icon: TrendingDown,
  title: "Baja contactabilidad",
  description: "La gestión humana alcanza en promedio solo 40% de contactabilidad.",
  stat: "40%",
  statLabel: "contactabilidad promedio"
}, {
  icon: DollarSign,
  title: "Costos crecientes",
  description: "El crecimiento de cartera aumenta: DSO, Costos operativos, Provisiones por incobrables.",
  stat: "3x",
  statLabel: "más costos operativos"
}, {
  icon: ShieldOff,
  title: "Pérdida de control",
  description: "La tercerización y las IAs genéricas: Elevan OpEx, Pierden contexto del cliente, No generan control financiero real.",
  stat: "0%",
  statLabel: "control financiero real"
}];
const ProblemSection = () => {
  return <section className="py-8 sm:py-12 px-4 sm:px-6 bg-secondary/20 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-gradient-radial from-muted/20 to-transparent blur-3xl" style={{ top: "-10%", right: "-5%" }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-3 sm:mb-4">
          <span className="inline-flex items-center gap-1.5 sm:gap-2 text-muted-foreground text-[10px] sm:text-xs font-medium uppercase tracking-wider bg-muted px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
             <AlertTriangle className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
             El Problema
           </span>
        </motion.div>

        <motion.h2 initial={{
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
      }} className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground text-center mb-3 sm:mb-4 font-display px-2">
          La cobranza tradicional{" "}
          <span className="text-muted-foreground">no escala</span> con el volumen de deuda
        </motion.h2>

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
        delay: 0.2
      }} className="text-muted-foreground text-center max-w-2xl mx-auto mb-6 sm:mb-10 text-sm sm:text-base px-2">
          El modelo actual enfrenta limitaciones críticas que impactan la recuperación.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {problems.map((problem, idx) => <motion.div key={idx} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.4,
          delay: idx * 0.1
        }} className="relative">
              <div className="bg-card border border-border rounded-lg sm:rounded-xl p-4 sm:p-6 h-full">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-1.5 sm:gap-2 mb-0.5 sm:mb-1 flex-wrap">
                      <span className="text-xl sm:text-2xl font-bold text-foreground">{problem.stat}</span>
                      <span className="text-[10px] sm:text-xs text-muted-foreground">{problem.statLabel}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-foreground mb-0.5 sm:mb-1">
                      {problem.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default ProblemSection;
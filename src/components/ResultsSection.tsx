import { motion } from "framer-motion";
import { Timer, TrendingUp, Zap, DollarSign } from "lucide-react";
import logoKrediya from "@/assets/logo-krediya.png";
import logoTangelo from "@/assets/logo-tangelo.png";
import logoQuipux from "@/assets/logo-quipux.png";
const caseStudies = [{
  company: "KrediYa",
  before: 50,
  after: 60,
  increase: "50% al 60%",
  logo: logoKrediya
}, {
  company: "Tangelo",
  before: 40,
  after: 50,
  increase: "40% al 50%",
  logo: logoTangelo
}, {
  company: "Aseguradora Solidaria",
  before: 50,
  after: 70,
  increase: "50% al 70%",
  logo: logoQuipux
}];
const impactoDirecto = ["+40% contacto efectivo", "Mayor recuperación de cartera", "Menor costo por contacto"];
const resultadoFinanciero = [{
  text: "Mejora inmediata del",
  bold: "Cash Flow"
}, {
  text: "Reducción de",
  bold: "OpEx"
}, {
  text: "Impacto positivo en",
  bold: "EBITDA"
}];
const ResultsSection = () => {
  return <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
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
      }} className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4 font-display px-2">
            Resultados comprobados.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Mayor contactabilidad solo con IA.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {caseStudies.map((study, idx) => <motion.div key={idx} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: idx * 0.1
        }} className={`bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-soft text-center ${
          idx === 2 ? "sm:col-span-2 md:col-span-1" : ""
        }`}>
              <div className="h-14 sm:h-16 md:h-20 mb-4 sm:mb-6 flex items-center justify-center">
                <img src={study.logo} alt={`${study.company} logo`} className="max-w-[120px] sm:max-w-[140px] md:max-w-[160px] max-h-[40px] sm:max-h-[50px] md:max-h-[60px] w-auto h-auto object-contain" />
              </div>
              
              {/* Bar Chart */}
              <div className="flex items-end justify-center gap-3 sm:gap-4 h-28 sm:h-32 md:h-40 mb-4 sm:mb-6">
                {/* Before bar */}
                <div className="flex flex-col items-center">
                  <div className="w-12 sm:w-14 md:w-16 bg-muted-foreground/30 rounded-t-lg transition-all duration-1000" style={{
                height: `${study.before * 1.6}px`
              }} />
                  <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-1 sm:mt-2">Humanos</span>
                  <span className="text-sm sm:text-base md:text-lg font-bold text-muted-foreground">{study.before}%</span>
                </div>
                
                {/* After bar */}
                <div className="flex flex-col items-center">
                  <motion.div initial={{
                height: 0
              }} whileInView={{
                height: `${study.after * 1.6}px`
              }} viewport={{
                once: true
              }} transition={{
                duration: 1,
                delay: 0.3 + idx * 0.2
              }} className="w-12 sm:w-14 md:w-16 bg-primary rounded-t-lg shadow-glow" />
                  <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-1 sm:mt-2">Recaudo AI</span>
                  <span className="text-sm sm:text-base md:text-lg font-bold text-foreground">{study.after}%</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground">
                Incremento de contactabilidad del {study.increase}
              </p>
            </motion.div>)}
        </div>

        {/* Speed & Control Section */}
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
      }} className="bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 shadow-card overflow-hidden">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6 sm:mb-8 md:mb-10 text-center font-display px-2">
            <span className="text-muted-foreground">Velocidad, control</span> y precisión financiera
          </h3>

          {/* Four Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {/* Implementation Speed Card */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }} whileHover={{
            scale: 1.02,
            y: -4
          }} className="bg-secondary/80 border border-border rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 transition-shadow hover:shadow-lg">
              <motion.div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/80 rounded-full flex items-center justify-center mb-3 sm:mb-4" animate={{
              x: [0, 5, 0]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}>
                <Timer className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>
              <h4 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-2 sm:mb-3">
                Implementación en menos de 1 semana
              </h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-0.5">•</span>
                  Sin proyectos largos ni CAPEX oculto.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-0.5">•</span>
                  Integración directa con CRM / ERP.
                </li>
              </ul>
            </motion.div>

            {/* Effectiveness Card */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.3
          }} whileHover={{
            scale: 1.02,
            y: -4
          }} className="bg-secondary/80 border border-border rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 transition-shadow hover:shadow-lg">
              <motion.div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/80 rounded-full flex items-center justify-center mb-3 sm:mb-4" animate={{
              y: [0, -5, 0]
            }} transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}>
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>
              <h4 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-2 sm:mb-3">+60% efectividad vs 40% humano</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground mt-0.5">•</span>
                  Agentes Humanos: <span className="font-bold text-foreground">40%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-0.5">•</span>
                  Recaudo AI: <span className="font-bold text-foreground">+65%</span>
                </li>
              </ul>
            </motion.div>

            {/* Impacto Directo Card */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.4
          }} whileHover={{
            scale: 1.02,
            y: -4
          }} className="bg-secondary/80 border border-border rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 transition-shadow hover:shadow-lg">
              <motion.div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/80 rounded-full flex items-center justify-center mb-3 sm:mb-4" whileHover={{
              rotate: 15
            }} transition={{
              type: "spring",
              stiffness: 300
            }}>
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>
              <h4 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-2 sm:mb-3">Impacto directo</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                {impactoDirecto.map((item, idx) => <li key={idx} className="flex items-start gap-2">
                    <span className="text-foreground mt-0.5">•</span>
                    {item}
                  </li>)}
              </ul>
            </motion.div>

            {/* Resultado Financiero Card */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.5
          }} whileHover={{
            scale: 1.02,
            y: -4
          }} className="bg-primary/5 border border-primary/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 transition-shadow hover:shadow-lg hover:shadow-primary/10">
              <motion.div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center mb-3 sm:mb-4" whileHover={{
              rotate: -15
            }} transition={{
              type: "spring",
              stiffness: 300
            }}>
                <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </motion.div>
              <h4 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-2 sm:mb-3">Resultado financiero</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                {resultadoFinanciero.map((item, idx) => <li key={idx} className="flex items-start gap-2">
                    <span className="text-foreground mt-0.5">•</span>
                    {item.text} <span className="font-bold text-foreground">{item.bold}</span>
                  </li>)}
              </ul>
            </motion.div>
          </div>

          {/* Quote */}
          <motion.p initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.7
        }} className="text-center text-muted-foreground italic text-sm sm:text-base md:text-lg mt-6 sm:mt-8 px-2">
            "No solo es tecnología, es estrategia con rentabilidad medible."
          </motion.p>
        </motion.div>
      </div>
    </section>;
};
export default ResultsSection;

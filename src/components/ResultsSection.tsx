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
  return <section className="py-24 px-6 bg-secondary/30">
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
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
            Resultados comprobados.
          </h2>
          <p className="text-lg text-muted-foreground">
            Mayor contactabilidad solo con IA.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
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
        }} className="bg-card border border-border rounded-2xl p-8 shadow-soft text-center">
              <div className="h-20 mb-6 flex items-center justify-center">
                <img src={study.logo} alt={`${study.company} logo`} className="max-w-[160px] max-h-[60px] w-auto h-auto object-contain" />
              </div>
              
              {/* Bar Chart */}
              <div className="flex items-end justify-center gap-4 h-40 mb-6">
                {/* Before bar */}
                <div className="flex flex-col items-center">
                  <div className="w-16 bg-muted-foreground/30 rounded-t-lg transition-all duration-1000" style={{
                height: `${study.before * 2}px`
              }} />
                  <span className="text-sm text-muted-foreground mt-2">Humanos</span>
                  <span className="text-lg font-bold text-muted-foreground">{study.before}%</span>
                </div>
                
                {/* After bar */}
                <div className="flex flex-col items-center">
                  <motion.div initial={{
                height: 0
              }} whileInView={{
                height: `${study.after * 2}px`
              }} viewport={{
                once: true
              }} transition={{
                duration: 1,
                delay: 0.3 + idx * 0.2
              }} className="w-16 bg-primary rounded-t-lg shadow-glow" />
                  <span className="text-sm text-muted-foreground mt-2">Recaudo AI</span>
                  <span className="text-lg font-bold text-foreground">{study.after}%</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                Incremento de contactabilidad del {study.increase}
              </p>
            </motion.div>)}
        </div>

        {/* Speed & Control Section - Redesigned */}
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
      }} className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-card overflow-hidden">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center font-display">
            <span className="text-muted-foreground">Velocidad, control</span> y precisión financiera
          </h3>

          {/* Four Feature Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          }} className="bg-secondary/80 border border-border rounded-2xl p-6 transition-shadow hover:shadow-lg">
              <motion.div className="w-12 h-12 bg-primary/80 rounded-full flex items-center justify-center mb-4" animate={{
              x: [0, 5, 0]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}>
                <Timer className="w-6 h-6 text-white" />
              </motion.div>
              <h4 className="text-lg font-bold text-foreground mb-3">
                Implementación en menos de 1 semana
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
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
          }} className="bg-secondary/80 border border-border rounded-2xl p-6 transition-shadow hover:shadow-lg">
              <motion.div className="w-12 h-12 bg-primary/80 rounded-full flex items-center justify-center mb-4" animate={{
              y: [0, -5, 0]
            }} transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}>
                <TrendingUp className="w-6 h-6 text-white" />
              </motion.div>
              <h4 className="text-lg font-bold text-foreground mb-3">+60% efectividad vs 40% humano</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
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
          }} className="bg-secondary/80 border border-border rounded-2xl p-6 transition-shadow hover:shadow-lg">
              <motion.div className="w-12 h-12 bg-primary/80 rounded-full flex items-center justify-center mb-4" whileHover={{
              rotate: 15
            }} transition={{
              type: "spring",
              stiffness: 300
            }}>
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
              <h4 className="text-lg font-bold text-foreground mb-3">Impacto directo</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
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
          }} className="bg-primary/5 border border-primary/20 rounded-2xl p-6 transition-shadow hover:shadow-lg hover:shadow-primary/10">
              <motion.div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4" whileHover={{
              rotate: -15
            }} transition={{
              type: "spring",
              stiffness: 300
            }}>
                <DollarSign className="w-6 h-6 text-primary-foreground" />
              </motion.div>
              <h4 className="text-lg font-bold text-foreground mb-3">Resultado financiero</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
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
        }} className="text-center text-muted-foreground italic text-lg">
            "No solo es tecnología, es estrategia con rentabilidad medible."
          </motion.p>
        </motion.div>
      </div>
    </section>;
};
export default ResultsSection;
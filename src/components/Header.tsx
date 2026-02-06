import { motion } from "framer-motion";
import RecaudoLogo from "./RecaudoLogo";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <RecaudoLogo className="h-6 sm:h-8 text-foreground" />
          <span className="text-muted-foreground text-xs sm:text-sm -ml-1 hidden sm:inline">by Callbook.ai</span>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=573112251150"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground px-3 sm:px-5 py-2 rounded-lg font-medium text-xs sm:text-sm hover:scale-105 hover:shadow-lime transition-all duration-200"
        >
          <span className="hidden sm:inline">Agendar una Demo</span>
          <span className="sm:hidden">Demo</span>
        </a>
      </div>
    </motion.header>
  );
};

export default Header;

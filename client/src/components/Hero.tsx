import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/Corporate_technology_hero_background_cf7891f4.png";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("divisions");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      
      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.3 }}
          >
            Empowering Innovation
            <motion.span 
              className="block bg-gradient-to-r from-primary-foreground to-primary-foreground/80 bg-clip-text text-transparent"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Through Technology
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Al Essa Group delivers cutting-edge solutions across Education, Information Technology, and Medical sectors, 
            transforming businesses and institutions since 1996
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border border-primary-foreground/20 text-lg px-8 py-4 h-auto"
                data-testid="button-explore-solutions"
                onClick={() => document.getElementById("divisions")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm text-lg px-8 py-4 h-auto"
                data-testid="button-contact-us"
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">25+</div>
              <div className="text-primary-foreground/80 text-lg">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">3</div>
              <div className="text-primary-foreground/80 text-lg">Technology Divisions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">500+</div>
              <div className="text-primary-foreground/80 text-lg">Successful Projects</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-primary-foreground hover:text-primary-foreground/80 transition-colors"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
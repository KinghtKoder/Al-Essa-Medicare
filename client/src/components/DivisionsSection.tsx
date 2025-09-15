import DivisionCard from "./DivisionCard";
import { GraduationCap, Server, Heart } from "lucide-react";
import { motion } from "framer-motion";
import educationImage from "@assets/generated_images/Education_technology_classroom_scene_88f85537.png";
import itImage from "@assets/generated_images/IT_professional_with_systems_f332ed56.png";
import medicalImage from "@assets/generated_images/Medical_technology_hospital_equipment_3c81f995.png";

export default function DivisionsSection() {
  const divisions = [
    {
      title: "Education Technology",
      subtitle: "Fostering quality education by engaging innovative learning environment",
      description: "We provide quality products and services that support K-12 to universities, research institutes and training facilities with the best possible tools and resources to build positive learning environment.",
      features: [
        "Gymnastic equipment for physical education programs",
        "Multimedia Language lab solutions with interactive learning",
        "Specialized smart science laboratories with cutting-edge equipment",
        "Engineering, medical, and scientific equipment for research",
        "Marine and aviation simulators for professional training",
        "Complete range of physical testing equipment and tools"
      ],
      image: educationImage,
      href: "/education",
      icon: <GraduationCap className="h-6 w-6 text-primary" />
    },
    {
      title: "Information Technology",  
      subtitle: "Empowering business by leveraging IT",
      description: "Our Information Technology Division delivers business-driven technology centered applications and solutions across various business domains. We are acknowledged as one of the established IT service providers in Middle East.",
      features: [
        "Laboratory Information Management Systems (LIMS) since 1996",
        "Business-driven technology applications and solutions",
        "Professional consulting services and technical support",
        "Data management and comprehensive database solutions",
        "Quality assurance monitoring and statistical analysis",
        "Custom application development and system integration"
      ],
      image: itImage,
      href: "/it",
      icon: <Server className="h-6 w-6 text-primary" />
    },
    {
      title: "Medical Technology",
      subtitle: "Enabling Accountable Healthcare By Leveraging the IT Highway", 
      description: "The Medical Technology Division has proven experience in introducing cutting-edge healthcare equipment and solutions from world-class manufacturers for healthcare facilities, rehabilitation and wellness.",
      features: [
        "Perioperative segment equipment - OR, Anesthesia, PACU, ICU",
        "State-of-the-art medical equipment for treatment modalities",
        "Enterprise-wide data management systems for healthcare",
        "Comprehensive medical laboratory and digital pathology solutions",
        "Acute care telemedicine solutions and high-acuity consults",
        "Pharmacy medication and supply management solutions"
      ],
      image: medicalImage,
      href: "/medical", 
      icon: <Heart className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <section id="divisions" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.3 }}
            viewport={{ once: true }}
          >
            Our Technology Divisions
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Delivering innovative solutions across three key sectors, transforming the way businesses 
            and institutions leverage technology for growth and excellence.
          </motion.p>
        </motion.div>

        {/* Division Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => (
            <motion.div
              key={division.title}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <DivisionCard
                title={division.title}
                subtitle={division.subtitle}
                description={division.description}
                features={division.features}
                image={division.image}
                href={division.href}
                icon={division.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Globe, Clock } from "lucide-react";

export default function AboutSection() {
  const achievements = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "Committed to delivering exceptional quality in every project we undertake"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Expert Team",
      description: "Skilled professionals with extensive domain expertise across all technology sectors"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Regional Leader",
      description: "Established technology service provider in the Middle East region"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Since 1996", 
      description: "Nearly three decades of proven experience and successful implementations"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <Badge variant="secondary" className="mb-4">
              About Al Essa Group
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Commitment to Excellence
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Al Essa Group has been at the forefront of technology innovation since 1996, 
                delivering comprehensive solutions that transform businesses and educational institutions. 
                Our three specialized divisions work in harmony to provide integrated technology 
                solutions across diverse sectors.
              </p>
              <p>
                We don't just sell products and solutions – we are passionate people who turn 
                these solutions into applicable, understandable business solutions that make 
                learning easier for students and the teaching community, while empowering 
                businesses through strategic IT implementation.
              </p>
              <p>
                Our commitment extends beyond implementation. We assemble and deploy project 
                teams consisting of developers, technical support specialists, business analysts, 
                and project managers who hold extensive domain expertise to understand your 
                industry and the technical skills to design, implement, and enhance superior solutions.
              </p>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover-elevate transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {achievement.icon}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
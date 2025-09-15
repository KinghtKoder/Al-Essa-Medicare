import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Globe, Clock, Target, Lightbulb } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Our Mission",
      description: "To empower businesses and educational institutions with innovative technology solutions that drive growth and excellence."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Our Vision", 
      description: "To be the leading technology solutions provider in the Middle East, recognized for quality, innovation, and customer satisfaction."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Our Values",
      description: "Excellence, integrity, innovation, and commitment to delivering superior value to our customers and partners."
    }
  ];

  const timeline = [
    { year: "1996", event: "Founded Al Essa Group with focus on Laboratory Information Systems" },
    { year: "2000", event: "Expanded into Education Technology sector" },
    { year: "2005", event: "Launched Medical Technology division" },
    { year: "2010", event: "Became established IT service provider in Middle East" },
    { year: "2015", event: "Introduced smart education solutions and simulators" },
    { year: "2020", event: "Enhanced telemedicine and digital health solutions" },
    { year: "2025", event: "Continuing innovation across all technology sectors" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            About Al Essa Group
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            A Commitment to Excellence in Technology Solutions
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-elevate">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              25+ Years of Innovation
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our journey of technological excellence
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-20 text-right">
                  <Badge variant="secondary" className="text-sm font-bold">
                    {item.year}
                  </Badge>
                </div>
                <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-foreground">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">Leadership</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Experienced Leadership Team
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our leadership combines decades of industry experience with deep technical expertise 
            and a commitment to delivering exceptional value to our clients.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover-elevate">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Expert Team</h3>
                <p className="text-sm text-muted-foreground">
                  Skilled professionals with extensive domain expertise
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Global Reach</h3>
                <p className="text-sm text-muted-foreground">
                  Serving clients across the Middle East region
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Quality Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Committed to excellence in every project
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Proven Track Record</h3>
                <p className="text-sm text-muted-foreground">
                  25+ years of successful implementations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

interface DivisionCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  href: string;
  icon: React.ReactNode;
}

export default function DivisionCard({ 
  title, 
  subtitle, 
  description, 
  features, 
  image, 
  href, 
  icon 
}: DivisionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="group hover-elevate overflow-hidden transition-all duration-300 hover:scale-[1.02]">
      {/* Card Header with Image */}
      <div 
        className="relative h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/20" />
        <div className="absolute top-4 left-4 p-2 bg-primary-foreground/90 rounded-lg backdrop-blur-sm">
          {icon}
        </div>
        <div className="absolute bottom-4 left-4 text-primary-foreground">
          <h3 className="text-2xl font-bold mb-1">{title}</h3>
          <p className="text-primary-foreground/90 text-sm italic">"{subtitle}"</p>
        </div>
      </div>

      <CardContent className="p-6">
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>

        {/* Features List */}
        <div className={`transition-all duration-300 overflow-hidden ${
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="mb-4">
            <h4 className="font-semibold mb-3 text-foreground">Our Capabilities:</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            data-testid={`button-expand-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="ml-1 h-4 w-4" />
              </>
            ) : (
              <>
                Learn More <ChevronDown className="ml-1 h-4 w-4" />
              </>
            )}
          </Button>

          <Button
            size="sm"
            onClick={() => console.log(`Navigate to ${href}`)}
            data-testid={`button-explore-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            Explore
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
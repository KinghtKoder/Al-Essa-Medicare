import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    division: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // todo: remove mock functionality
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      company: "",
      division: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      label: "Email",
      value: "info@alessagroup.com",
      href: "mailto:info@alessagroup.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      label: "Phone", 
      value: "+971 4 XXX XXXX",
      href: "tel:+971XXXXXXX"
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      label: "Address",
      value: "Dubai, United Arab Emirates",
      href: "#"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact our experts today to discuss how Al Essa Group can help you 
            achieve your technology goals across education, IT, and medical sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@company.com"
                      required
                      data-testid="input-email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="text-sm font-medium text-foreground mb-2 block">
                      Company/Organization
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your organization"
                      data-testid="input-company"
                    />
                  </div>
                  <div>
                    <label htmlFor="division" className="text-sm font-medium text-foreground mb-2 block">
                      Area of Interest
                    </label>
                    <Input
                      id="division"
                      name="division"
                      value={formData.division}
                      onChange={handleInputChange}
                      placeholder="Education, IT, or Medical"
                      data-testid="input-division"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements..."
                    rows={5}
                    required
                    data-testid="textarea-message"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full"
                  data-testid="button-submit-contact"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 bg-card hover:bg-card/80 rounded-lg border border-card-border hover-elevate transition-all duration-200"
                    data-testid={`link-${info.label.toLowerCase()}`}
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{info.label}</div>
                      <div className="text-muted-foreground">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">
                  Why Choose Al Essa Group?
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      25+ years of proven experience and expertise
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Comprehensive solutions across multiple sectors
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      End-to-end support from consultation to implementation
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Competitive pricing with quality assurance
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Education Technology", href: "/education" },
    { name: "Information Technology", href: "/it" },
    { name: "Medical Technology", href: "/medical" },
    { name: "Contact", href: "/contact" }
  ];

  const services = [
    "Laboratory Information Systems",
    "Educational Equipment & Solutions", 
    "Medical Technology & Equipment",
    "Business Applications & Consulting",
    "Training & Support Services"
  ];

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">AE</span>
              </div>
              <span className="font-bold text-xl text-card-foreground">Al Essa Group</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Empowering innovation through technology since 1996. Leading provider of 
              comprehensive solutions across Education, IT, and Medical sectors.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" data-testid="button-linkedin">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-twitter">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button 
                      variant="ghost" 
                      className="h-auto p-0 text-muted-foreground hover:text-foreground text-sm justify-start font-normal"
                    >
                      {link.name}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:info@alessagroup.com" className="text-muted-foreground hover:text-foreground">
                  info@alessagroup.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+971 4 XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Al Essa Group. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Button variant="ghost" size="sm" className="h-auto p-0 font-normal">
              Privacy Policy
            </Button>
            <Button variant="ghost" size="sm" className="h-auto p-0 font-normal">
              Terms of Service
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
import ContactSection from "../components/ContactSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Get in touch with our experts to discuss your technology needs
          </p>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
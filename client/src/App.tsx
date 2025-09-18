import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "@/pages/not-found";
import { Analytics } from "@vercel/analytics/react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      
      {/* Division pages (coming soon) */}
      <Route path="/education" component={() => <div className="min-h-screen pt-20 flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold mb-4">Education Technology</h1><p className="text-muted-foreground">Page coming soon...</p></div></div>} />
      <Route path="/it" component={() => <div className="min-h-screen pt-20 flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold mb-4">Information Technology</h1><p className="text-muted-foreground">Page coming soon...</p></div></div>} />
      <Route path="/medical" component={() => <div className="min-h-screen pt-20 flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold mb-4">Medical Technology</h1><p className="text-muted-foreground">Page coming soon...</p></div></div>} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

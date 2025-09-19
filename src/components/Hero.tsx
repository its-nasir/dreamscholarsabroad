import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Trophy, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 sm:py-32">
      <div className="absolute inset-0 bg-background/5" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center rounded-full bg-primary-foreground/20 px-3 py-1 text-sm backdrop-blur">
            <Globe className="mr-2 h-4 w-4 text-primary-foreground" />
            <span className="text-primary-foreground">Global Job Placement Platform</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-6xl">
            Your Dream Job
            <span className="block text-primary-foreground/90">Awaits Worldwide</span>
          </h1>
          
          <p className="mb-8 text-xl text-primary-foreground/80 sm:text-2xl">
            Dream Scholars Abroad connects talented students with global career opportunities. 
            From internships to full-time positions, we make your international career dreams come true.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link to="/student-dashboard">
              <Button size="lg" variant="secondary" className="group w-full sm:w-auto">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="w-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto">
                Explore Services
              </Button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-primary-foreground">10,000+</div>
              <div className="text-sm text-primary-foreground/70">Students Placed</div>
            </div>
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <MapPin className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-primary-foreground">50+</div>
              <div className="text-sm text-primary-foreground/70">Countries</div>
            </div>
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <Trophy className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-primary-foreground">95%</div>
              <div className="text-sm text-primary-foreground/70">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
    </section>
  );
};

export default Hero;
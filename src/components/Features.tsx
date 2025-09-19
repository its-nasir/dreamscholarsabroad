import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  Briefcase, 
  Users, 
  FileText, 
  Globe, 
  Award,
  Headphones,
  TrendingUp
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Career Counseling",
      description: "Personalized guidance to help you choose the right career path and opportunities abroad."
    },
    {
      icon: Briefcase,
      title: "Job Placement",
      description: "Direct placement in top companies across 50+ countries with competitive packages."
    },
    {
      icon: FileText,
      title: "Resume Building",
      description: "Professional resume and cover letter crafting to make you stand out to employers."
    },
    {
      icon: Users,
      title: "Interview Preparation",
      description: "Mock interviews and tips to ace your job interviews with international employers."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Access to our vast network of international employers and recruitment partners."
    },
    {
      icon: Award,
      title: "Skill Development",
      description: "Training programs and certifications to enhance your skills for global markets."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock assistance throughout your journey from application to placement."
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Ongoing support for career advancement and progression in your international role."
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Comprehensive Services for Your Success
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            From career guidance to job placement, we provide end-to-end support 
            for your international career journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm leading-6">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
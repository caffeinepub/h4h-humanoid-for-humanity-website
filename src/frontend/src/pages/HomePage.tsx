import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  Brain,
  Cpu,
  MapPin,
  Shield,
  TrafficCone,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function HomePage() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      const elements =
        sectionRef.current.querySelectorAll(".animate-on-scroll");
      for (const el of Array.from(elements)) {
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col" ref={sectionRef}>
      {/* Hero Section */}
      <section className="animate-on-scroll relative flex min-h-[600px] items-end justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/coverimage-019d6dbc-7bf1-744c-9cb5-b832b453d06d.png"
            alt="H4H Hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        </div>
        <div className="container relative z-10 flex flex-col items-center gap-6 pb-16 pt-32 text-center sm:pb-20 sm:pt-40">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            H4H - Humanoid for Humanity
          </h1>
          <p className="max-w-2xl text-lg text-white/90 sm:text-xl md:text-2xl">
            Technology for Humanity & Human Safety
          </p>
          <p className="max-w-3xl text-base text-white/80 md:text-lg">
            Pioneering the future of humanoid robotics with cutting-edge AI
            technology designed to enhance human safety and improve lives
            worldwide.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => navigate({ to: "/about" })}
              className="gap-2 transition-transform hover:scale-105"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate({ to: "/contact" })}
              className="bg-white/10 text-white backdrop-blur-sm transition-transform hover:scale-105 hover:bg-white/20"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="animate-on-scroll container py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Project Overview
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            H4H integrates advanced technologies to create a comprehensive
            humanoid robotics platform focused on safety and human well-being.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="group transition-all hover:scale-105 hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Brain className="h-6 w-6" />
              </div>
              <CardTitle>Mental Health AI Companion</CardTitle>
              <CardDescription>
                AI-powered companion robot providing emotional support and
                mental health assistance
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="group transition-all hover:scale-105 hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <MapPin className="h-6 w-6" />
              </div>
              <CardTitle>GPS Tracking System</CardTitle>
              <CardDescription>
                Real-time safety tracking for students and women with emergency
                response capabilities
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="group transition-all hover:scale-105 hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <TrafficCone className="h-6 w-6" />
              </div>
              <CardTitle>AI Traffic Management</CardTitle>
              <CardDescription>
                Intelligent traffic monitoring and management system for
                enhanced road safety
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="group transition-all hover:scale-105 hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Cpu className="h-6 w-6" />
              </div>
              <CardTitle>Advanced Hardware</CardTitle>
              <CardDescription>
                State-of-the-art robotics components and sensors for reliable
                operation
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Features Overview */}
      <section className="animate-on-scroll bg-accent/30 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Why H4H?
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our humanoid robot combines advanced AI, safety protocols, and
              human-centric design to create a revolutionary platform for
              humanity.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="group transition-all hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Bot className="h-6 w-6" />
                </div>
                <CardTitle>Advanced AI</CardTitle>
                <CardDescription>
                  State-of-the-art artificial intelligence for natural human
                  interaction
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group transition-all hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Shield className="h-6 w-6" />
                </div>
                <CardTitle>Safety First</CardTitle>
                <CardDescription>
                  Built with comprehensive safety protocols for human protection
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group transition-all hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Zap className="h-6 w-6" />
                </div>
                <CardTitle>Cutting Edge</CardTitle>
                <CardDescription>
                  Latest robotics technology and innovative engineering
                  solutions
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group transition-all hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle>For Humanity</CardTitle>
                <CardDescription>
                  Designed to serve and enhance human life in meaningful ways
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="animate-on-scroll container py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground">
              H4H is a student innovation project dedicated to developing
              humanoid robotics that prioritize human safety and well-being. Our
              mission is to create technology that serves humanity, not replaces
              it.
            </p>
            <p className="text-lg text-muted-foreground">
              Through advanced AI, robust safety systems, and thoughtful design,
              we're building a future where humans and robots work together to
              solve real-world challenges.
            </p>
            <div>
              <Button
                onClick={() => navigate({ to: "/about" })}
                className="gap-2 transition-transform hover:scale-105"
              >
                Discover Our Story <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            {/* Tech aura glow behind robot */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background:
                  "radial-gradient(ellipse 70% 80% at 50% 60%, oklch(0.65 0.22 260 / 0.35) 0%, oklch(0.55 0.28 300 / 0.18) 50%, transparent 75%)",
              }}
            />
            <img
              src="/assets/roboth_00-019d6dbc-4a39-741c-b79b-891fcc223076.png"
              alt="H4H Humanoid Robot"
              className="relative z-10 max-h-[520px] w-full max-w-[420px] object-contain transition-transform hover:scale-105 drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="animate-on-scroll container py-20">
        <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-blue-400/20 via-violet-400/20 to-pink-400/20">
          <CardContent className="p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Learn More?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              Explore our features, meet our team, and discover how H4H is
              shaping the future of humanoid robotics.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => navigate({ to: "/features" })}
                className="transition-transform hover:scale-105"
              >
                View Features
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate({ to: "/team" })}
                className="transition-transform hover:scale-105"
              >
                Meet the Team
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

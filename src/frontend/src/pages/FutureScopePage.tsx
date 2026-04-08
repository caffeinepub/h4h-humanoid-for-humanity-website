import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Globe,
  Lightbulb,
  Rocket,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function FutureScopePage() {
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
      for (const el of elements) {
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, []);

  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "Foundation & Prototype",
      status: "In Progress",
      timeline: "2025 Q3–Q4",
      goals: [
        "Complete core mechanical design",
        "Implement basic AI systems",
        "Develop safety protocols",
        "Build functional prototype",
      ],
    },
    {
      phase: "Phase 2",
      title: "Enhancement & Testing",
      status: "Planned",
      timeline: "2026 Q1",
      goals: [
        "Advanced sensor integration",
        "Improved mobility systems",
        "Extended battery life",
        "Comprehensive field testing",
      ],
    },
    {
      phase: "Phase 3",
      title: "Refinement & Optimization",
      status: "Future",
      timeline: "2026 Q2",
      goals: [
        "AI learning optimization",
        "Enhanced human interaction",
        "Production-ready design",
        "Safety certification",
      ],
    },
    {
      phase: "Phase 4",
      title: "Deployment & Scale",
      status: "Future",
      timeline: "2026 Q2+",
      goals: [
        "Pilot program launch",
        "Industry partnerships",
        "Mass production planning",
        "Global deployment strategy",
      ],
    },
  ];

  const futureFeatures = [
    {
      icon: Lightbulb,
      title: "Advanced Learning",
      description:
        "Self-improving AI that learns from every interaction and environment",
    },
    {
      icon: Globe,
      title: "Multi-Environment",
      description:
        "Adaptation to diverse environments from urban to extreme conditions",
    },
    {
      icon: Users,
      title: "Swarm Intelligence",
      description: "Multiple H4H units working together for complex tasks",
    },
    {
      icon: Zap,
      title: "Energy Efficiency",
      description: "Extended operation time with renewable energy integration",
    },
    {
      icon: Shield,
      title: "Enhanced Safety",
      description: "Predictive safety systems and advanced hazard detection",
    },
    {
      icon: TrendingUp,
      title: "Scalable Platform",
      description:
        "Modular design allowing customization for specific applications",
    },
  ];

  const applications = [
    {
      title: "Emergency Response",
      description:
        "First responder support in natural disasters, fires, and hazardous material incidents",
      impact: "High",
    },
    {
      title: "Healthcare Support",
      description:
        "Patient care assistance, elderly support, and medical facility operations",
      impact: "High",
    },
    {
      title: "Industrial Safety",
      description:
        "Hazardous environment inspection, maintenance, and worker safety monitoring",
      impact: "Medium",
    },
    {
      title: "Search & Rescue",
      description:
        "Locating and assisting victims in disaster zones and difficult terrain",
      impact: "High",
    },
    {
      title: "Education & Research",
      description:
        "Interactive learning platform and robotics research advancement",
      impact: "Medium",
    },
    {
      title: "Space Exploration",
      description:
        "Assisting astronauts and conducting research in space environments",
      impact: "Future",
    },
  ];

  return (
    <div className="flex flex-col" ref={sectionRef}>
      {/* Hero Section */}
      <section className="animate-on-scroll relative flex min-h-[400px] items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-background to-accent/20">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/generated/future-tech.dim_1000x600.png"
            alt="Future Technology"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="container relative z-10 py-20 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Future Scope
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Our vision for the future of H4H and humanoid robotics
          </p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="animate-on-scroll container py-20">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <div className="mb-8 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Rocket className="h-10 w-10" />
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Vision for Tomorrow
          </h2>
          <p className="text-lg text-muted-foreground">
            H4H represents more than just a robotics project—it's a commitment
            to creating a safer future for humanity. Our vision extends beyond
            current capabilities to imagine a world where humanoid robots
            seamlessly integrate into society, enhancing human safety and
            quality of life.
          </p>
          <p className="text-lg text-muted-foreground">
            We envision H4H units deployed globally, from disaster zones to
            healthcare facilities, from industrial sites to space stations,
            always with one primary mission: protecting and serving humanity.
          </p>
        </div>
      </section>

      {/* Development Roadmap */}
      <section className="animate-on-scroll bg-accent/30 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Development Roadmap
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our strategic plan for bringing H4H from concept to reality
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {roadmapPhases.map((phase) => (
              <Card
                key={phase.phase}
                className="border-primary/20 transition-all hover:scale-105 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-3 flex items-center justify-between">
                    <Badge
                      variant={
                        phase.status === "In Progress" ? "default" : "secondary"
                      }
                    >
                      {phase.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {phase.timeline}
                    </span>
                  </div>
                  <CardTitle className="text-2xl">
                    {phase.phase}: {phase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.goals.map((goal) => (
                      <li
                        key={goal}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Target className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Features */}
      <section className="animate-on-scroll container py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Future Capabilities
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Advanced features we're developing for next-generation H4H
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {futureFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group transition-all hover:scale-105 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Future Applications */}
      <section className="animate-on-scroll bg-accent/30 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Potential Applications
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Real-world scenarios where H4H will make a difference
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {applications.map((app) => (
              <Card
                key={app.title}
                className="transition-all hover:scale-105 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <CardTitle className="text-lg">{app.title}</CardTitle>
                    <Badge
                      variant={
                        app.impact === "High"
                          ? "default"
                          : app.impact === "Medium"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {app.impact}
                    </Badge>
                  </div>
                  <CardDescription>{app.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Innovation */}
      <section className="animate-on-scroll container py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Research & Innovation
          </h2>
          <Card className="border-primary/20 transition-all hover:shadow-lg">
            <CardContent className="space-y-6 p-8">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-primary">
                  Ongoing Research Areas
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>
                      Advanced machine learning algorithms for real-time
                      decision making
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>
                      Bio-inspired locomotion systems for improved mobility
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>
                      Human-robot interaction and emotional intelligence
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>Energy-efficient actuators and power management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>
                      Distributed intelligence and multi-robot coordination
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold text-primary">
                  Collaboration Opportunities
                </h3>
                <p className="text-muted-foreground">
                  We're actively seeking partnerships with research
                  institutions, industry leaders, and government agencies to
                  accelerate H4H development. Our open approach to innovation
                  welcomes collaborators who share our vision for technology
                  that serves humanity.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="animate-on-scroll bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container">
          <Card className="mx-auto max-w-3xl border-primary/20 text-center transition-all hover:shadow-lg">
            <CardContent className="p-12">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Rocket className="h-8 w-8" />
                </div>
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Join Us on This Journey
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                The future of H4H is being written today. Whether you're a
                student, researcher, industry professional, or simply passionate
                about robotics and human safety, there's a place for you in our
                journey.
              </p>
              <p className="text-muted-foreground">
                Together, we can build a future where technology truly serves
                humanity.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

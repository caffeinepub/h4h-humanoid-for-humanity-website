import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useRef } from "react";

export default function FeaturesPage() {
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
      <section className="animate-on-scroll relative flex min-h-[400px] items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-background to-accent/20">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/generated/robotics-components.dim_800x600.jpg"
            alt="Robotics Components"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="container relative z-10 py-20 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Features & Capabilities
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Cutting-edge technology designed for human safety and assistance
          </p>
        </div>
      </section>

      {/* System Overview */}
      <section className="animate-on-scroll container py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              System Overview
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              H4H integrates multiple advanced systems to deliver comprehensive
              safety and assistance capabilities
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                The H4H humanoid robot is built on a modular architecture that
                combines artificial intelligence, advanced sensors, and robust
                mechanical systems. Our integrated approach ensures seamless
                operation across all subsystems.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    ✓
                  </span>
                  <span>
                    Real-time processing with edge computing capabilities
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    ✓
                  </span>
                  <span>
                    Multi-layered safety protocols and fail-safe mechanisms
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    ✓
                  </span>
                  <span>
                    Adaptive learning algorithms for continuous improvement
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    ✓
                  </span>
                  <span>
                    Seamless integration with IoT and smart city infrastructure
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative flex items-center justify-center">
                {/* Tech aura glow */}
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 85% at 50% 55%, oklch(0.65 0.22 260 / 0.40) 0%, oklch(0.55 0.28 300 / 0.20) 55%, transparent 80%)",
                  }}
                />
                <img
                  src="/assets/robotf_01-019d6dbc-5048-7467-b0d7-062603f90440.png"
                  alt="System Overview Robot"
                  className="relative z-10 max-h-[500px] w-full max-w-[380px] object-contain transition-transform hover:scale-105 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mental Health AI Companion Robot */}
      <section className="animate-on-scroll bg-accent/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1">
                <div className="relative flex items-center justify-center">
                  {/* Soft lighting glow for friendly companion feel */}
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background:
                        "radial-gradient(ellipse 75% 80% at 50% 55%, oklch(0.80 0.15 200 / 0.35) 0%, oklch(0.70 0.20 280 / 0.18) 55%, transparent 80%)",
                    }}
                  />
                  <img
                    src="/assets/robotm_01-019d6dbc-51fd-743c-be91-6c551d303c99.png"
                    alt="Mental Health AI Companion Robot"
                    className="relative z-10 max-h-[540px] w-full max-w-[420px] object-contain transition-transform hover:scale-105 drop-shadow-2xl"
                  />
                </div>
              </div>
              <div className="order-1 space-y-6 lg:order-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Mental Health AI Companion Robot
                </h2>
                <p className="text-lg text-muted-foreground">
                  Our AI companion provides emotional support and mental health
                  assistance through empathetic interaction and intelligent
                  conversation.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      ✓
                    </span>
                    <span>
                      Natural language processing for empathetic conversations
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      ✓
                    </span>
                    <span>
                      Emotion recognition through facial analysis and voice tone
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      ✓
                    </span>
                    <span>
                      24/7 availability for mental health support and
                      companionship
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      ✓
                    </span>
                    <span>
                      Crisis detection and emergency response coordination
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Students & Women Safety GPS Tracking System */}
      <section className="animate-on-scroll container py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Students & Women Safety GPS Tracking System
              </h2>
              <p className="text-lg text-muted-foreground">
                Advanced GPS tracking and safety monitoring system designed to
                protect vulnerable populations in real-time.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    ✓
                  </span>
                  <span>
                    Real-time location tracking with geofencing capabilities
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    ✓
                  </span>
                  <span>
                    Emergency SOS button with instant alert to authorities
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    ✓
                  </span>
                  <span>
                    Safe route recommendations based on historical data
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    ✓
                  </span>
                  <span>
                    Integration with local law enforcement and security services
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/generated/gps-tracking-system.dim_600x400.png"
                alt="GPS Tracking System"
                className="rounded-2xl shadow-2xl transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Traffic Management System */}
      <section className="animate-on-scroll bg-accent/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="/assets/generated/ai-traffic-management.dim_600x400.png"
                  alt="AI Traffic Management"
                  className="rounded-2xl shadow-2xl transition-transform hover:scale-105"
                />
              </div>
              <div className="order-1 space-y-6 lg:order-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  AI Traffic Management System
                </h2>
                <p className="text-lg text-muted-foreground">
                  Intelligent traffic monitoring and management system that
                  enhances road safety and optimizes traffic flow.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      ✓
                    </span>
                    <span>
                      Real-time traffic analysis and congestion prediction
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      ✓
                    </span>
                    <span>
                      Accident detection and emergency response coordination
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      ✓
                    </span>
                    <span>
                      Smart signal optimization for improved traffic flow
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      ✓
                    </span>
                    <span>
                      Integration with emergency services and navigation systems
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Components */}
      <section className="animate-on-scroll container py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Hardware Components
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              State-of-the-art hardware powering H4H's capabilities
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <Card className="transition-all hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Sensors & Perception</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• RGB-D cameras for 3D vision and depth perception</p>
                  <p>• LiDAR sensors for precise environmental mapping</p>
                  <p>• IMU and force sensors for balance and touch feedback</p>
                  <p>
                    • Environmental sensors (temperature, gas, smoke detection)
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Computing & Processing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• AI accelerator for neural network processing</p>
                  <p>• Multi-core processor for real-time operations</p>
                  <p>• 16GB RAM for efficient multitasking</p>
                  <p>• 256GB storage for data and model storage</p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Mobility & Actuation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• 25+ degrees of freedom for natural movement</p>
                  <p>• Compliant actuators for safe human interaction</p>
                  <p>• Advanced balance control system</p>
                  <p>• Hot-swappable battery modules (8-12 hour runtime)</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/generated/robotics-components.dim_800x600.jpg"
                alt="Hardware Components"
                className="rounded-2xl shadow-2xl transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Download,
  Eye,
  FileText,
  Heart,
  Lightbulb,
  Target,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function AboutPage() {
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

  return (
    <div className="flex flex-col" ref={sectionRef}>
      {/* Hero Section */}
      <section className="animate-on-scroll relative flex min-h-[400px] items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-background to-accent/20">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/generated/tech-background.dim_1200x800.png"
            alt="Technology Background"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="container relative z-10 py-20 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            About H4H
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Pioneering humanoid robotics for a safer, better tomorrow
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="animate-on-scroll container py-20">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Who We Are
          </h2>
          <p className="text-lg text-muted-foreground">
            H4H (Humanoid for Humanity) is an innovative student project focused
            on developing advanced humanoid robotics with a core mission:
            Technology for Humanity & Human Safety. We believe that the future
            of robotics lies not in replacing humans, but in enhancing human
            capabilities and ensuring safety in various environments.
          </p>
          <p className="text-lg text-muted-foreground">
            Our team of passionate students and researchers is dedicated to
            creating intelligent, safe, and human-centric robotic solutions that
            address real-world challenges. From disaster response to healthcare
            assistance, H4H is designed to be a trusted companion in situations
            where human safety is paramount.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="animate-on-scroll bg-accent/30 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              The principles that guide our innovation and development
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center transition-all hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Target className="h-8 w-8" />
                </div>
                <CardTitle>Purpose-Driven</CardTitle>
                <CardDescription>
                  Every feature serves humanity's needs and safety
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Eye className="h-8 w-8" />
                </div>
                <CardTitle>Transparent</CardTitle>
                <CardDescription>
                  Open development process with clear ethical guidelines
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Heart className="h-8 w-8" />
                </div>
                <CardTitle>Human-Centric</CardTitle>
                <CardDescription>
                  Designed with empathy and human well-being at the core
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <CardTitle>Innovation</CardTitle>
                <CardDescription>
                  Pushing boundaries while maintaining safety standards
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="animate-on-scroll container py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <Card className="border-primary/20 transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                To develop advanced humanoid robotics that prioritize human
                safety and well-being in every aspect of their design and
                operation. We aim to create technology that serves as a
                protective companion, capable of operating in hazardous
                environments and assisting humans in critical situations.
              </p>
              <p className="text-muted-foreground">
                Through continuous innovation, rigorous testing, and ethical
                development practices, we strive to make humanoid robotics
                accessible, reliable, and beneficial for communities worldwide.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We envision a future where humanoid robots work alongside humans
                as trusted partners, enhancing safety in dangerous environments,
                providing assistance in emergency situations, and improving
                quality of life for people across the globe.
              </p>
              <p className="text-muted-foreground">
                H4H will be recognized as a pioneering force in ethical robotics
                development, setting new standards for safety, reliability, and
                human-robot collaboration in the industry.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reason for Selecting This Project */}
      <section className="animate-on-scroll bg-accent/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Reason for Selecting This Project
            </h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      1
                    </span>
                    <span>
                      <strong className="text-foreground">
                        Addressing Critical Safety Needs:
                      </strong>{" "}
                      With increasing concerns about human safety in hazardous
                      environments, there's a growing need for robotic solutions
                      that can assist and protect humans.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      2
                    </span>
                    <span>
                      <strong className="text-foreground">
                        Technological Innovation:
                      </strong>{" "}
                      The convergence of AI, robotics, and sensor technology has
                      made it possible to create truly intelligent and
                      responsive humanoid systems.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      3
                    </span>
                    <span>
                      <strong className="text-foreground">
                        Social Impact:
                      </strong>{" "}
                      This project has the potential to make a meaningful
                      difference in disaster response, healthcare, and public
                      safety sectors.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      4
                    </span>
                    <span>
                      <strong className="text-foreground">
                        Educational Value:
                      </strong>{" "}
                      Developing H4H provides invaluable hands-on experience in
                      cutting-edge technologies and interdisciplinary
                      collaboration.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      5
                    </span>
                    <span>
                      <strong className="text-foreground">
                        Future-Ready Skills:
                      </strong>{" "}
                      Working on humanoid robotics prepares our team for the
                      future of technology and automation.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/assets/generated/project-selection-reasons.dim_600x400.png"
                  alt="Project Selection Reasons"
                  className="rounded-2xl shadow-lg transition-transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UN SDG Alignment */}
      <section className="animate-on-scroll container py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Alignment with United Nations SDGs
          </h2>
          <p className="mb-12 text-center text-muted-foreground">
            H4H contributes to achieving the United Nations Sustainable
            Development Goals
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center transition-all hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <img
                    src="/assets/generated/sdg-goal-3.dim_100x100.png"
                    alt="SDG Goal 3"
                    className="h-24 w-24"
                  />
                </div>
                <CardTitle className="text-xl">Goal 3</CardTitle>
                <CardDescription className="text-base">
                  <strong>Good Health and Well-Being</strong>
                  <br />
                  Supporting healthcare assistance and mental health through AI
                  companion capabilities
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <img
                    src="/assets/generated/sdg-goal-10.dim_100x100.png"
                    alt="SDG Goal 10"
                    className="h-24 w-24"
                  />
                </div>
                <CardTitle className="text-xl">Goal 10</CardTitle>
                <CardDescription className="text-base">
                  <strong>Reduced Inequalities</strong>
                  <br />
                  Providing safety and assistance to vulnerable populations
                  including women and students
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <img
                    src="/assets/generated/sdg-goal-16.dim_100x100.png"
                    alt="SDG Goal 16"
                    className="h-24 w-24"
                  />
                </div>
                <CardTitle className="text-xl">Goal 16</CardTitle>
                <CardDescription className="text-base">
                  <strong>Peace, Justice & Strong Institutions</strong>
                  <br />
                  Enhancing public safety through GPS tracking and emergency
                  response systems
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Background */}
      <section className="animate-on-scroll bg-accent/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Project Background
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                H4H began as a student innovation initiative with a simple yet
                powerful question: How can we use robotics to make the world
                safer for humans? This question led to extensive research into
                humanoid robotics, artificial intelligence, and safety systems.
              </p>
              <p className="text-lg">
                Our interdisciplinary team brings together expertise in
                mechanical engineering, computer science, artificial
                intelligence, and human factors design. We've collaborated with
                industry experts, safety professionals, and ethicists to ensure
                our development process aligns with the highest standards.
              </p>
              <p className="text-lg">
                The project has evolved from initial concept sketches to
                functional prototypes, incorporating feedback from potential
                users and stakeholders. Every iteration brings us closer to our
                goal of creating a humanoid robot that truly serves humanity.
              </p>
              <p className="text-lg">
                As we continue to develop H4H, we remain committed to our
                founding principles: safety first, human-centric design, and
                technology that enhances rather than replaces human
                capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Document Section with Preview */}
      <section className="animate-on-scroll container py-20">
        <div className="mx-auto max-w-5xl space-y-10">
          {/* First Document */}
          <Card className="border-primary/20 transition-all hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <FileText className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl">Project Documentation</CardTitle>
              <CardDescription className="text-base">
                View or download our comprehensive project document for detailed
                information about H4H
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <Button
                  size="lg"
                  asChild
                  className="gap-2 transition-transform hover:scale-105"
                >
                  <a href="/assets/H4H document.pdf" download>
                    <Download className="h-5 w-5" />
                    Download H4H Document (PDF)
                  </a>
                </Button>
              </div>
              <div className="overflow-hidden rounded-lg border border-border">
                <iframe
                  src="/assets/H4H document.pdf"
                  className="h-[600px] w-full"
                  title="H4H Project Document Preview"
                />
              </div>
            </CardContent>
          </Card>

          {/* Second Document */}
          <Card className="border-primary/20 transition-all hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <FileText className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl">
                Additional Project Document
              </CardTitle>
              <CardDescription className="text-base">
                Explore supplementary documentation providing deeper insights
                into H4H's research and development
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <Button
                  size="lg"
                  asChild
                  className="gap-2 transition-transform hover:scale-105"
                >
                  <a
                    href="https://drive.google.com/file/d/1GhqP-kJhcZIYKKWM3L2BBnzwlLbSWZHb/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Download className="h-5 w-5" />
                    Open / Download Document
                  </a>
                </Button>
              </div>
              <div className="overflow-hidden rounded-lg border border-border">
                <iframe
                  src="https://drive.google.com/file/d/1GhqP-kJhcZIYKKWM3L2BBnzwlLbSWZHb/preview"
                  className="h-[600px] w-full"
                  title="H4H Additional Project Document Preview"
                  allow="autoplay"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

export default function TeamPage() {
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

  const teamMembers = [
    {
      name: "Mishika S",
      photo: "/assets/mishika.png",
      role: "Hardware & Circuit Design Lead",
      description:
        "Leads the project vision and excels in robot design and aesthetics, ensuring H4H is both functional and approachable. Passionate about creating technology that truly serves humanity.",
    },
    {
      name: "Namit Mohan",
      photo: "/assets/namith_mohan.png",
      role: "Programming & Automation Specialist",
      description:
        "Handles all technical aspects, programming, and AI integration, bringing H4H's intelligent features to life. Expert in robotics, machine learning, and embedded systems.",
    },
    {
      name: "Suhani Somashekar",
      photo: "/assets/suhani.png",
      role: "Research, Documentation & Presentation",
      description:
        "Focuses on research, testing, and ensuring H4H meets real-world needs with empathy and innovation. Dedicated to understanding user needs and improving the human-robot interaction.",
    },
  ];

  return (
    <div className="flex flex-col" ref={sectionRef}>
      {/* Hero Section */}
      <section className="animate-on-scroll relative flex min-h-[400px] items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-background to-accent/20">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/H4H cover_image.png"
            alt="Team"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="container relative z-10 py-20 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Our Team
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Meet the passionate students behind H4H
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="animate-on-scroll container py-20">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            A Dedicated Team
          </h2>
          <p className="text-lg text-muted-foreground">
            H4H is brought to life by a passionate team of students committed to
            developing innovative humanoid robotics for humanity. Our team
            combines diverse skills and expertise to create technology that
            prioritizes human safety and well-being.
          </p>
          <p className="text-lg text-muted-foreground">
            United by a shared vision for the future of robotics, we work
            collaboratively to push the boundaries of what's possible in
            humanoid technology.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="animate-on-scroll bg-accent/30 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Core Team Members
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              The dedicated individuals driving H4H forward
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {teamMembers.map((member) => (
              <Card
                key={member.name}
                className="group transition-all hover:scale-105 hover:shadow-lg"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 overflow-hidden rounded-full">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-40 w-40 object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-base font-semibold text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-center">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {member.description}
                  </p>
                  <div className="flex justify-center gap-2 pt-2">
                    <a
                      href="mailto:contact@h4h-project.edu"
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                      aria-label="Email"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                      aria-label="GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Presentation */}
      <section className="animate-on-scroll bg-accent/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Project Presentation
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                View our comprehensive presentation showcasing the H4H project,
                its goals, technologies, and future roadmap.
              </p>
            </div>
            <Card className="overflow-hidden border-primary/20 transition-all hover:shadow-lg">
              <div
                className="w-full"
                style={{ position: "relative", paddingTop: "56.25%" }}
              >
                <iframe
                  src="https://docs.google.com/presentation/d/1UWNeR_KXq0ZNOujGqojFBNtq839DDUjI/embed?start=false&loop=false&delayms=3000"
                  className="absolute inset-0 h-full w-full"
                  allowFullScreen
                  title="H4H Project Presentation"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Impact */}
      <section className="animate-on-scroll container py-20">
        <div className="mx-auto max-w-4xl">
          <Card className="border-primary/20 text-center transition-all hover:shadow-lg">
            <CardContent className="p-12">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Our Commitment
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                As a student innovation project, H4H represents our dedication
                to creating technology that makes a positive impact on society.
                We are committed to developing humanoid robotics that prioritize
                human safety, well-being, and dignity.
              </p>
              <p className="text-lg text-muted-foreground">
                Through continuous learning, collaboration, and innovation, we
                strive to contribute to the future of robotics and make a
                meaningful difference in people's lives.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

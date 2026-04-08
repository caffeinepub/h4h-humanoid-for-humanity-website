import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useRef, useState } from "react";

export default function GalleryPage() {
  const [_selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

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

  const galleryItems = [
    {
      src: "/assets/roboth_00-019d6dbc-4a39-741c-b79b-891fcc223076.png",
      title: "Humanoid Design",
      category: "Design",
      description: "Full-body view of the H4H humanoid robot design",
    },
    {
      src: "/assets/generated/tech-background.dim_1200x800.png",
      title: "Technology Infrastructure",
      category: "Technology",
      description: "Advanced technology powering H4H systems",
    },
    {
      src: "/assets/generated/robotics-components.dim_800x600.jpg",
      title: "Robotics Components",
      category: "Hardware",
      description: "Internal components and mechanical systems",
    },
    {
      src: "/assets/robotm_01-019d6dbc-51fd-743c-be91-6c551d303c99.png",
      title: "Mental Health AI Companion",
      category: "Features",
      description: "AI companion robot for mental health support",
    },
    {
      src: "/assets/generated/gps-tracking-system.dim_600x400.png",
      title: "GPS Tracking System",
      category: "Features",
      description: "Safety tracking system for students and women",
    },
    {
      src: "/assets/generated/ai-traffic-management.dim_600x400.png",
      title: "AI Traffic Management",
      category: "Features",
      description: "Intelligent traffic monitoring and management",
    },
    {
      src: "/assets/generated/future-tech.dim_1000x600.png",
      title: "Future Vision",
      category: "Concept",
      description: "Conceptual visualization of future capabilities",
    },
    {
      src: "/assets/generated/project-selection-reasons.dim_600x400.png",
      title: "Project Vision",
      category: "Concept",
      description: "Reasons for selecting this innovative project",
    },
    {
      src: "/assets/coverimage-019d6dbc-7bf1-744c-9cb5-b832b453d06d.png",
      title: "H4H Team",
      category: "Team",
      description: "The H4H team with their humanoid robot project",
    },
    {
      src: "/assets/generated/hero-cover.dim_1920x1080.png",
      title: "Hero Vision",
      category: "Concept",
      description: "Conceptual hero image for H4H project",
    },
    {
      src: "/assets/generated/student-team.dim_800x600.jpg",
      title: "Student Innovation",
      category: "Team",
      description: "Student team working on innovative robotics",
    },
    {
      src: "/assets/generated/tech-background.dim_1200x800.png",
      title: "Tech Infrastructure",
      category: "Technology",
      description: "Advanced technological infrastructure",
    },
  ];

  return (
    <div className="flex flex-col" ref={sectionRef}>
      {/* Hero Section */}
      <section className="animate-on-scroll relative flex min-h-[400px] items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-background to-accent/20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="container relative z-10 py-20 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Gallery
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Visual journey through H4H development and capabilities
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container py-20">
        <div className="animate-on-scroll mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Project Showcase
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Explore images from our development process, prototypes, and vision
            for the future
          </p>
        </div>
        <div
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-4 transition-opacity duration-[2000ms] ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {galleryItems.map((item) => (
            <Dialog key={item.title}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer overflow-hidden rounded-2xl transition-all hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="h-full w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-110"
                      onClick={() => setSelectedImage(item.src)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") setSelectedImage(item.src);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                      <Badge className="mb-2">{item.category}</Badge>
                      <h3 className="font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="space-y-4">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full rounded-2xl"
                  />
                  <div>
                    <Badge className="mb-2">{item.category}</Badge>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>

      {/* Video Demonstrations Section */}
      <section className="animate-on-scroll bg-accent/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Video Demonstrations
              </h2>
              <p className="text-muted-foreground">
                This video showcases the progress and technical demonstrations
                achieved so far in the H4H project, highlighting our innovative
                approach to humanoid robotics and safety systems.
              </p>
            </div>

            {/* First Video */}
            <Card className="overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://drive.google.com/file/d/1hJqwXAZESN-UYvQ3zGBtaogKmHzM9M4Z/preview"
                  className="h-full w-full"
                  allow="autoplay"
                  title="H4H Project Demonstration Video"
                />
              </div>
            </Card>

            {/* Second Video */}
            <div className="mt-10">
              <div className="mb-6 text-center">
                <h3 className="mb-2 text-2xl font-bold tracking-tight">
                  Additional Demonstration
                </h3>
                <p className="text-muted-foreground">
                  An additional showcase of H4H's technical capabilities and
                  robotic systems in action.
                </p>
              </div>
              <Card className="overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src="https://drive.google.com/file/d/1mPjTuv5p0NS2mjWWA3IWhqmsgGDVOYIW/preview"
                    className="h-full w-full"
                    allow="autoplay"
                    title="H4H Additional Demonstration Video"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

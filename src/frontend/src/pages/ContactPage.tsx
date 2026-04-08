import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col" ref={sectionRef}>
      {/* Hero Section */}
      <section className="animate-on-scroll relative flex min-h-[400px] items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-background to-accent/20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="container relative z-10 py-20 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Contact Us
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Get in touch with the H4H team
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="animate-on-scroll container py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <h2 className="mb-4 text-3xl font-bold tracking-tight">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground">
                Have questions about H4H? Want to collaborate? Fill out the form
                below and we'll get back to you as soon as possible.
              </p>
            </div>
            <Card className="transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="transition-all focus:scale-[1.02]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="transition-all focus:scale-[1.02]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="transition-all focus:scale-[1.02]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="transition-all focus:scale-[1.02]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full gap-2 transition-transform hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight">
                Contact Information
              </h2>
              <p className="text-muted-foreground">
                Reach out to us through any of the following channels. We're
                here to answer your questions and discuss potential
                collaborations.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="transition-all hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Email</CardTitle>
                      <CardDescription className="mt-1">
                        <a
                          href="mailto:contact@h4h-project.edu"
                          className="text-primary hover:underline"
                        >
                          contact@h4h-project.edu
                        </a>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="transition-all hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Phone</CardTitle>
                      <CardDescription className="mt-1">
                        <a
                          href="tel:+917975999990"
                          className="text-primary hover:underline"
                        >
                          +91 7975999990
                        </a>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="transition-all hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Location</CardTitle>
                      <CardDescription className="mt-1">
                        Robotics Lab, De Paul International Residential School
                        (DPIRS)
                        <br />
                        Belagola, near KRS Dam
                        <br />
                        Srirangapatna Taluk, Mandya District
                        <br />
                        Mysore, Karnataka 571606
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Office Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday: 9:00 AM - 5:00 PM
                  <br />
                  Saturday: 10:00 AM - 2:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="animate-on-scroll bg-accent/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Quick answers to common questions
              </p>
            </div>
            <div className="space-y-4">
              <Card className="transition-all hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">
                    How can I collaborate with H4H?
                  </CardTitle>
                  <CardDescription>
                    We welcome collaborations from students, researchers, and
                    industry partners. Contact us with your proposal and we'll
                    discuss potential opportunities.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-all hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Is H4H available for demonstrations?
                  </CardTitle>
                  <CardDescription>
                    Yes! We conduct demonstrations for educational institutions
                    and industry events. Please contact us to schedule a
                    demonstration.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-all hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Can I join the H4H team?
                  </CardTitle>
                  <CardDescription>
                    We're always looking for passionate students. Check our Team
                    page for current opportunities or reach out to express your
                    interest.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Linkedin } from "lucide-react";
import { SiFacebook, SiGithub, SiInstagram, SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/h4h_logo2.png"
                alt="H4H Logo"
                className="h-12 w-12"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary">H4H</span>
                <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 bg-clip-text text-xs font-semibold text-transparent">
                  Humanoid For Humanity
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Technology for Humanity & Human Safety. Building the future of
              humanoid robotics.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/" className="transition-colors hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="transition-colors hover:text-primary"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/features"
                  className="transition-colors hover:text-primary"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  className="transition-colors hover:text-primary"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="/gallery"
                  className="transition-colors hover:text-primary"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/future-scope"
                  className="transition-colors hover:text-primary"
                >
                  Future Scope
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="transition-colors hover:text-primary"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Connect With Us</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <SiFacebook className="h-4 w-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="X (Twitter)"
              >
                <SiX className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <SiInstagram className="h-4 w-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="GitHub"
              >
                <SiGithub className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2026 H4H ❤️ - Humanoid for Humanity 🤖. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

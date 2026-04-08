import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Gallery", path: "/gallery" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
    { name: "Future Scope", path: "/future-scope" },
  ];

  const handleNavigation = (path: string) => {
    navigate({ to: path });
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <img
            src="/assets/h4h_logo2.png"
            alt="H4H Logo"
            className="h-10 w-10"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-primary">
              H4H
            </span>
            <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 bg-clip-text text-xs font-semibold text-transparent">
              Humanoid For Humanity
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={currentPath === item.path ? "default" : "ghost"}
                size="sm"
                onClick={() => handleNavigation(item.path)}
                className="transition-all"
              >
                {item.name}
              </Button>
            ))}
          </nav>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-2"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] bg-background/95 backdrop-blur-xl sm:w-[320px]"
            >
              <div className="flex flex-col gap-4 py-4">
                <div className="flex items-center gap-3 border-b border-border pb-4">
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
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.path}>
                      <Button
                        variant={
                          currentPath === item.path ? "default" : "ghost"
                        }
                        className="justify-start"
                        onClick={() => handleNavigation(item.path)}
                      >
                        {item.name}
                      </Button>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

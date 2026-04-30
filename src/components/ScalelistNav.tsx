import { useState, useRef, useEffect } from "react";
import {
  Search,
  CheckCircle2,
  Chrome,
  Smartphone,
  Puzzle,
  Code2,
  Database,
  Users,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

type OverviewItem = {
  title: string;
  description: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
};

type FeatureItem = {
  title: string;
  description: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const overview: OverviewItem[] = [
  {
    title: "Our Data",
    description: "Learn more about our data",
    href: "https://scalelist.com/scalelist-the-field/",
    Icon: Database,
  },
  {
    title: "Customers",
    description: "See how companies succeed with Scalelist",
    href: "https://scalelist.com/customers/",
    Icon: Users,
  },
];

const features: FeatureItem[] = [
  { title: "Email Finder", description: "Discover contact details.", href: "#", Icon: Search },
  { title: "Email Verifier", description: "Keep bounce rates low.", href: "#", Icon: CheckCircle2 },
  { title: "Chrome Extension", description: "Data from Anywhere.", href: "#", Icon: Chrome },
  { title: "Lead Mobile Finder", description: "Reach decision-makers.", href: "#", Icon: Smartphone },
  { title: "Integrations", description: "Connect CRM tools.", href: "#", Icon: Puzzle },
  { title: "API", description: "Build on Scalelist.", href: "#", Icon: Code2 },
];

export function ScalelistNav() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const handleEnter = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleLeave = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-foreground text-background">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 17 L11 11 M9 17 L15 11 M13 17 L19 11" />
            </svg>
          </span>
          <span className="text-xl font-semibold tracking-tight text-foreground">Scalelist</span>
        </a>

        {/* Center nav */}
        <ul className="flex items-center gap-1">
          <li
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="relative"
          >
            <button
              type="button"
              aria-expanded={open}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium text-foreground transition-colors",
                "hover:bg-muted",
                open && "bg-muted",
              )}
            >
              Platform
              <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
            </button>
          </li>
          <li>
            <a href="#" className="inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium text-foreground hover:bg-muted">
              Resources
              <ChevronDown className="h-4 w-4" />
            </a>
          </li>
          <li>
            <a href="#" className="rounded-md px-4 py-2 text-sm font-medium text-foreground hover:bg-muted">
              Customers
            </a>
          </li>
          <li>
            <a href="#" className="rounded-md px-4 py-2 text-sm font-medium text-foreground hover:bg-muted">
              Pricing
            </a>
          </li>
        </ul>

        {/* Right CTAs */}
        <div className="flex items-center gap-2">
          <a href="#" className="hidden text-sm font-medium text-muted-foreground hover:text-foreground sm:inline-block">
            Log in
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Sign up free
          </a>
        </div>
      </nav>

      {/* Mega menu — full width */}
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className={cn(
          "absolute left-0 right-0 top-full w-full origin-top border-b border-border bg-background shadow-[0_24px_40px_-24px_hsl(var(--foreground)/0.18)]",
          "transition-all duration-200 ease-out",
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-10 lg:grid-cols-12">
          {/* Overview */}
          <section className="lg:col-span-4">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Overview
            </h3>
            <ul className="space-y-1">
              {overview.map(({ title, description, href, Icon }) => (
                <li key={title}>
                  <a
                    href={href}
                    className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted"
                  >
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-sm font-semibold text-foreground">{title}</span>
                      <span className="text-sm text-muted-foreground">{description}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Divider */}
          <div className="hidden lg:col-span-1 lg:block">
            <div className="mx-auto h-full w-px bg-border" />
          </div>

          {/* Features */}
          <section className="lg:col-span-7">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Features
            </h3>
            <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
              {features.map(({ title, description, href, Icon }) => (
                <li key={title}>
                  <a
                    href={href}
                    className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted"
                  >
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-sm font-semibold text-foreground">{title}</span>
                      <span className="text-sm text-muted-foreground">{description}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </header>
  );
}

export default ScalelistNav;

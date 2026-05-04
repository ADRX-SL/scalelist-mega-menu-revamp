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
  FileText,
  Youtube,
  GraduationCap,
  HelpCircle,
  Gift,
  Target,
  Users2,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Item = {
  title: string;
  description?: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
  iconClass?: string;
};

const overview: Item[] = [
  { title: "Our Data", description: "Learn more about our data", href: "https://scalelist.com/scalelist-the-field/", Icon: Database },
  { title: "Customers", description: "See how companies succeed with Scalelist", href: "https://scalelist.com/customers/", Icon: Users },
];

const features: Item[] = [
  { title: "Email Finder", description: "Discover contact details.", href: "#", Icon: Search },
  { title: "Email Verifier", description: "Keep bounce rates low.", href: "#", Icon: CheckCircle2 },
  { title: "Chrome Extension", description: "Data from Anywhere.", href: "#", Icon: Chrome },
  { title: "Lead Mobile Finder", description: "Reach decision-makers.", href: "#", Icon: Smartphone },
  { title: "Integrations", description: "Connect CRM tools.", href: "#", Icon: Puzzle },
  { title: "API", description: "Build on Scalelist.", href: "#", Icon: Code2 },
];

const resources: Item[] = [
  { title: "Blog", description: "Read our latest guides.", href: "#", Icon: FileText },
  { title: "Academy", description: "Learn how to use Scalelist.", href: "#", Icon: GraduationCap },
  { title: "Affiliate Program", description: "Partner with Scalelist.", href: "#", Icon: Gift },
  { title: "Youtube", description: "Watch Scalelist tutorials.", href: "#", Icon: Youtube },
  { title: "Help Center", description: "Get product support.", href: "#", Icon: HelpCircle },
];

type MenuKey = "platform" | "resources" | null;

export function ScalelistNav() {
  const [open, setOpen] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuKey>(null);
  const closeTimer = useRef<number | null>(null);

  const handleEnter = (key: Exclude<MenuKey, null>) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpen(key);
  };
  const handleLeave = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(null), 120);
  };
  const keepOpen = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };

  useEffect(() => {
    return () => { if (closeTimer.current) window.clearTimeout(closeTimer.current); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-foreground text-background">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 17 L11 11 M9 17 L15 11 M13 17 L19 11" />
            </svg>
          </span>
          <span className="text-xl font-semibold tracking-tight text-foreground">Scalelist</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          <li onMouseEnter={() => handleEnter("platform")} onMouseLeave={handleLeave} className="relative">
            <button type="button" aria-expanded={open === "platform"}
              className={cn("inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted", open === "platform" && "bg-muted")}>
              Platform
              <ChevronDown className={cn("h-4 w-4 transition-transform", open === "platform" && "rotate-180")} />
            </button>
          </li>
          <li onMouseEnter={() => handleEnter("resources")} onMouseLeave={handleLeave} className="relative">
            <button type="button" aria-expanded={open === "resources"}
              className={cn("inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted", open === "resources" && "bg-muted")}>
              Resources
              <ChevronDown className={cn("h-4 w-4 transition-transform", open === "resources" && "rotate-180")} />
            </button>
          </li>
          <li><a href="#" className="rounded-md px-4 py-2 text-sm font-medium text-foreground hover:bg-muted">Customers</a></li>
          <li><a href="#" className="rounded-md px-4 py-2 text-sm font-medium text-foreground hover:bg-muted">Pricing</a></li>
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-2">
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">Log in</a>
          <a href="#" className="inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90">Sign up free</a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(v => !v)}
          className="inline-flex lg:hidden items-center justify-center rounded-md p-2 text-foreground hover:bg-muted"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Platform mega menu — desktop */}
      <div onMouseEnter={keepOpen} onMouseLeave={handleLeave}
        className={cn("absolute left-0 right-0 top-full hidden lg:block w-full border-b border-border bg-background shadow-[0_24px_40px_-24px_hsl(var(--foreground)/0.18)] transition-all duration-200 ease-out",
          open === "platform" ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0")}>
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-10 lg:grid-cols-12">
          <section className="lg:col-span-4">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Overview</h3>
            <ul className="space-y-1">
              {overview.map(({ title, description, href, Icon }) => (
                <li key={title}>
                  <a href={href} className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground"><Icon className="h-4.5 w-4.5" /></span>
                    <span className="flex flex-col">
                      <span className="text-sm font-semibold text-foreground">{title}</span>
                      <span className="text-sm text-muted-foreground">{description}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <div className="hidden lg:col-span-1 lg:block"><div className="mx-auto h-full w-px bg-border" /></div>
          <section className="lg:col-span-7">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Features</h3>
            <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
              {features.map(({ title, description, href, Icon }) => (
                <li key={title}>
                  <a href={href} className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground"><Icon className="h-4.5 w-4.5" /></span>
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

      {/* Resources mega menu — desktop */}
      <div onMouseEnter={keepOpen} onMouseLeave={handleLeave}
        className={cn("absolute left-0 right-0 top-full hidden lg:block w-full border-b border-border bg-background shadow-[0_24px_40px_-24px_hsl(var(--foreground)/0.18)] transition-all duration-200 ease-out",
          open === "resources" ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0")}>
        <div className="mx-auto w-full max-w-7xl px-6 py-10">
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Resources</h3>
          <ul className="grid grid-cols-1 gap-x-12 gap-y-1 sm:grid-cols-2">
            {resources.map(({ title, description, href, Icon }) => (
              <li key={title}>
                <a href={href} className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground"><Icon className="h-4.5 w-4.5" /></span>
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold text-foreground">{title}</span>
                    <span className="text-sm text-muted-foreground">{description}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile drawer — slides down from header */}
      <div
        className={cn(
          "lg:hidden absolute left-0 right-0 top-full z-40 bg-background border-b border-border overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
          mobileOpen ? "max-h-[calc(100vh-4rem)] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-4 space-y-1">
          <MobileSection
            label="Platform"
            isOpen={mobileSection === "platform"}
            onToggle={() => setMobileSection(s => s === "platform" ? null : "platform")}
          >
            <MobileGroup title="Overview" items={overview} />
            <MobileGroup title="Features" items={features} />
          </MobileSection>

          <MobileSection
            label="Resources"
            isOpen={mobileSection === "resources"}
            onToggle={() => setMobileSection(s => s === "resources" ? null : "resources")}
          >
            <MobileGroup title="Resources" items={resources} />
          </MobileSection>

          <a href="#" className="block rounded-md px-4 py-3 text-base font-medium text-foreground hover:bg-muted">Customers</a>
          <a href="#" className="block rounded-md px-4 py-3 text-base font-medium text-foreground hover:bg-muted">Pricing</a>

          <div className="pt-4 mt-4 border-t border-border space-y-2">
            <a href="#" className="block rounded-md px-4 py-3 text-base font-medium text-foreground hover:bg-muted">Log in</a>
            <a href="#" className="block rounded-md bg-foreground px-4 py-3 text-center text-base font-semibold text-background">Sign up free</a>
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileSection({ label, isOpen, onToggle, children }: { label: string; isOpen: boolean; onToggle: () => void; children: React.ReactNode }) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button type="button" onClick={onToggle} aria-expanded={isOpen}
        className="flex w-full items-center justify-between rounded-md px-4 py-3 text-base font-medium text-foreground hover:bg-muted">
        {label}
        <ChevronDown className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && <div className="pb-3 pl-2">{children}</div>}
    </div>
  );
}

function MobileGroup({ title, items }: { title: string; items: Item[] }) {
  return (
    <div className="mb-2">
      <h4 className="mt-3 mb-1 px-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{title}</h4>
      <ul className="space-y-1">
        {items.map(({ title, description, href, Icon }) => (
          <li key={title}>
            <a href={href} className="flex items-start gap-3 rounded-lg p-3 hover:bg-muted">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border"><Icon className="h-4.5 w-4.5" /></span>
              <span className="flex flex-col">
                <span className="text-sm font-semibold text-foreground">{title}</span>
                {description && <span className="text-sm text-muted-foreground">{description}</span>}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScalelistNav;

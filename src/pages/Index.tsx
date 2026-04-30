import ScalelistNav from "@/components/ScalelistNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScalelistNav />

      <main className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Find and reach the right people, faster.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Hover the <span className="font-medium text-foreground">Platform</span> menu in the
          header to preview the new Scalelist mega menu.
        </p>
      </main>
    </div>
  );
};

export default Index;
